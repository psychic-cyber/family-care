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

FC-019
FC-020
FC-021
FC-022

---

## FC-017

Status

Accepted

Decision

Use a Monorepo structure with the React Native application inside the `mobile/` directory.

Reason

Allows project documentation, assets, scripts, CI/CD, and future backend services to live in a single repository.

Alternatives

- Mobile project as repository root
- Separate repositories

Consequences

Slightly more folder nesting.

Much easier long-term maintenance and scalability.

---

## FC-018

Status

Accepted

Decision

Use the repository root as the Git repository.

Reason

Track documentation, GitHub workflows, scripts, assets, and mobile application together.

Alternatives

Git initialized only inside `mobile/`.

Consequences

Better version control.

Professional monorepo workflow.

----

# FC-019

Status

Accepted

Decision

Use a centralized Design Token system for all UI styling.

Reason

Ensures visual consistency and prevents hardcoded design values across the application.

Alternatives

- Hardcoded values
- Per-component styling

Consequences

Improved maintainability.

Single source of truth for UI.

---

# FC-020

Status

Accepted

Decision

Documentation must be updated before and after every feature implementation.

Reason

Keeps implementation synchronized with project documentation and prevents architectural drift.

Alternatives

Documentation at project completion only.

Consequences

Slightly more work during development.

Much better long-term maintainability.

---

# FC-021

Status

Accepted

Decision

Navigation Foundation must be completed before implementing business features.

Reason

Provides a stable application structure and avoids future navigation refactoring.

Alternatives

Build screens first.

Consequences

Cleaner project structure.

Lower future maintenance cost.

---

# FC-022

Status

Accepted

Decision

All application colors, spacing, typography, radius and elevation values must come from Theme Tokens.

Reason

Implements the Design System defined in the project documentation.

Alternatives

Direct values inside components.

Consequences

Consistent UI.

Simpler theme changes.

Supports Light and Dark themes.

---

# Pending Decisions

FC-023

Notification scheduling strategy.

---

FC-024

Offline synchronization conflict resolution.

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
| FC-017 | Monorepo Structure | Accepted |
| FC-018 | Git Repository Root | Accepted |
| FC-019 | Design Token System | Accepted |
| FC-020 | Documentation-First Workflow | Accepted |
| FC-021 | Navigation Before Features | Accepted |
| FC-022 | Theme Tokens Only | Accepted |
