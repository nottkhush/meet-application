# Meet AI Project Documentation

## Project Overview

Meet AI is an innovative SaaS video calling platform featuring live, role-based AI agents integrated into real-time meetings. These AI agents actively assist users during calls, acting as tutors, coaches, assistants, and more. The platform enables video calls enhanced by AI-driven transcription, summarization, searchable transcripts, and an AI chat that understands the entire meeting.

Currently, Meet AI operates solely on a **free plan model**, and no paid subscription or payment integration is implemented yet. Users are informed through the UI that they can use the free plan without subscription requirements. Subscription and payment handling are planned for future development but not yet released.

## Technology Stack

- **Frameworks & Languages:** Next.js 15, React 19, TypeScript 5
- **Styling:** Tailwind CSS v4, shadcn/ui component system
- **Authentication:** Better Auth with Drizzle ORM adapter (PostgreSQL via Neon)
- **Database:** PostgreSQL hosted on Neon, managed with Drizzle ORM and migrations via Drizzle Kit
- **Real-time Comms:** Stream Video and Chat SDK for video calling and chat
- **AI Integration:** OpenAI for AI agents, transcription, summarization, and GPT-based chat
- **Background Jobs:** Ingest for orchestrated asynchronous workflows like fetching and processing transcripts
- **Payment (Planned):** Polar integration for subscription billing (not yet enabled)
- **Code Quality:** Code Rabbit AI for automated code reviews
- **Deployment:** Hosted on Vercel with environment configuration and webhook handling

## Development Setup

## Environment Preparation

- Confirm Node.js version >= 18.18 (latest LTS recommended)
- Use **`npx create-next-app@15.3.2`** to scaffold Next.js 15 app
- Enable TypeScript, ESLint, Tailwind, App Router, Turbopack during creation
- Set up VS Code with workspace trust and Tailwind IntelliSense extension for styling aid

## UI Components

- Install shadcn/ui components as source files for full code access and customization
- Utilize utility functions like **`CN`** for dynamic Tailwind class name handling

## Version Control Workflow

- Initialize Git repository and push to GitHub (private repo recommended)
- Follow feature branching, pull request, and code review using Code Rabbit AI

## Database and ORM

- Obtain a Neon PostgreSQL database and securely store its connection URL in **`.env`**
- Install Drizzle ORM (v0.43.1) and Drizzle Kit (v0.31.1) with legacy peer dependencies for compatibility
- Define database schema for users, sessions, accounts, verification, agents, meetings, etc.
- Use Drizzle CLI commands to push schema to database or open Drizzle Studio for visualization
- Set up convenient npm scripts for pushing schema and running studio

## Authentication

- Configure Better Auth (v1.2.8) with Postgres adapter using Drizzle
- Support email login, password confirmation, and form validation with Zod
- Support social logins with GitHub and Google OAuth providers, including required OAuth credentials setup
- Implement protected routes with explicit server-side checks and client-side redirects
- Provide sign-in and sign-up UI with switching between forms and error handling

## Core Features

## Meetings and Video Calls

- Users create, update, and delete meetings with API procedures (TRPC + Drizzle)
- Meeting states: upcoming, active, processing, completed, canceled, with appropriate UI feedback
- Integration with Stream Video SDK to create and manage video calls tied to meetings
- Video calling interface includes pre-join lobby, in-call controls (mute, camera, screen share), and post-call summaries
- Recordings, live transcription, and real-time AI participation in meetings
- User and agent avatar management with generated graphical avatars

## AI Agents

- Users create custom AI agents with specific instructions and personality traits
- AI agents participate in video calls as interactive assistants using OpenAI streaming API
- AI chat powered by Stream Chat SDK and OpenAI, allowing context-aware conversation and answering

## Transcripts and Chat

- Fetch and parse meeting transcripts as JSONL via background job workflows
- Searchable transcript UI with message highlighting and timestamped speaker identification
- AI-powered chat interface that understands full meeting conversations and provides responses

## Background Workflows

- Use Ingest for asynchronous processing: transcriptions fetching, summarization, chat message generation
- Automatic state transitions from processing to completed on meeting finalization
- Stored transcripts and chat logs accessible for review

## Subscription and Payments (Planned, Not Yet Released)

- Although Polar-based subscription and free tier management are included in the project roadmap and codebase, these features are **not implemented or active** in the current version.
- The UI currently communicates to users that they can continue using the **free plan without subscription**.
- Upgrade prompts lead to placeholder or 404 pages until payment integration is added in future development.

## User Interface and Experience

## Dashboard and Navigation

- Dashboard layout with sidebar navigation: links to meetings, agents, and upgrade page
- Displays logged-in user info with sign-out functionality
- Shows free trial usage and limits visually (plans for future subscription gating)
- Fully responsive design adapting to desktop and mobile

## Meeting Flow

- Lobby UI for camera/mic checks before joining
- In-call interface with participant thumbnails, meeting info, chat, and call controls
- Post-call summary screen with transcripts and chat interface

## Authentication UX

- Sign-in and sign-up pages with form validation, password confirmation, and social login buttons with icons
- Server-side session detection with client-side redirects for improved security and usability

## Development Best Practices

- Modularized backend and frontend with TRPC type-safe API
- Use explicit route protection rather than middleware for authentication
- Code reviews automated via Code Rabbit AI ensuring code quality
- Comprehensive error and loading states used throughout UI for robustness
- Environment variable management, secrets kept out of version control
- Use of server and client components optimized for Next.js 15 architecture

## Deployment

- Deploy apps to Vercel with proper environment variable configuration
- Webhooks and API URLs updated for production URLs
- Ingest background jobs integrated and deployment protections configured
- Post-deployment testing for authentication and real-time features

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
