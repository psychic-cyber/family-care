# Family Care

# Software Architecture Document

Version: 2.0

Status: Approved

Project Owner:
Zaeem Ahmad

Architecture:
Clean Architecture

Platforms:
Android
iOS

Technology:
React Native CLI
TypeScript
Firebase
Firestore
SQLite
React Navigation
Notifee
React Native Background Actions

Last Updated:
August 2026

---

# 1. Introduction

This document describes the technical architecture of the Family Care application.

It defines how the application is organized, how modules communicate, how data flows through the system and how future features should be implemented.

Every new feature added to Family Care must follow this architecture.

---

# 2. Architecture Goals

The architecture is designed to achieve the following goals.

• Clean

• Scalable

• Modular

• Reusable

• Testable

• Maintainable

• Offline First

• Cross Platform

• AI Ready

---

# 3. Architecture Style

Family Care follows

Clean Architecture

combined with

Feature First Architecture.

Each feature owns its own:

• Domain

• Application

• Infrastructure

• Presentation

This prevents coupling between modules.

Every feature remains independent.

---

# 4. High Level Architecture

                    Mobile App
                         │
                         ▼
               Presentation Layer
                         │
                         ▼
               Application Layer
                         │
                         ▼
                  Domain Layer
                         │
                         ▼
             Infrastructure Layer
                         │
         ┌───────────────┴───────────────┐
         │                               │
         ▼                               ▼
     Firebase                      SQLite
         │                               │
         └───────────────┬───────────────┘
                         │
                         ▼
                  Local Device

---

# 5. Technology Stack

Frontend

React Native CLI

TypeScript

React Navigation

React Hook Form

Zod

React Native Vector Icons

Backend

Firebase Authentication

Firestore

Firebase Cloud Messaging

Storage

SQLite

Async Storage

Notifications

Notifee

Background Services

Voice

React Native TTS

Future

OpenAI

OCR

Health Connect

Apple HealthKit

Wear OS

Apple Watch

---

# 6. Design Principles

The project follows these principles.

Single Responsibility

Every class performs one responsibility.

Open Closed

Modules should be extendable without modification.

Dependency Inversion

Business logic never depends upon frameworks.

Interface Driven Development

Repositories communicate through interfaces.

Feature Isolation

Every feature owns its own code.

Reusable Components

Shared components belong inside

src/components

Never inside feature folders.

---

# 7. Project Structure

family_care/

docs/

mobile/

.github/

README.md

---

Inside mobile

mobile/

android/

ios/

assets/

src/

package.json

tsconfig.json

---

Inside src

src/

app/

components/

features/

hooks/

navigation/

providers/

theme/

utils/

types/

---

# 8. Feature Structure

Every feature follows exactly the same architecture.

Example

features/

authentication/

admin/

future_patient/

future_family/

future_reports/

future_settings/

Every feature contains

application/

domain/

infrastructure/

presentation/

Nothing else.

---

# 9. Layer Responsibilities

Presentation

Contains

Screens

Hooks

Components

Navigation

View Models

No business logic belongs here.

---

Application

Contains

Use Cases

Dependency Injection

Application Services

Coordinates business operations.

---

Domain

Contains

Entities

Repository Interfaces

Business Rules

Validation

No Firebase code.

No React Native code.

Pure TypeScript.

---

Infrastructure

Contains

Firebase

SQLite

Repositories

Notification Services

API Services

Background Workers

Everything related to external frameworks.

---

# 10. Dependency Rule

Allowed

Presentation

↓

Application

↓

Domain

↓

Infrastructure

Not Allowed

Infrastructure

↓

Presentation

Domain

↓

React Native

Application

↓

Firebase

This rule must never be broken.

---

# 11. Navigation Architecture

App

↓

AppProviders

↓

NavigationContainer

↓

RootNavigator

↓

Authentication

or

Admin

↓

Bottom Tabs

↓

Feature Screens

---

Navigation Tree

Splash

↓

Login

↓

Dashboard

↓

Patients

↓

Caregivers

↓

Alerts

↓

Profile

Future

↓

Medicines

Appointments

Reports

Settings

Emergency

---

# 12. Component Architecture

Reusable Components

src/components

Examples

AppButton

AppInput

AppCard

AppHeader

AppAvatar

AppBadge

AppFAB

AppDivider

AppStatusChip

AppNotificationBell

AppEmptyState

AppListItem

These components are reusable across every feature.

