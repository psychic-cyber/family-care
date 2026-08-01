# Family Care

# Database Design

Version: 2.0

Status

Approved

Project Owner

Zaeem Ahmad

---

# Purpose

This document defines the complete database architecture for Family Care.

The application uses two databases.

• Firebase Firestore

• SQLite

Firestore is the cloud database.

SQLite is the offline local database.

---

# Database Strategy

Cloud

↓

Firestore

↓

Synchronization Engine

↓

SQLite

↓

Application

Internet is optional.

Medicine reminders must continue working even when offline.

---

# Firestore Collections

users

families

familyMembers

patients

medicines

medicineSchedules

medicineHistory

appointments

notifications

reports

settings

emergencyContacts

voiceSettings

---

# SQLite Tables

users

families

patients

medicines

medicine_schedules

medicine_history

appointments

notifications

reports_cache

pending_sync

settings

voice_settings

All important data is stored locally.

---

# Collection

users

Purpose

Application users.

Fields

id

firebaseUid

fullName

email

phone

role

profileImage

createdAt

updatedAt

status

Example Role

Administrator

Caregiver

Parent

---

# Collection

families

Purpose

Represents one family.

Fields

id

familyName

createdBy

timezone

language

createdAt

updatedAt

status

---

# Collection

familyMembers

Purpose

Stores relationships inside one family.

Fields

id

familyId

userId

relation

deviceType

devicePlatform

voiceEnabled

notificationEnabled

status

---

# Collection

patients

Purpose

Stores parent information.

Fields

id

familyId

fullName

gender

dateOfBirth

bloodGroup

height

weight

medicalConditions

profileImage

emergencyContact

createdAt

updatedAt

status

---

# Collection

medicines

Purpose

Medicine master.

Fields

id

patientId

medicineName

dosage

type

instructions

startDate

endDate

createdAt

updatedAt

status

---

# Collection

medicineSchedules

Purpose

Reminder schedule.

Fields

id

medicineId

patientId

time

repeatType

repeatDays

voiceReminder

enabled

createdAt

updatedAt

---

# Collection

medicineHistory

Purpose

Medicine history.

Fields

id

scheduleId

patientId

date

scheduledTime

takenTime

status

notes

---

Status Values

Taken

Pending

Missed

Skipped

---

# Collection

appointments

Fields

id

patientId

doctorName

hospital

date

time

notes

status

---

# Collection

notifications

Fields

id

familyId

title

message

type

isRead

createdAt

---

Notification Types

Medicine

Reminder

Emergency

Appointment

Caregiver

System

---

# Collection

reports

Fields

id

patientId

week

month

taken

missed

compliance

generatedAt

---

# Collection

settings

Fields

id

theme

language

notifications

darkMode

voiceEnabled

---

# Collection

voiceSettings

Fields

id

language

voice

speed

pitch

volume

repeatCount

greetingEnabled

---

# Collection

emergencyContacts

Fields

id

patientId

name

relation

phone

priority

---

# Relationships

Family

↓

Patients

↓

Medicines

↓

Schedules

↓

History

↓

Reports

---

# Synchronization

Every CRUD operation follows:

SQLite

↓

Pending Queue

↓

Internet Available

↓

Firestore

↓

Success

↓

Remove Queue

---

# Offline Queue

Stores

Create

Update

Delete

Retry

Sync Timestamp

---

# Reminder Storage

SQLite stores

Reminder Time

Medicine

Voice Settings

Repeat Rules

Status

Reminder ID

This guarantees reminders work offline.

---

# History Flow

Reminder Trigger

↓

Notification

↓

Voice Reminder

↓

User Action

↓

SQLite History

↓

Firestore Sync

---

# Indexes

Firestore Indexes

familyId

patientId

medicineId

scheduleId

createdAt

status

These indexes improve query performance.

---

# Local IDs

Every record contains

localId

cloudId

This simplifies synchronization.

---

# Data Retention

Medicine History

12 Months

Reports

24 Months

Notifications

90 Days

Pending Sync

Until Success

---

# Backup Strategy

Firestore

Automatic Cloud Backup

SQLite

Recreated from Cloud after login

MMKV

Stores lightweight settings only.

---

# Security

Every family accesses only its own records.

Firestore Security Rules enforce isolation.

Sensitive information is never shared across families.

---

# Future Tables

doctor_notes

prescriptions

medicine_inventory

health_metrics

wearable_data

ai_recommendations

video_consultations

These tables are reserved for future versions.

---

# Database Rules

Never access Firestore directly from UI.

Never access SQLite directly from Presentation.

Always use Repository Layer.

Always validate before saving.

Never duplicate data unnecessarily.

---

# Current Database Version

Version

1.0

Status

Approved

---

End of Document

Document Name

09_DATABASE.md

Version

2.0

Status

Approved

Project

Family Care

Project Owner

Zaeem Ahmad
