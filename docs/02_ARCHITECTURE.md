# Family Care

# Architecture Document

Version: 1.0

Status: Approved

Author: Psychic Cyber + ChatGPT

Last Updated: July 2026

---

# 1. Architecture Philosophy

The project follows an Offline-First, Feature-First, Clean Architecture approach.

The application must remain scalable, maintainable, testable, and independent from third-party services.

Business logic must never depend on Firebase, SQLite, UI frameworks, or external SDKs.

---

# 2. Core Principles

• Offline First

• Feature First

• Clean Architecture

• SOLID Principles

• Repository Pattern

• Dependency Injection

• Composition over Inheritance

• Immutable Data

• Single Responsibility

• Testability

---

# 3. Technology Stack

## Mobile

React Native CLI

TypeScript

---

## UI

NativeWind

React Native Paper

React Native Reanimated

React Native Gesture Handler

React Navigation

---

## Backend

Firebase Authentication

Cloud Firestore

Firebase Cloud Messaging

Firebase Storage

---

## Local Storage

SQLite

MMKV

Secure Storage

---

## Networking

TanStack Query

Axios

NetInfo

---

## Forms

React Hook Form

Zod

---

## Notifications

Notifee

Firebase Cloud Messaging

---

## Voice

React Native Voice

Google Speech Services (Fallback)

---

## Testing

Jest

React Native Testing Library

Detox

---

## Code Quality

ESLint

Prettier

Husky

Lint-Staged

Dependency Cruiser

---

# 4. Folder Structure

docs/

src/

assets/

android/

ios/

scripts/

---

Inside src/

src/

app/

core/

shared/

features/

infrastructure/

navigation/

theme/

hooks/

utils/

types/

config/

constants/

services/

---

# 5. Clean Architecture Layers

Presentation

↓

Application

↓

Domain

↓

Infrastructure

Only downward dependency is allowed.

---

# 6. Feature Structure

Each feature contains

presentation/

application/

domain/

infrastructure/

data/

tests/

Example

features/

authentication/

medicine/

insulin/

family/

dashboard/

settings/

reports/

notifications/

voice/

---

# 7. Data Flow

User

↓

Presentation

↓

Application

↓

Domain

↓

Repository

↓

Infrastructure

↓

Firebase / SQLite

---

# 8. Repository Pattern

Every feature owns an interface.

Example

MedicineRepository

FamilyRepository

ReminderRepository

NotificationRepository

VoiceRepository

Infrastructure provides implementations.

Domain never knows Firebase.

---

# 9. Dependency Injection

Repositories are registered inside a Composition Root.

Presentation never creates repositories.

Everything is injected.

---

# 10. Offline Strategy

Every write operation

↓

SQLite

↓

Sync Queue

↓

Firebase

↓

Mark Synced

If internet unavailable

↓

Remain in Queue

Retry automatically

---

# 11. Conflict Resolution

Last Write Wins

Timestamp validation

Server timestamp priority

Manual merge only if necessary

---

# 12. State Management

Global

TanStack Query

Local

React Hooks

Temporary UI

Component State

No Redux.

---

# 13. Navigation

Authentication Stack

↓

Family Setup

↓

Parent Dashboard

↓

Child Dashboard

↓

Settings

Modal Navigation

Bottom Tabs

Deep Linking Ready

---

# 14. Theme System

Light Theme

Dark Theme

Theme Tokens

Semantic Colors

Typography Tokens

Spacing Tokens

Elevation Tokens

Radius Tokens

Animation Tokens

---

# 15. Notification Flow

Reminder Created

↓

Local Notification

↓

Voice Playback

↓

Voice Confirmation

↓

Success

Else

Retry

Else

Notify Caregiver

---

# 16. Voice Flow

Play recorded voice

↓

Listen

↓

Speech Recognition

↓

Confidence Check

↓

Accept

Else

Cloud Recognition

↓

Accept

Else

Retry

---

# 17. Security

HTTPS Only

Encrypted MMKV

Secure Storage

No Plain Text Tokens

Repository Isolation

No Firebase Imports Outside Infrastructure

---

# 18. Logging

Development

Verbose

Production

Errors Only

Sensitive data never logged.

---

# 19. Error Handling

Typed Errors

Central Error Mapper

User Friendly Messages

Automatic Retry

Graceful Fallback

---

# 20. Performance

Lazy Loading

Memoization

Image Optimization

Background Sync

Minimal Re-render

FlatList Optimization

---

# 21. Accessibility

Voice Friendly

Large Text

High Contrast

TalkBack

VoiceOver

Large Touch Targets

Simple Navigation

---

# 22. Testing Pyramid

Unit Tests

↓

Integration Tests

↓

End-to-End Tests

Every feature must include tests.

---

# 23. CI/CD

GitHub Actions

Lint

Type Check

Unit Tests

Build Verification

Architecture Boundary Check

---

# 24. Build Environments

Development

Staging

Production

Separate Firebase Projects

Separate Configurations

---

# 25. Release Strategy

Android Internal

↓

Beta

↓

Production

iOS TestFlight

↓

App Store

---

# 26. Future Scalability

Support Multiple Families

Support Doctors

Support Hospitals

WearOS

Apple Watch

AI Assistant

Medicine Scanner

OCR

Health Connect

Apple Health

---

# 27. Architectural Rules

Presentation never accesses Firebase.

Domain never imports infrastructure.

Infrastructure never contains UI.

Repositories hide implementation details.

Everything must be testable.

Architecture boundaries are mechanically enforced.