Feature-specific components remain inside their own feature.

---

# 13. Theme Architecture

Theme lives inside

src/theme

Contains

Colors

Spacing

Radius

Elevation

Typography

Light Theme

Dark Theme

Every screen must use

useAppTheme()

Hardcoded colors are not allowed.

---

# 14. Common Hooks

Global hooks remain inside

src/hooks

Feature hooks remain inside

feature/presentation/hooks

Examples

useTheme

useLoginForm

Future

useReminder

usePatients

useMedicines

---

# 15. State Management

Current

React Hooks

Context API

Future

Redux Toolkit

Only if global complexity increases.

Avoid unnecessary global state.

---

# 16. Current Features

Completed

Authentication

Theme

Navigation

Admin Module

Dashboard Foundation

Reusable Components

In Progress

Dashboard UI

Pending

Family

Patients

Medicines

Reminder Engine

Voice Reminder

Reports

Emergency

AI

---

# 17. Authentication Architecture

Family Care uses Firebase Authentication as the authentication provider.

Authentication is separated into independent layers.

Presentation

↓

Login Screen

↓

Login Hook

↓

Login Use Case

↓

Authentication Repository

↓

Firebase Authentication

This ensures business logic never depends directly on Firebase.

---

Authentication Flow

Login Screen

↓

Validate Form

↓

Login Use Case

↓

Authentication Repository

↓

Firebase Auth

↓

Return User

↓

Dashboard

---

Authentication Responsibilities

Presentation

• User Interface

• Validation Messages

Application

• Execute Login

• Execute Logout

• Session Management

Domain

• Authentication Interfaces

• Business Rules

Infrastructure

• Firebase SDK

• Authentication APIs

---

# 18. Family Architecture

Each caregiver owns exactly one family.

One family contains multiple members.

Family

↓

Caregiver

↓

Members

↓

Medicines

↓

Health Records

↓

Reports

Future versions may support multiple caregivers.

---

Family Entity

Contains

Family ID

Family Name

Primary Caregiver

Country

Timezone

Language

Created Date

Updated Date

---

Member Entity

Contains

Member ID

Full Name

Photo

Gender

Date Of Birth

Phone

Email

Relation

Device Type

Status

---

Supported Relations

Father

Mother

Grandfather

Grandmother

Brother

Sister

Guardian

Patient

Other

---

# 19. Patient Architecture

Patients belong to a family.

Family

↓

Patient

↓

Medicines

↓

Appointments

↓

Health Records

↓

Reminder History

Every patient owns independent medical data.

---

Patient Information

Patient ID

Full Name

Photo

Age

Blood Group

Height

Weight

Doctor

Hospital

Emergency Contact

Medical Notes

Status

---

# 20. Medicine Architecture

Each patient can own multiple medicines.

Patient

↓

Medicine

↓

Reminder Schedule

↓

History

↓

Statistics

---

Medicine Entity

Medicine ID

Patient ID

Medicine Name

Strength

Dose

Instructions

Doctor

Start Date

End Date

Status

---

Medicine Status

Active

Paused

Completed

Expired

---

Medicine Schedule

Morning

Afternoon

Evening

Night

Custom Time

Repeat Rules

---

# 21. Reminder Engine

Reminder Engine is the heart of Family Care.

Responsibilities

Create Reminder

↓

Schedule Reminder

↓

Fire Notification

↓

Play Voice

↓

Wait For Confirmation

↓

Save History

↓

Notify Caregiver

---

Reminder Lifecycle

Medicine Created

↓

Schedule Generated

↓

Stored Locally

↓

Notification Triggered

↓

Patient Action

↓

Taken

or

Missed

↓

Dashboard Updated

---

Reminder Types

Local Reminder

Voice Reminder

Repeated Reminder

Critical Reminder

Emergency Reminder

---

# 22. Voice Reminder Architecture

Voice reminders use Text-To-Speech.

Reminder Time

↓

Notification

↓

Text To Speech

↓

Voice Played

↓

Wait For Response

↓

Taken

or

Repeat

---

Voice Configuration

Enabled

Language

Voice Speed

Voice Pitch

Volume

Greeting

Relation Name

---

Example Voice

Assalam-o-Alaikum Baba.

Medicine lene ka waqt ho gaya hai.

Please take your medicine.

---

# 23. Notification Architecture

Notification Sources

Medicine Reminder

Appointment Reminder

