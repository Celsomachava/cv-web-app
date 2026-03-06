# Deployment Guide - MySQL Database Setup

## 1. MySQL Database Configuration

### Step 1: Create Database in MySQL Workbench

```sql
CREATE DATABASE cv_builder CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Step 2: Update .env File

Replace the DATABASE_URL with your MySQL credentials:

```env
DATABASE_URL="mysql://root:your_password@localhost:3306/cv_builder"
```

**Format:**
```
mysql://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME
```

### Step 3: Run Database Migration

```bash
npx prisma db push
```

This will create all tables automatically:
- User
- Account
- Session
- VerificationToken
- CV
- Payment

### Step 4: Generate Prisma Client

```bash
npx prisma generate
```

---

## 2. Database Schema

### Tables Created:

**User Table:**
- id (Primary Key)
- name
- email (Unique)
- emailVerified
- image
- password (Hashed)
- phone
- language (Default: 'pt')
- createdAt
- updatedAt

**CV Table:**
- id (Primary Key)
- userId (Foreign Key)
- title
- data (JSON - stores all CV fields)
- templateId
- themeColor
- isPaid (Boolean)
- createdAt
- updatedAt

**Payment Table:**
- id (Primary Key)
- userId (Foreign Key)
- cvId (Foreign Key)
- transactionId (Unique)
- amount
- currency
- provider
- phone
- status
- reference
- createdAt
- updatedAt

**Account Table** (OAuth):
- id (Primary Key)
- userId (Foreign Key)
- type
- provider
- providerAccountId
- refresh_token
- access_token
- expires_at
- token_type
- scope
- id_token
- session_state

**Session Table:**
- id (Primary Key)
- sessionToken (Unique)
- userId (Foreign Key)
- expires

---

## 3. Environment Variables

### Required Variables:

```env
# Database
DATABASE_URL="mysql://root:password@localhost:3306/cv_builder"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Paysuite
PAYSUITE_API_KEY="your-api-key"
PAYSUITE_WEBHOOK_SECRET="your-webhook-secret"

# Google OAuth (Optional)
GOOGLE_CLIENT_ID="your-client-id"
GOOGLE_CLIENT_SECRET="your-client-secret"
```

---

## 4. MySQL Workbench Connection

### Connection Settings:

- **Connection Name:** CV Builder Local
- **Hostname:** localhost
- **Port:** 3306
- **Username:** root
- **Password:** your_password
- **Default Schema:** cv_builder

### Test Connection:
1. Open MySQL Workbench
2. Click "+" to create new connection
3. Enter connection details
4. Click "Test Connection"
5. If successful, click "OK"

---

## 5. Verification Steps

### Test Database Connection:

```bash
npx prisma studio
```

This opens Prisma Studio at http://localhost:5555 to view/edit data.

### Test CRUD Operations:

1. **Create User:** Register new account
2. **Read Data:** Login and view account
3. **Update Data:** Edit profile information
4. **Delete Data:** Delete a saved CV

### Verify Tables:

```sql
USE cv_builder;
SHOW TABLES;
```

Expected output:
- User
- Account
- Session
- VerificationToken
- CV
- Payment

---

## 6. Production Deployment

### For Production Server:

1. **Update DATABASE_URL** with production credentials
2. **Run migrations:**
   ```bash
   npx prisma migrate deploy
   ```
3. **Generate client:**
   ```bash
   npx prisma generate
   ```

### Environment-Specific Configuration:

**Development (.env.local):**
```env
DATABASE_URL="mysql://root:password@localhost:3306/cv_builder_dev"
```

**Production (.env.production):**
```env
DATABASE_URL="mysql://user:password@production-host:3306/cv_builder_prod"
```

---

## 7. Backup & Restore

### Backup Database:

```bash
mysqldump -u root -p cv_builder > backup.sql
```

### Restore Database:

```bash
mysql -u root -p cv_builder < backup.sql
```

---

## 8. Troubleshooting

### Connection Refused:
- Check MySQL service is running
- Verify port 3306 is open
- Check firewall settings

### Authentication Failed:
- Verify username/password
- Check user privileges:
  ```sql
  GRANT ALL PRIVILEGES ON cv_builder.* TO 'root'@'localhost';
  FLUSH PRIVILEGES;
  ```

### Migration Errors:
- Drop database and recreate:
  ```sql
  DROP DATABASE cv_builder;
  CREATE DATABASE cv_builder;
  ```
- Run `npx prisma db push` again

---

## 9. Security Best Practices

✅ Use strong passwords  
✅ Never commit .env file  
✅ Use environment-specific credentials  
✅ Enable SSL for production  
✅ Regular database backups  
✅ Limit database user privileges  

---

## 10. Quick Start Commands

```bash
# 1. Create database in MySQL Workbench
# 2. Update .env with your credentials
# 3. Run migration
npx prisma db push

# 4. Generate Prisma client
npx prisma generate

# 5. Start development server
npm run dev

# 6. Open Prisma Studio (optional)
npx prisma studio
```

---

**Status:** ✅ Ready for Deployment
