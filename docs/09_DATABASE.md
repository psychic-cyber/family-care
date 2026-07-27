# Family Care

# Database Design & Synchronization

Version: 1.0

Status: Approved

Author: Psychic Cyber + ChatGPT

Last Updated: July 2026

---

# Purpose

This document defines:

- Firestore data model
- SQLite schema
- Relationships
- Synchronization strategy
- Conflict resolution
- Migrations
- Indexing
- Data lifecycle

The application follows an Offline-First architecture where SQLite is the local source of truth and Firestore is the cloud synchronization layer.

---

# Database Architecture

                User
                  │
                  ▼
          Presentation Layer
                  │
                  ▼
          Repository Layer
          ┌───────────────┐
          │               │
          ▼               ▼
      SQLite         Firestore
          │               │
          └──── Sync Engine┘

---

# Design Principles

- Offline First
- Single Source of Truth (Local)
- Eventual Consistency
- Immutable IDs
- Soft Deletes
- Versioned Records

---

# Entity Relationships

User
 └── Family
      ├── Members
      ├── Medicines
      │      └── Reminders
      │             └── Reminder History
      ├── Notifications
      ├── Emergency Contacts
      └── Settings

---

# Firestore Collections

users

families

family_members

medicines

reminders

reminder_history

notifications

voice_profiles

settings

analytics

sync_queue

emergency_contacts

---

# SQLite Tables

users

families

family_members

medicines

reminders

reminder_history

notifications

settings

sync_queue

voice_profiles

---

# Standard Columns

Every table must contain:

id

createdAt

updatedAt

deletedAt (nullable)

version

syncStatus

deviceId

ownerId

---

# Sync Status Values

PENDING

SYNCING

SYNCED

FAILED

CONFLICT

---

# Users Table

Columns

id

fullName

email

phone

profileImage

language

createdAt

updatedAt

version

syncStatus

---

# Families Table

Columns

id

familyName

createdBy

inviteCode

createdAt

updatedAt

version

syncStatus

---

# Family Members Table

Columns

id

familyId

userId

role

relationship

status

createdAt

updatedAt

version

syncStatus

---

# Medicines Table

Columns

id

familyId

name

dosage

unit

instructions

imageUrl

startDate

endDate

frequency

isActive

createdAt

updatedAt

version

syncStatus

---

# Reminders Table

Columns

id

medicineId

scheduledTime

repeatType

daysOfWeek

timezone

voiceProfileId

status

nextRun

createdAt

updatedAt

version

syncStatus

---

# Reminder History Table

Columns

id

reminderId

scheduledAt

completedAt

confirmationMethod

result

notes

createdAt

syncStatus

---

# Notifications Table

Columns

id

title

body

type

status

readAt

createdAt

syncStatus

---

# Voice Profiles Table

Columns

id

userId

storagePath

duration

language

createdAt

updatedAt

syncStatus

---

# Emergency Contacts Table

Columns

id

userId

name

phone

relationship

priority

createdAt

updatedAt

syncStatus

---

# Settings Table

Columns

id

theme

language

notificationsEnabled

voiceEnabled

fontScale

updatedAt

syncStatus

---

# Sync Queue

Purpose

Store pending operations while offline.

Columns

id

entity

entityId

operation

payload

retryCount

lastAttempt

status

createdAt

---

# Supported Operations

CREATE

UPDATE

DELETE

RESTORE

---

# Synchronization Flow

User Action

↓

Save to SQLite

↓

Mark as PENDING

↓

Queue Operation

↓

Internet Available?

├── No → Wait
└── Yes
      ↓
 Upload to Firestore
      ↓
 Update SQLite
      ↓
 Mark as SYNCED

---

# Conflict Resolution

Default Strategy

Last Write Wins

Conflict Detection

- Different version
- Different updatedAt
- Different deviceId

Manual Merge

Only for critical conflicts.

---

# Deletion Strategy

Soft Delete

deletedAt is populated.

Records remain until successful synchronization.

Hard Delete

Performed only after:

- Successful sync
- Retention period expires

---

# Indexing Strategy

SQLite

Index:

email

familyId

medicineId

scheduledTime

nextRun

syncStatus

Firestore

Composite indexes for:

familyId + createdAt

medicineId + nextRun

userId + updatedAt

---

# Migrations

Every schema change requires:

Migration Version

Migration Script

Rollback Strategy

Backward Compatibility Check

---

# Backup Strategy

SQLite

Automatic local backup before migrations.

Firestore

Cloud persistence enabled.

---

# Data Retention

Reminder History

Retain for 12 months.

Notifications

Retain for 90 days.

Sync Queue

Delete after successful synchronization.

Soft Deleted Records

Retain for 30 days.

---

# Performance Targets

SQLite Query

<100ms

Reminder Scheduling

<300ms

Sync Batch

50 records per batch

App Startup

<2 seconds

---

# Security

Never store passwords.

Never store authentication tokens in SQLite.

Encrypt sensitive preferences.

Use Secure Storage for credentials.

---

# Database Rules

Every entity must have a unique ID.

Every record must include timestamps.

Every write operation goes through the Repository.

SQLite is the local source of truth.

Firestore is the synchronization layer.

Never bypass the Sync Engine.

No direct database access from the UI.

---

# Future Enhancements

Encrypted SQLite Database

Multi-device Conflict Resolution

Incremental Sync

Background Delta Sync

Automatic Database Compression

Archive Old Reminder History