Emergency Alert

Caregiver Alert

Future AI Alert

---

Notification Flow

Reminder Trigger

↓

Local Notification

↓

Patient Action

↓

Firebase Sync

↓

Caregiver Notification

---

Notification Priority

Low

Information

Medium

Reminder

High

Missed Medicine

Critical

Emergency

---

# 24. Repository Architecture

Repositories isolate external frameworks.

Presentation

↓

Use Case

↓

Repository Interface

↓

Repository Implementation

↓

Firebase

or

SQLite

---

Current Repositories

Authentication Repository

Future

Family Repository

Patient Repository

Medicine Repository

Reminder Repository

Notification Repository

Report Repository

Emergency Repository

---

# 25. Use Case Architecture

Every user action becomes one Use Case.

Examples

Login

Logout

Create Family

Invite Member

Add Patient

Update Patient

Delete Patient

Add Medicine

Schedule Reminder

Confirm Medicine

Generate Report

Send Emergency Alert

Every use case performs one responsibility.

---

# 26. Current Module Dependencies

Authentication

↓

Firebase

↓

Session

↓

Dashboard

Dashboard

↓

Patients

↓

Medicines

↓

Reports

↓

Alerts

Patients

↓

Medicines

↓

Reminder Engine

Reminder Engine

↓

Notifications

↓

Voice

↓

History

History

↓

Reports

---

# 27. Error Handling Architecture

Errors are handled in three layers.

Presentation

Shows Friendly Message

↓

Application

Logs Business Error

↓

Infrastructure

Logs Technical Error

---

Example

Wrong Password

↓

Firebase Error

↓

Repository

↓

Use Case

↓

Login Screen

↓

Invalid email or password.

---

# 28. Validation Architecture

Validation exists in Domain Layer.

Uses

Zod

Validation happens before Use Cases execute.

Examples

Email

Password

Patient Name

Medicine Name

Reminder Time

Phone Number

---

# 29. Current Completed Architecture

Completed

✓ Clean Architecture

✓ Authentication

✓ Firebase Login

✓ Theme System

✓ Navigation

✓ Admin Dashboard Foundation

✓ Reusable Components

In Progress

Dashboard UI

Pending

Family

Patients

Medicines

Reminder Engine

Voice Reminder

Offline Sync

Reports

Emergency

AI

---

# 30. Data Architecture

Family Care follows a hybrid storage architecture.

Two databases are used.

• Firebase Firestore

• SQLite

Both databases work together.

Firebase provides cloud synchronization.

SQLite provides offline functionality.

---

# 31. Cloud Architecture

Firebase is the primary cloud platform.

Modules

Firebase Authentication

Firestore Database

Firebase Cloud Messaging

Firebase Storage (Future)

Analytics (Future)

Crashlytics (Future)

---

Cloud Flow

Application

↓

Repository

↓

Firebase SDK

↓

Firestore

↓

Cloud

---

# 32. Local Database Architecture

SQLite stores all important information locally.

Purpose

Offline Support

Fast Loading

Local Search

Reminder Scheduling

History Cache

Pending Synchronization

---

SQLite Tables

Families

Patients

Medicines

MedicineSchedules

ReminderHistory

Appointments

Notifications

PendingSync

Settings

VoiceSettings

---

Example

Patient

↓

Medicine

↓

Reminder

↓

History

All available locally.

---

# 33. Offline First Architecture

Family Care is designed as an Offline First application.

Internet is not required for daily medicine reminders.

Workflow

Medicine Created

↓

Saved To Firebase

↓

Saved To SQLite

↓

Reminder Scheduled

↓

Internet Lost

↓

SQLite Continues Working

↓

Reminder Fires

↓

History Stored

↓

Internet Returns

↓

Automatic Synchronization

---

Offline Features

Login Session

Dashboard Cache

Patients

Medicines

Reminders

Voice Reminder

History

Reports Cache

---

# 34. Synchronization Engine

Synchronization happens automatically.

Rules

Cloud Wins

for shared changes.

Local Wins

for unsynchronized records.

---

Sync Flow

SQLite

↓

Pending Queue

↓

Internet Available

↓

Upload

↓

Firestore

↓

Success

↓

Remove Queue

---

Sync Queue

Create

Update

Delete

Retry Failed Upload

---

# 35. Firestore Architecture

Collections

Users

Families

Members

Patients

Medicines

Appointments

Reports

Notifications

