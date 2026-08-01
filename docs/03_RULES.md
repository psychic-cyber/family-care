# Family Care

# Development Rules & Coding Standards

Version: 2.0

Status:
Approved

Project Owner:
Zaeem Ahmad

---

# 1. Purpose

This document defines the mandatory development rules for Family Care.

Every contributor, developer and AI assistant must follow these rules.

No feature may violate this document.

---

# 2. Core Philosophy

Family Care is designed to be:

• Simple

• Professional

• Medical

• Scalable

• Maintainable

• Enterprise Ready

Every decision should support these goals.

---

# 3. Architecture Rule

Family Care strictly follows

Clean Architecture

combined with

Feature First Architecture.

No shortcuts are allowed.

---

# 4. Folder Rule

Every feature MUST contain

application/

domain/

infrastructure/

presentation/

Nothing else should exist at feature root.

---

Application

Contains

Use Cases

Dependency Injection

Containers

---

Domain

Contains

Entities

Interfaces

Validation

Business Rules

---

Infrastructure

Contains

Firebase

SQLite

Repositories

Services

Notification Engine

Voice Engine

---

Presentation

Contains

Screens

Navigation

Hooks

Components

View Logic

No business logic.

---

# 5. Dependency Rule

Allowed

Presentation

↓

Application

↓

Domain

↓

Infrastructure

Never

Infrastructure

↓

Presentation

Never

Presentation

↓

Firebase

Never

Domain

↓

React Native

---

# 6. Naming Rules

Folders

lowercase

authentication

patients

admin

settings

---

Files

PascalCase

DashboardScreen.tsx

LoginScreen.tsx

MedicineCard.tsx

ReminderService.ts

---

Interfaces

Start with I

Example

IAuthRepository

IPatientRepository

---

Hooks

Start with use

Example

useLoginForm

useReminder

usePatient

---

Screens

Always end with

Screen

Example

DashboardScreen

PatientsScreen

---

Components

PascalCase

AppCard

AppAvatar

MedicineCard

GreetingCard

---

# 7. Import Rules

Correct

React

↓

Third Party

↓

Shared Components

↓

Hooks

↓

Feature Imports

↓

Local Imports

Never random imports.

---

# 8. Component Rules

Reusable UI belongs inside

src/components

Feature-specific UI belongs inside

feature/presentation/components

Never duplicate components.

Reuse existing ones.

---

# 9. Theme Rules

Never hardcode colors.

Never hardcode spacing.

Never hardcode radius.

Always use

Colors

Spacing

Radius

Typography

Elevation

useAppTheme()

---

Incorrect

backgroundColor:"#00FF00"

Correct

backgroundColor:colors.primary

---

# 10. Screen Rules

Every screen should

Use SafeArea

Support Dark Theme

Support Light Theme

Use reusable components

Remain responsive

Avoid unnecessary nesting

---

# 11. Font Rules

Family Care targets elderly users.

Fonts must be

Readable

Balanced

Professional

Never

Too Small

Never

Too Large

Titles

Medium

Body

Normal

Buttons

Medium Weight

---

# 12. Medical Design Rules

Application should feel

Clean

Soft

Premium

Professional

Comfortable

Medical

Rounded Cards

Soft Shadows

Simple Icons

Minimal Text

No visual clutter.

---

# 13. Button Rules

Buttons should have

Consistent Height

Consistent Radius

Loading State

Disabled State

Icon Support

Every action button should clearly communicate its purpose.

---

# 14. Form Rules

Every form must include

Validation

Loading

Error Message

Success Feedback

No form may submit invalid data.

---

# 15. Error Handling Rules

Never show raw Firebase errors.

Never expose technical messages.

Convert technical errors into friendly messages.

Example

Incorrect

FirebaseAuthException

Correct

Invalid email or password.

---

# 16. Repository Rules

Every external service must be hidden behind repositories.

Presentation never communicates directly with Firebase.

---

# 17. Use Case Rules

Every user action equals one Use Case.

Examples

Login

Logout

CreateFamily

InviteMember

AddPatient

DeletePatient

ScheduleReminder

ConfirmMedicine

Each Use Case performs one responsibility only.

---

# 18. Validation Rules

Validation belongs only inside Domain.

Use

Zod

Never validate inside UI.

---

# 19. Firebase Rules

Firebase SDK belongs only inside

Infrastructure

Never inside

Presentation

Never inside

Domain

---

# 20. SQLite Rules

SQLite stores

Patients

Medicines

Schedules

History

Pending Sync

Never access SQLite directly from UI.

---

# 21. Reminder Rules

Reminder Engine must support

Offline

Repeat Reminder

Voice Reminder

Missed Detection

History

Caregiver Alert

---

# 22. Voice Reminder Rules

Voice reminder should

Respect language

Respect volume

Support Android

Support iPhone

Remain optional

---

# 23. Navigation Rules

All navigation belongs inside

presentation/navigation

No navigation logic inside Use Cases.

---

# 24. Documentation Rules

Every feature requires updates to

PRD

Architecture

Database

API

Session

No documentation

↓

Feature is not complete.

---

# 25. Git Rules

Every completed task

↓

git add

↓

git commit

↓

git push

Commit format

feat:

fix:

docs:

style:

refactor:

Example

feat(medicine): implement reminder scheduling

---

# 26. Testing Rules

Every feature must be tested on

Android

iPhone

Dark Theme

Light Theme

Offline Mode

No feature is complete without testing.

---

# 27. Performance Rules

Avoid unnecessary re-renders.

Avoid duplicated state.

Lazy load heavy screens.

Reuse components.

Optimize FlatList.

---

# 28. AI Assistant Rules

Every AI assistant working on Family Care must:

Read documentation first.

Follow Clean Architecture.

Never create duplicate code.

Never break folder structure.

Never hardcode values.

Always reuse existing components.

Always preserve project architecture.

Always prefer maintainability over shortcuts.

---

# 29. Future Development Rules

Future features

AI

OCR

Doctor Portal

Wearables

Reports

Emergency

must follow the same architecture.

No exceptions.

---

# 30. Definition of Done

A feature is complete only if

✓ UI completed

✓ Business Logic completed

✓ Offline support verified

✓ TypeScript has zero errors

✓ Android tested

✓ iPhone tested

✓ Documentation updated

✓ Git committed

✓ GitHub pushed

---

# 31. Final Rule

When in doubt,

choose

simplicity,

consistency,

maintainability,

and user experience

over shortcuts.

Family Care should always remain a premium healthcare application.

---

End of Document

Document Name

03_RULES.md

Version

2.0

Status

Approved

Project Owner

Zaeem Ahmad

Project

Family Care
