# Self-Service Dog Wash

A full-stack self-service dog-wash kiosk and operations platform built with React, TypeScript, Node.js, REST APIs, and PostgreSQL.

The application will allow a customer to pay for a timed wash session, choose different wash functions, monitor the remaining time, clean the tub, and complete the session.

This project is being built as an enterprise-style portfolio application to demonstrate frontend architecture, reusable React components, state management, backend development, database integration, testing, CI/CD, and cloud deployment.

---

## Project Goal

Build a touchscreen-friendly self-service dog-wash interface that guides a customer through the complete wash-session workflow.

The first version will focus on the customer kiosk. A future version will include an administrative dashboard for managing stations, sessions, revenue, and equipment status.

---

## Primary User

The primary user is a customer using a physical self-service dog-wash kiosk.

The interface should be:

- Easy to understand
- Touchscreen-friendly
- Accessible
- Clear under time pressure
- Designed with large buttons and visible status information

---

## Customer Workflow

The first customer workflow will be:


Welcome
    ↓
Start Wash
    ↓
Payment
    ↓
Payment Approved
    ↓
Begin Session
    ↓
Active Wash Controls
    ↓
Clean Tub
    ↓
Session Complete





---

## Initial folder Architecture 
src/
├── app/
│   └── App.tsx
│
├── pages/
│   ├── WelcomePage/
│   │   ├── WelcomePage.tsx
│   │   └── WelcomePage.css
│   │
│   ├── PaymentPage/
│   │   ├── PaymentPage.tsx
│   │   └── PaymentPage.css
│   │
│   ├── WashSessionPage/
│   │   ├── WashSessionPage.tsx
│   │   └── WashSessionPage.css
│   │
│   ├── CleanTubPage/
│   │   ├── CleanTubPage.tsx
│   │   └── CleanTubPage.css
│   │
│   └── CompletionPage/
│       ├── CompletionPage.tsx
│       └── CompletionPage.css
│
├── components/
│   ├── SessionTimer/
│   ├── WashModeButton/
│   └── PrimaryButton/
│
├── types/
│   └── session.ts
│
├── assets/
├── index.css
└── main.tsx