EmergencyContacts

VoiceSettings

---

Example

Families

↓

Patients

↓

Medicines

↓

Schedules

↓

History

---

# 36. Repository Communication

Presentation

↓

Use Case

↓

Repository Interface

↓

Repository Implementation

↓

SQLite

↓

Firebase

↓

Return Result

The Presentation Layer never communicates directly with Firebase.

---

# 37. Dependency Injection

All repositories are created inside

application/container

Example

Authentication Container

↓

Login Use Case

↓

Authentication Repository

Future

Family Container

Patient Container

Medicine Container

Reminder Container

Report Container

Emergency Container

Dependency Injection makes modules independent.

---

# 38. Reminder Scheduling

Reminder Scheduling follows this lifecycle.

Medicine Saved

↓

Schedule Generated

↓

SQLite Updated

↓

Notifee Schedule Created

↓

Reminder Time Reached

↓

Notification Displayed

↓

Voice Reminder

↓

Patient Action

↓

History Saved

↓

Sync Firebase

---

# 39. Background Processing

Background workers perform:

Reminder Scheduling

Reminder Repeat

Pending Synchronization

Notification Cleanup

Future

Health Sync

AI Processing

Wearable Sync

---

# 40. Notification Architecture

Notification Sources

Medicine

Appointment

Emergency

Caregiver

Future AI

Delivery

Local Notification

↓

Voice Reminder

↓

Patient Action

↓

History

↓

Caregiver Notification

---

# 41. Voice Engine

Voice Reminder uses Text To Speech.

Configuration

Language

Voice

Speed

Pitch

Volume

Greeting

Relation

Example

Assalam-o-Alaikum Baba.

Medicine lene ka waqt ho gaya hai.

Please take your medicine.

Future

Natural AI Voices

Voice Cloning

Personalized Greetings

---

# 42. Dashboard Data Flow

Firebase

↓

Repository

↓

Use Case

↓

Dashboard

↓

Overview Cards

↓

Recent Activity

↓

Reports

↓

Alerts

Dashboard never queries Firebase directly.

---

# 43. Logging Architecture

Development

Console Logs

Testing

Structured Logs

Production

Crash Reports

Analytics

Future

Crashlytics

Error Monitoring

Performance Monitoring

---

# 44. Security Architecture

Authentication Required

Family Isolation

Encrypted Communication

Role Based Access

Secure Local Storage

Firestore Security Rules

Every family only accesses its own data.

---

# 45. Current Architecture Status

Completed

✓ Clean Architecture

✓ Feature First

✓ Theme System

✓ Authentication

✓ Firebase

✓ Navigation

✓ Dashboard Foundation

✓ Reusable Components

In Progress

Dashboard

Pending

SQLite

Family

Patients

Medicines

Reminder Engine

Voice Reminder

Reports

Emergency

AI

---

# 46. Performance Architecture

Family Care must remain responsive on both Android and iPhone.

Target Performance

Application Launch

Less than 3 seconds

Dashboard Loading

Less than 2 seconds

Screen Navigation

Less than 300ms

Reminder Trigger Delay

Less than 1 second

Voice Reminder Start

Less than 2 seconds

The application must remain smooth even with hundreds of medicines.

---

# 47. Scalability Strategy

The architecture is designed to grow without major refactoring.

Current Modules

Authentication

Admin Dashboard

Future Modules

Family

Patients

Medicines

Appointments

Reports

Emergency

Settings

AI

OCR

Health Devices

Doctor Portal

Hospital Portal

Every module remains independent.

Adding a new module must never require changes in existing modules.

---

# 48. Code Organization

Every feature follows exactly the same structure.

feature/

application/

container/

useCases/

domain/

entities/

repositories/

validation/

infrastructure/

repositories/

services/

presentation/

components/

hooks/

navigation/

screens/

This structure is mandatory.

No feature may break this architecture.

---

# 49. Coding Standards

Project Language

TypeScript

No JavaScript files.

Use Functional Components.

Use React Hooks.

Never use class components.

Always create interfaces inside

domain/repositories

Business rules remain inside

Domain Layer.

Firebase code remains inside

Infrastructure Layer.

Presentation never contains business logic.

---

# 50. Naming Convention

Folders

lowercase

Example

authentication

patients

reports

Files

PascalCase

LoginScreen.tsx

DashboardScreen.tsx

MedicineCard.tsx

Variables

camelCase

Functions

