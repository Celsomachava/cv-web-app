# Authentication & Database Setup Guide

## Prerequisites

1. **MySQL Database** - Install MySQL locally or use a cloud provider
2. **Node.js 18+** - Already installed

## Step 1: Install Dependencies

```bash
npm install next-auth @auth/prisma-adapter @prisma/client bcryptjs
npm install -D prisma @types/bcryptjs
```

## Step 2: Setup MySQL Database

### Option A: Local MySQL
1. Install MySQL: https://dev.mysql.com/downloads/mysql/
2. Create database:
```sql
CREATE DATABASE cv_builder;
```

### Option B: Cloud MySQL (PlanetScale, Railway, etc.)
1. Create a free MySQL database
2. Copy the connection string

## Step 3: Configure Environment Variables

Create `.env` file in the root directory:

```env
DATABASE_URL="mysql://root:password@localhost:3306/cv_builder"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
```

Generate NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

## Step 4: Initialize Prisma

```bash
npx prisma generate
npx prisma db push
```

## Step 5: Run the Application

```bash
npm run dev
```

## Features Implemented

### Authentication
- ✅ Email/Password registration and login
- ✅ Google OAuth (optional - requires setup)
- ✅ Session management with NextAuth
- ✅ Protected routes

### Database
- ✅ User accounts
- ✅ CV storage (unlimited CVs per user)
- ✅ Auto-save functionality
- ✅ CV versioning with timestamps

### Pages
- `/auth/signin` - Sign in page
- `/auth/register` - Registration page
- `/dashboard` - User dashboard with saved CVs
- `/build` - CV builder (now saves to database)

### API Routes
- `POST /api/auth/register` - User registration
- `GET /api/cvs` - List user's CVs
- `POST /api/cvs` - Save new CV
- `PUT /api/cvs/[id]` - Update CV
- `DELETE /api/cvs/[id]` - Delete CV

## Usage Flow

1. **Register**: User creates account at `/auth/register`
2. **Login**: User signs in at `/auth/signin`
3. **Dashboard**: User sees all saved CVs at `/dashboard`
4. **Create CV**: Click "Create New CV" → redirects to `/build`
5. **Auto-save**: CV automatically saves to database
6. **Edit**: Click edit icon on any CV in dashboard
7. **Delete**: Click delete icon to remove CV

## Database Schema

### User Table
- id, name, email, password (hashed)
- emailVerified, image
- createdAt, updatedAt

### CV Table
- id, userId (foreign key)
- title, data (JSON)
- templateId, themeColor
- createdAt, updatedAt

### Account & Session Tables
- For OAuth and session management

## Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT session tokens
- ✅ Protected API routes
- ✅ User-specific data isolation
- ✅ SQL injection prevention (Prisma)

## Next Steps

1. Add auto-save functionality to CV builder
2. Add CV title editing
3. Add CV duplication feature
4. Add export history
5. Add sharing functionality
