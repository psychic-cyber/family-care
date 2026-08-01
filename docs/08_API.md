# Family Care

# API Specification

Version: 2.0

Status

Approved

Project Owner

Zaeem Ahmad

---

# Purpose

This document defines all application APIs and repository contracts.

Family Care currently uses Firebase.

The application architecture must allow migration to any backend in the future.

Examples

Firebase

Node.js

ASP.NET Core

Spring Boot

Laravel

without changing Presentation Layer.

---

# API Architecture

Presentation

↓

Use Case

↓

Repository Interface

↓

Repository Implementation

↓

Firebase

(SQLite Offline)

Future

REST API

GraphQL

gRPC

---

# Current Backend

Authentication

Firebase Authentication

Database

Firestore

Notifications

Firebase Cloud Messaging

Offline

SQLite

---

# Repository Contracts

Every feature communicates only through Repository Interfaces.

Presentation never communicates directly with Firebase.

---

# Authentication API

Repository

IAuthenticationRepository

Functions

login()

register()

logout()

verifyOTP()

forgotPassword()

refreshSession()

getCurrentUser()

deleteAccount()

---

# Family API

Repository

IFamilyRepository

Functions

createFamily()

updateFamily()

deleteFamily()

getFamily()

inviteMember()

acceptInvitation()

removeMember()

getMembers()

---

# Patient API

Repository

IPatientRepository

Functions

createPatient()

updatePatient()

archivePatient()

restorePatient()

deletePatient()

getPatient()

getPatients()

searchPatients()

---

# Medicine API

Repository

IMedicineRepository

Functions

createMedicine()

updateMedicine()

deleteMedicine()

getMedicine()

getMedicines()

pauseMedicine()

resumeMedicine()

---

# Reminder API

Repository

IReminderRepository

Functions

scheduleReminder()

cancelReminder()

rescheduleReminder()

confirmMedicine()

skipReminder()

markMissed()

getTodayReminders()

getReminderHistory()

---

# Voice API

Repository

IVoiceRepository

Functions

playReminder()

stopReminder()

changeLanguage()

updateVoiceSettings()

previewVoice()

---

# Notification API

Repository

INotificationRepository

Functions

sendNotification()

scheduleNotification()

cancelNotification()

markAsRead()

getNotifications()

clearNotifications()

---

# Report API

Repository

IReportRepository

Functions

generateDaily()

generateWeekly()

generateMonthly()

medicineCompliance()

patientHistory()

dashboardSummary()

---

# Settings API

Repository

ISettingsRepository

Functions

updateTheme()

changeLanguage()

updateProfile()

updateNotificationSettings()

updateVoiceSettings()

logout()

---

# Emergency API

Repository

IEmergencyRepository

Functions

sendSOS()

callEmergencyContact()

getEmergencyContacts()

updateEmergencyContact()

---

# Authentication Flow

Register

↓

Firebase Auth

↓

OTP

↓

Firestore User

↓

Dashboard

---

Login

↓

Firebase Auth

↓

Load Profile

↓

Dashboard

---

# Family Flow

Create Family

↓

Firestore

↓

Create Family Document

↓

Invite Members

↓

Join Family

---

# Patient Flow

Create Patient

↓

Firestore

↓

SQLite

↓

Dashboard Refresh

---

# Medicine Flow

Create Medicine

↓

Firestore

↓

SQLite

↓

Reminder Scheduler

↓

Notification Created

---

# Reminder Flow

Reminder Time

↓

Notifee

↓

Voice Reminder

↓

Taken

↓

History

↓

Firestore Sync

---

# Offline API Strategy

SQLite always executes first.

↓

Pending Sync Queue

↓

Internet Available

↓

Firestore Update

↓

Queue Cleared

---

# Standard Response

Success

success

message

data

timestamp

Failure

success

errorCode

message

timestamp

---

# Error Codes

AUTH001

Invalid Credentials

AUTH002

Session Expired

PATIENT001

Patient Not Found

MED001

Medicine Not Found

REM001

Reminder Failed

NET001

No Internet

SYNC001

Synchronization Failed

---

# API Rules

Every repository must:

Return typed models.

Throw meaningful exceptions.

Hide Firebase implementation.

Support offline synchronization.

Never expose SDK-specific code.

---

# Future REST Endpoints

/auth/login

/auth/register

/auth/logout

/families

/patients

/medicines

/reminders

/reports

/settings

/emergency

These endpoints are reserved for future backend migration.

---

# API Version

Current

v1

Future

v2

AI Features

v3

Healthcare Ecosystem

---

# Documentation Rule

Every new repository must include:

Interface

Implementation

Use Case

Unit Tests

Documentation

No API is considered complete until documented.

---

# End of Document

Document Name

08_API.md

Version

2.0

Status

Approved

Project

Family Care

Project Owner

Zaeem Ahmad