camelCase

Interfaces

Prefix

I

Example

IAuthRepository

Entities

PascalCase

Patient

Medicine

Family

Reminder

---

# 51. Git Strategy

Branch

main

Future

feature/dashboard

feature/patients

feature/reminders

feature/reports

Commit Messages

feat:

fix:

refactor:

docs:

style:

Example

feat(auth): implement Firebase login

fix(reminder): resolve duplicate notification issue

docs(prd): update architecture documentation

---

# 52. Version Strategy

Version 1.0

Authentication

Family

Patients

Medicines

Reminder

Voice

Reports

Version 2.0

Multiple Caregivers

OCR

Doctor Portal

Version 3.0

AI Assistant

Health Prediction

Wearables

Version 4.0

Healthcare Ecosystem

---

# 53. Deployment Architecture

Developer

↓

GitHub

↓

GitHub Actions (Future)

↓

Android Release

↓

Google Play Store

↓

iOS Release

↓

Apple App Store

Future

Firebase App Distribution

Beta Testing

Internal Testing

---

# 54. Security Strategy

Authentication

Firebase Authentication

Authorization

Role Based Access

Database

Firestore Security Rules

Communication

HTTPS

Sensitive Data

Encrypted

Every family has isolated data.

No caregiver can access another family's records.

---

# 55. AI Ready Architecture

Future AI modules will plug into existing architecture.

AI Features

Medicine Explanation

Health Summary

Health Suggestions

Appointment Assistant

Voice Assistant

Medicine Interaction Detection

AI modules will communicate only through

Application Layer.

Presentation will never call AI services directly.

---

# 56. Wearable Architecture

Future integrations include

Google Health Connect

Apple HealthKit

Wear OS

Apple Watch

Smart Blood Pressure Devices

Smart Glucose Devices

Smart Weight Scale

Wearables

↓

Infrastructure

↓

Repository

↓

Use Case

↓

Dashboard

---

# 57. Notification Architecture

Notification Types

Medicine Reminder

Appointment Reminder

Missed Medicine

Emergency

Doctor Visit

Caregiver Alert

Future AI Reminder

Delivery

Local Notification

Push Notification

Voice Reminder

Notification Center

History

---

# 58. Voice Architecture

Voice Engine

↓

Text To Speech

↓

Reminder

↓

Patient Confirmation

↓

History

Future

AI Voice

Personalized Voice

Family Voice

Natural Conversation

---

# 59. Error Recovery

Application crashes must never lose user data.

Recovery Strategy

SQLite Cache

↓

Application Restart

↓

Restore Session

↓

Restore Pending Sync

↓

Continue Normally

Users should never repeat completed work.

---

# 60. Logging Strategy

Development

Console Logging

Testing

Structured Logging

Production

Crash Reporting

Performance Monitoring

Future

Firebase Crashlytics

Analytics

---

# 61. Documentation Policy

Every new feature must include:

Architecture Update

PRD Update

Database Update

API Update

Session Log Update

No feature is considered complete without documentation.

---

# 62. Architecture Decision Records

The following architectural decisions are permanent.

✓ React Native CLI

✓ TypeScript

✓ Clean Architecture

✓ Feature First Architecture

✓ Firebase Authentication

✓ Firestore

✓ SQLite Offline Database

✓ Notifee Reminder Engine

✓ React Hook Form

✓ Zod Validation

✓ Context API

✓ React Navigation

These technologies shall remain the foundation of Family Care.

---

# 63. Architecture Summary

Family Care is built using a modern, scalable and maintainable architecture.

The project emphasizes:

✓ Clean Architecture

✓ Feature Isolation

✓ Offline First Design

✓ Cross Platform Development

✓ Enterprise Code Structure

✓ Reusable Components

✓ Firebase Integration

✓ Local Storage

✓ Voice Reminder Engine

✓ Future AI Integration

The architecture is designed to support long-term growth while keeping development simple and maintainable.

---

# 64. Final Vision

Family Care is not simply another React Native project.

It is designed to become a complete family healthcare platform.

The architecture ensures that new features can be added without breaking existing functionality.

Every technical decision has been made with long-term scalability, maintainability and user experience in mind.

The application should remain simple for elderly users while providing powerful management capabilities for caregivers.

---

# End of Document

Document Name

02_ARCHITECTURE.md

Version

2.0

Status

Approved

Project Owner

Zaeem Ahmad

Project

Family Care
