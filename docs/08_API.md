# Family Care

# API & Repository Contracts

Version: 1.0

Status: Approved

Author: Psychic Cyber + ChatGPT

Last Updated: July 2026

---

# Purpose

This document defines the contracts between the Application, Domain, and Infrastructure layers.

The Presentation and Domain layers must never communicate directly with Firebase or any external service.

All communication must happen through repositories.

---

# Architecture Flow

Presentation

↓

Application

↓

Repository Interface

↓

Infrastructure

↓

Firebase / SQLite / External APIs

---

# Repository List

AuthenticationRepository

FamilyRepository

MemberRepository

MedicineRepository

ReminderRepository

NotificationRepository

VoiceRepository

SyncRepository

SettingsRepository

AnalyticsRepository

StorageRepository

HealthRepository (Future)

EmergencyRepository

---

# AuthenticationRepository

Purpose

Manage authentication and user sessions.

Methods

login(email, password)

register(user)

logout()

refreshSession()

forgotPassword(email)

verifyOtp(code)

getCurrentUser()

deleteAccount()

---

# FamilyRepository

Purpose

Manage family groups.

Methods

createFamily()

joinFamily()

leaveFamily()

inviteMember()

removeMember()

getFamily()

updateFamily()

---

# MemberRepository

Purpose

Manage family members.

Methods

addMember()

updateMember()

deleteMember()

getMember()

getMembers()

assignRole()

---

# MedicineRepository

Purpose

Manage medicine records.

Methods

createMedicine()

updateMedicine()

deleteMedicine()

getMedicine()

getMedicines()

searchMedicines()

archiveMedicine()

---

# ReminderRepository

Purpose

Manage reminder scheduling.

Methods

scheduleReminder()

cancelReminder()

updateReminder()

getReminder()

getTodaysReminders()

retryReminder()

markCompleted()

markMissed()

---

# NotificationRepository

Purpose

Manage notifications.

Methods

scheduleLocal()

cancel()

sendRemote()

markRead()

getHistory()

---

# VoiceRepository

Purpose

Handle voice interactions.

Methods

playVoice()

recordVoice()

startListening()

stopListening()

analyzeSpeech()

saveVoice()

deleteVoice()

---

# SyncRepository

Purpose

Synchronize local and cloud data.

Methods

syncAll()

pushPending()

pullLatest()

resolveConflicts()

getQueue()

retryFailed()

---

# SettingsRepository

Purpose

Store application settings.

Methods

saveTheme()

saveLanguage()

savePreferences()

getPreferences()

reset()

---

# AnalyticsRepository

Purpose

Generate reports.

Methods

getDaily()

getWeekly()

getMonthly()

getAdherence()

exportReport()

---

# StorageRepository

Purpose

Manage secure file storage.

Methods

uploadImage()

deleteImage()

downloadImage()

getSignedUrl()

---

# EmergencyRepository

Purpose

Emergency contacts and alerts.

Methods

addContact()

removeContact()

sendEmergencyAlert()

getContacts()

---

# Domain Models

User

Family

FamilyMember

Medicine

Reminder

ReminderHistory

Notification

VoiceProfile

EmergencyContact

AnalyticsReport

SyncJob

Settings

---

# Data Transfer Objects (DTOs)

UserDto

FamilyDto

MedicineDto

ReminderDto

NotificationDto

VoiceDto

AnalyticsDto

SettingsDto

---

# Validation Rules

Email

Valid email format.

Password

Minimum 8 characters.

Medicine Name

Required.

Maximum 100 characters.

Reminder Time

Must be a valid future time.

Family Name

Maximum 50 characters.

Voice Recording

Maximum duration: 30 seconds.

---

# Error Codes

AUTH_INVALID_CREDENTIALS

AUTH_SESSION_EXPIRED

AUTH_EMAIL_ALREADY_EXISTS

AUTH_ACCOUNT_DISABLED

FAMILY_NOT_FOUND

MEMBER_NOT_FOUND

MEDICINE_NOT_FOUND

REMINDER_NOT_FOUND

VOICE_RECOGNITION_FAILED

NOTIFICATION_FAILED

SYNC_FAILED

NETWORK_UNAVAILABLE

UNKNOWN_ERROR

---

# Error Handling Rules

Infrastructure returns typed errors.

Application maps errors to business-friendly messages.

Presentation displays localized messages.

Raw Firebase exceptions must never reach the UI.

---

# Firebase Collections

users

families

family_members

medicines

reminders

reminder_history

notifications

voice_profiles

analytics

settings

sync_queue

emergency_contacts

---

# Local SQLite Tables

users

families

members

medicines

reminders

history

notifications

sync_queue

settings

---

# API Versioning

Current Version

v1

Breaking Changes

Increase major version.

Backward Compatible Changes

Increase minor version.

Bug Fixes

Increase patch version.

---

# Response Pattern

Success

status

message

data

timestamp

Failure

status

message

errorCode

details

timestamp

---

# Pagination Standard

page

pageSize

totalItems

totalPages

hasNext

hasPrevious

---

# Security Rules

Every request requires authentication unless explicitly public.

Validate all inputs.

Sanitize user-provided data.

Never expose internal IDs unnecessarily.

Use HTTPS only.

---

# Logging Rules

Never log:

Passwords

Tokens

Medical data

Voice recordings

Personal information

Log only operational and debugging information in development.

---

# Testing Requirements

Every repository must have:

Unit Tests

Mock Implementations

Integration Tests

Repository Contract Tests

---

# Future Integrations

Apple Health

Health Connect

Google Fit

WearOS

Apple Watch

Smart Devices

AI Assistant

Doctor Portal

---

# API Principles

Repositories are the single source of truth for data access.

Domain models remain independent of external services.

Infrastructure is replaceable without changing business logic.

Every repository must be mockable and testable.
