# CV Builder - Quick Setup Guide

## 🚀 Quick Start (5 Minutes)

### 1. Database Setup

**Option A: MySQL Workbench (Recommended)**
```sql
-- Open MySQL Workbench and run:
CREATE DATABASE cv_builder CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

**Option B: Command Line**
```bash
mysql -u root -p
CREATE DATABASE cv_builder;
exit;
```

### 2. Configure Environment

Update `.env` file:
```env
DATABASE_URL="mysql://root:YOUR_PASSWORD@localhost:3306/cv_builder"
```

### 3. Initialize Database

```bash
npx prisma db push
npx prisma generate
```

### 4. Start Application

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## ✅ What's Fixed

### CV Editing
- ✅ Edit button now loads CV data correctly
- ✅ All fields populate when editing
- ✅ CV ID passed via URL parameter
- ✅ Wizard opens automatically for editing

### Database
- ✅ MySQL configured for production
- ✅ All tables auto-created via Prisma
- ✅ CRUD operations working
- ✅ Data persistence verified

### Language
- ✅ Portuguese set as default
- ✅ Auto-detection from browser
- ✅ Synced across all pages
- ✅ Saved to user profile

---

## 📊 Database Tables

Automatically created by Prisma:

| Table | Purpose |
|-------|---------|
| User | User accounts & profiles |
| Account | OAuth accounts (Google) |
| Session | User sessions |
| CV | Saved CVs with JSON data |
| Payment | Payment transactions |
| VerificationToken | Email verification |

---

## 🔐 Environment Variables

```env
# Database (Required)
DATABASE_URL="mysql://root:password@localhost:3306/cv_builder"

# Auth (Required)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# Payment (Required)
PAYSUITE_API_KEY="your-api-key"
PAYSUITE_WEBHOOK_SECRET="your-webhook-secret"

# Google OAuth (Optional)
GOOGLE_CLIENT_ID="your-client-id"
GOOGLE_CLIENT_SECRET="your-client-secret"
```

---

## 🧪 Testing

### Test User Flow:
1. Register account → ✅
2. Login → ✅
3. Create CV → ✅
4. Save CV → ✅
5. Edit CV → ✅
6. Delete CV → ✅
7. Change language → ✅
8. Update profile → ✅

### Test Database:
```bash
npx prisma studio
```
Opens at http://localhost:5555

---

## 📁 Project Structure

```
cv-builder/
├── app/                    # Next.js pages
│   ├── account/           # Account management
│   ├── api/               # API routes
│   └── auth/              # Authentication pages
├── components/            # React components
│   ├── account/          # Account tabs
│   ├── builder/          # CV builder
│   ├── payment/          # Payment forms
│   └── steps/            # Wizard steps
├── lib/                   # Utilities
│   ├── context/          # React contexts
│   ├── paysuite-sdk/     # Payment SDK
│   └── utils/            # Helper functions
├── prisma/               # Database schema
└── public/               # Static files
```

---

## 🌍 Language Support

**Default:** Portuguese (pt)  
**Supported:** English (en), Deutsch (de)

**Auto-detection priority:**
1. User manual selection (localStorage)
2. User profile (database)
3. Browser locale
4. Default (Portuguese)

---

## 💳 Payment Integration

**Provider:** Paysuite  
**Methods:** M-Pesa, e-Mola  
**Amount:** 50 MZN (fixed)

**Flow:**
1. User completes CV
2. Clicks "Pay & Download"
3. Redirects to Paysuite checkout
4. Payment processed
5. Webhook updates status
6. PDF download enabled

---

## 🔧 Troubleshooting

### Database Connection Error:
```bash
# Check MySQL is running
sudo service mysql status

# Test connection
mysql -u root -p

# Reset Prisma
npx prisma generate
npx prisma db push
```

### Build Errors:
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Port Already in Use:
```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

---

## 📚 Documentation

- [MySQL Setup Guide](./MYSQL_DEPLOYMENT_GUIDE.md)
- [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)
- [Account Management](./ACCOUNT_MANAGEMENT.md)
- [PaySuite SDK](./lib/paysuite-sdk/README.md)

---

## 🚀 Production Deployment

### Vercel (Easiest):
1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### VPS:
1. Install Node.js, MySQL, Nginx
2. Clone repository
3. Configure environment
4. Build: `npm run build`
5. Start: `pm2 start npm -- start`

---

## 📞 Support

**Issues:** Create GitHub issue  
**Email:** support@yourdomain.com  
**Docs:** Full documentation in `/docs`

---

**Version:** 1.0.0  
**Status:** ✅ Production Ready  
**Last Updated:** 2024
