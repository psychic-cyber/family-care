# Family Care

# Architecture & Technical Decisions

Version: 1.0

Status: Active

Author: Psychic Cyber + ChatGPT

Last Updated: July 2026

---

# Purpose

This document records important technical and architectural decisions.

Every significant decision must include:

- Decision
- Reason
- Alternatives Considered
- Consequences
- Status

Once accepted, a decision should not be changed without discussion.

---

# Decision Template

Decision ID:

Status:

Date:

Decision:

Reason:

Alternatives:

Consequences:

---

# FC-001

Status

Accepted

Decision

Use React Native CLI instead of Expo.

Reason

The application requires native modules such as:

- Notifee
- SQLite
- MMKV
- Speech Recognition
- Advanced Notifications

These are easier to integrate and maintain with React Native CLI.

Alternatives

- Expo
- Expo Bare Workflow

Consequences

More native setup.

Greater flexibility.

Better long-term scalability.

---

# FC-002

Status

Accepted

Decision

Use TypeScript across the entire project.

Reason

Provides type safety, better tooling, and easier maintenance.

Alternatives

JavaScript

Consequences

Slightly more verbose code.

Significantly fewer runtime errors.

---

# FC-003

Status

Accepted

Decision

Follow Clean Architecture.

Reason

Separates business logic from UI and infrastructure.

Improves testing and maintainability.

Alternatives

MVC

MVVM

Feature-only architecture

Consequences

More initial setup.

Cleaner long-term codebase.

---

# FC-004

Status

Accepted

Decision

Adopt Feature-First folder structure.

Reason

Each feature remains self-contained.

Improves scalability.

Alternatives

Layer-first structure

Consequences

More folders.

Easier ownership and navigation.

---

# FC-005

Status

Accepted

Decision

Use Repository Pattern.

Reason

Hide Firebase and SQLite behind interfaces.

Business logic remains independent of implementation details.

Alternatives

Direct Firebase calls

Consequences

Additional abstraction.

Much easier testing and future backend replacement.

---

# FC-006

Status

Accepted

Decision

Use Firebase Authentication.

Reason

Reliable authentication with minimal backend maintenance.

Alternatives

Custom authentication server

Auth0

Supabase Auth

Consequences

Vendor dependency.

Rapid development.

---

# FC-007

Status

Accepted

Decision

Use Cloud Firestore.

Reason

Real-time synchronization and offline support.

Alternatives

REST API

PostgreSQL

Supabase

MongoDB

Consequences

Firestore pricing considerations.

Excellent developer experience.

---

# FC-008

Status

Accepted

Decision

SQLite is the local database.

Reason

Reliable relational storage.

Excellent offline support.

Alternatives

Realm

WatermelonDB

AsyncStorage

Consequences

Need schema migrations.

Robust local persistence.

---

# FC-009

Status

Accepted

Decision

MMKV stores lightweight application preferences.

Reason

Fast key-value storage.

Alternatives

AsyncStorage

Consequences

Additional dependency.

High performance.

---

# FC-010

Status

Accepted

Decision

Secure credentials are stored using Secure Storage.

Reason

Sensitive information must not be stored in plaintext.

Alternatives

MMKV only

SQLite

Consequences

Platform-specific implementation.

Better security.

---

# FC-011

Status

Accepted

Decision

Use TanStack Query for server state.

Reason

Caching, retries, synchronization, and request management.

Alternatives

Redux Toolkit Query

SWR

Manual API management

Consequences

Learning curve.

Excellent scalability.

---

# FC-012

Status

Accepted

Decision

Use React Hook Form with Zod.

Reason

Simple forms with schema validation.

Alternatives

Formik

Manual validation

Consequences

Additional dependencies.

Cleaner validation.

---

# FC-013

Status

Accepted

Decision

Use Notifee for local notifications.

Reason

Advanced scheduling and notification management.

Alternatives

react-native-push-notification

Native APIs

Consequences

Additional native dependency.

More reliable reminder system.

---

# FC-014

Status

Accepted

Decision

Use React Native Voice for speech recognition.

Reason

Cross-platform speech recognition.

Alternatives

Native Android APIs

Native iOS APIs

Cloud-only speech

Consequences

Platform differences.

Simple integration.

---

# FC-015

Status

Accepted

Decision

Adopt Offline-First architecture.

Reason

Medicine reminders must work without internet.

Alternatives

Online-only architecture

Consequences

Requires synchronization logic.

Much better reliability.

---

# FC-016

Status

Accepted

Decision

Every feature must include tests.

Reason

Healthcare-related functionality requires high reliability.

Alternatives

Manual testing only.

Consequences

More development time.

Higher confidence.

---

# Pending Decisions

These decisions require implementation experience before finalizing.

---

## FC-017

Status

Pending

Decision

Reminder retry interval.

Options

5 minutes

10 minutes

15 minutes

---

## FC-018

Status

Pending

Decision

Maximum family members per account.

---

## FC-019

Status

Pending

Decision

Maximum medicine reminder frequency.

---

## FC-020

Status

Pending

Decision

Cloud backup frequency.

---

# Rejected Decisions

## RD-001

Decision

Use Redux as the primary state management solution.

Reason Rejected

The project does not currently require the complexity of Redux.

TanStack Query and React Hooks provide a simpler and more maintainable solution.

---

## RD-002

Decision

Store business logic inside UI components.

Reason Rejected

Violates Clean Architecture principles.

Business logic belongs in the Application and Domain layers.

---

# Decision Rules

Every new architectural decision must:

- Have a unique ID.
- Include a clear reason.
- List alternatives.
- Explain consequences.
- Be approved before implementation.

---

# Decision History

| ID | Decision | Status |
|----|----------|--------|
| FC-001 | React Native CLI | Accepted |
| FC-002 | TypeScript | Accepted |
| FC-003 | Clean Architecture | Accepted |
| FC-004 | Feature-First Structure | Accepted |
| FC-005 | Repository Pattern | Accepted |
| FC-006 | Firebase Authentication | Accepted |
| FC-007 | Cloud Firestore | Accepted |
| FC-008 | SQLite | Accepted |
| FC-009 | MMKV | Accepted |
| FC-010 | Secure Storage | Accepted |
| FC-011 | TanStack Query | Accepted |
| FC-012 | React Hook Form + Zod | Accepted |
| FC-013 | Notifee | Accepted |
| FC-014 | React Native Voice | Accepted |
| FC-015 | Offline-First | Accepted |
| FC-016 | Testing Required | Accepted |
