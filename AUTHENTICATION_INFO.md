# Authentication & Session Management

## Overview
The CV Builder uses **NextAuth.js** for authentication with support for:
- Email/Password (Credentials)
- Google OAuth
- JWT-based sessions

## Authentication Flow

### 1. **Sign Up** (`/auth/register`)
- User enters: Name, Email, Password
- Password is hashed with bcrypt
- User stored in database via Prisma
- Redirects to sign-in page

### 2. **Sign In** (`/auth/signin`)
- User enters: Email, Password
- Credentials validated against database
- JWT token generated on success
- Redirects to dashboard

### 3. **Session Management**
- Strategy: JWT (stateless)
- Session stored in HTTP-only cookie
- Auto-refresh on page load
- Expires based on NEXTAUTH_SECRET config

## UI Components

### Header Component
Displays authentication state:
- **Not logged in**: "Sign in" button → `/auth/signin`
- **Logged in**: 
  - User email display
  - Dashboard link → `/dashboard`
  - "Sign out" button

### Dashboard (`/dashboard`)
Protected route that shows:
- User's saved CVs
- Create new CV button
- Edit/Delete CV actions
- Auto-redirects to `/auth/signin` if not authenticated

## API Routes

### `/api/auth/[...nextauth]`
NextAuth handler for:
- `POST /api/auth/signin` - Login
- `POST /api/auth/signout` - Logout
- `GET /api/auth/session` - Get current session
- `GET /api/auth/csrf` - CSRF token

### `/api/auth/register`
- `POST` - Create new user account

### `/api/cvs`
- `GET` - Fetch user's CVs (requires auth)
- `POST` - Create new CV (requires auth)

### `/api/cvs/[id]`
- `DELETE` - Delete CV (requires auth)

## Environment Variables Required

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Database
DATABASE_URL=file:./dev.db
```

## Session Object Structure

```typescript
{
  user: {
    id: string;
    name: string;
    email: string;
    image?: string;
  },
  expires: string; // ISO date
}
```

## Usage in Components

```typescript
import { useSession, signIn, signOut } from 'next-auth/react';

function MyComponent() {
  const { data: session, status } = useSession();
  
  // status: 'loading' | 'authenticated' | 'unauthenticated'
  
  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'unauthenticated') return <button onClick={() => signIn()}>Sign in</button>;
  
  return (
    <div>
      <p>Welcome {session.user.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
```

## Security Features

✅ Password hashing with bcrypt  
✅ JWT tokens (HTTP-only cookies)  
✅ CSRF protection  
✅ Secure session management  
✅ Protected API routes  
✅ Auto-redirect for unauthorized access  

## Current Status

✅ Authentication fully implemented  
✅ Session management active  
✅ Header displays login/logout  
✅ Dashboard protected  
✅ Database integration (Prisma + SQLite)  
