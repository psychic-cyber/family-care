# Family Care

# Development Rules

Version: 1.0

Status: Approved

Author: Psychic Cyber + ChatGPT

---

# Purpose

This document defines mandatory engineering rules for everyone working on the project, including AI assistants.

These rules are not optional.

Every implementation must comply with them.

---

# 1. General Rules

Write clean code.

Write readable code.

Prefer simplicity.

Avoid premature optimization.

Never duplicate code.

Always favor maintainability over shortcuts.

---

# 2. Clean Architecture

Presentation can only communicate with Application.

Application communicates with Domain.

Domain communicates only through interfaces.

Infrastructure implements interfaces.

Presentation must never import Infrastructure directly.

---

# 3. Repository Pattern

Every data source must be hidden behind a Repository.

Repositories expose interfaces.

Firebase implementation must never leak outside Infrastructure.

SQLite implementation must never leak outside Infrastructure.

---

# 4. Dependency Injection

Never instantiate repositories directly inside UI.

Dependencies must be injected through the Composition Root.

Avoid global singleton objects unless absolutely required.

---

# 5. UI Rules

Every screen must be responsive.

Support phones and tablets.

Avoid fixed pixel sizes.

Use theme spacing tokens.

Never hardcode colors.

Never hardcode fonts.

Never hardcode dimensions.

---

# 6. Styling Rules

Use NativeWind utilities where appropriate.

Use React Native Paper for reusable components.

All colors come from the theme.

Support Dark Mode from day one.

---

# 7. State Management

Use TanStack Query for server state.

Use React Hooks for local state.

Avoid unnecessary global state.

Do not introduce Redux unless there is a justified architectural need.

---

# 8. Forms

Use React Hook Form.

Validate with Zod.

Never perform manual validation inside UI components.

Validation logic belongs in schemas.

---

# 9. Error Handling

Every async operation must handle errors.

Never leave unhandled Promise rejections.

Display user-friendly error messages.

Never expose raw Firebase or API errors to users.

Log technical details only in development.

---

# 10. Logging

Development:

Verbose logs are allowed.

Production:

Only critical logs.

Never log:

Passwords

Authentication tokens

Medical information

Personal data

Firebase secrets

---

# 11. Offline Rules

All write operations must be stored locally first.

Synchronization happens in the background.

Never block the user because of missing internet.

Queue failed operations.

Retry automatically.

---

# 12. Firebase Rules

Firebase is Infrastructure only.

No Firebase imports outside Infrastructure.

Authentication logic stays inside Infrastructure.

Firestore queries stay inside Infrastructure.

Storage logic stays inside Infrastructure.

---

# 13. SQLite Rules

SQLite is the local source of truth.

Never bypass repositories.

Always use transactions when updating multiple related records.

---

# 14. Networking

Use Axios.

Configure a single HTTP client.

No duplicate API clients.

Handle timeouts.

Retry transient failures.

---

# 15. Speech Recognition

Use on-device recognition by default.

Only use cloud recognition when:

Internet is available

AND

Confidence is below the configured threshold.

Cloud recognition must remain optional.

---

# 16. Notifications

Use Notifee.

Schedule notifications locally whenever possible.

Use Firebase Cloud Messaging only for remote events.

---

# 17. Security

HTTPS only.

Encrypt sensitive local storage.

Use Secure Storage for secrets.

Never commit API keys.

Never commit Firebase configuration secrets.

Never commit certificates.

---

# 18. Performance

Avoid unnecessary re-renders.

Memoize expensive components.

Lazy load screens.

Optimize FlatList usage.

Avoid unnecessary animations.

Keep bundle size small.

---

# 19. Accessibility

Support TalkBack.

Support VoiceOver.

Respect Dynamic Font Size.

Minimum touch target: 44x44 dp.

Every icon requires an accessibility label.

---

# 20. Internationalization

All visible strings must be translatable.

Never hardcode user-facing text.

Support English first.

Architecture must support Urdu in the future.

---

# 21. File Naming

Components:

PascalCase

Example:

MedicineCard.tsx

Hooks:

camelCase

Example:

useVoiceRecognition.ts

Utilities:

camelCase

Example:

dateFormatter.ts

Types:

PascalCase

Example:

Reminder.ts

---

# 22. Folder Rules

Each feature contains:

presentation/

application/

domain/

infrastructure/

tests/

Avoid dumping unrelated files into shared/.

---

# 23. Code Quality

Use ESLint.

Use Prettier.

Run lint before committing.

Run type checking before committing.

Do not ignore lint errors without justification.

---

# 24. Git Rules

Small commits.

Clear commit messages.

One logical change per commit.

Never commit generated files unnecessarily.

Never commit node_modules.

Never commit secrets.

---

# 25. Testing Rules

Every business rule must have unit tests.

Critical flows require integration tests.

Major user journeys require E2E tests.

Bug fixes should include regression tests whenever practical.

---

# 26. AI Development Rules

AI must never invent project requirements.

AI must read the documentation before generating code.

AI must not modify architecture without approval.

AI must explain significant architectural changes.

AI must not remove existing functionality without approval.

AI must not rewrite large sections of code unless requested.

---

# 27. Documentation Rules

Every major feature requires documentation.

Every architectural decision must be recorded.

Every breaking change must be documented.

Update Memory.md after completing each phase.

---

# 28. Definition of Done

A task is complete only when:

✓ Code compiles

✓ Lint passes

✓ Type check passes

✓ Tests pass

✓ Documentation updated

✓ No TODO placeholders remain

✓ No debug logs remain

✓ Feature reviewed

---

# Final Principle

The project values:

Correctness over speed.

Maintainability over cleverness.

Scalability over shortcuts.

Reliability over temporary fixes.

Patient safety and data integrity always take priority over convenience.
