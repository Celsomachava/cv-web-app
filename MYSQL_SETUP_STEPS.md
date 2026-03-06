# MySQL Setup - Step by Step

## Method 1: MySQL Workbench (GUI - Easiest)

### Step 1: Open MySQL Workbench
1. Launch MySQL Workbench
2. Click on your local MySQL connection
3. Enter password if prompted

### Step 2: Create Database
1. Click "File" → "New Query Tab"
2. Copy and paste this SQL:

```sql
CREATE DATABASE cv_builder 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;
```

3. Click the lightning bolt icon to execute
4. You should see: "Query executed successfully"

### Step 3: Verify Database Created
```sql
SHOW DATABASES;
```

You should see `cv_builder` in the list.

---

## Method 2: Command Line (Terminal)

### Step 1: Connect to MySQL
```bash
mysql -u root -p
```
Enter your MySQL password when prompted.

### Step 2: Create Database
```sql
CREATE DATABASE cv_builder CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Step 3: Exit MySQL
```sql
EXIT;
```

---

## Step 4: Update .env File

Open `.env` in your project and update:

```env
DATABASE_URL="mysql://root:YOUR_PASSWORD@localhost:3306/cv_builder"
```

Replace `YOUR_PASSWORD` with your actual MySQL password.

**Example:**
```env
DATABASE_URL="mysql://root:mypassword123@localhost:3306/cv_builder"
```

---

## Step 5: Initialize Prisma

Run these commands in your project directory:

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database (creates all tables)
npx prisma db push
```

You should see:
```
Your database is now in sync with your Prisma schema.
```

---

## Step 6: Verify Tables Created

### Option A: Prisma Studio (Easiest)
```bash
npx prisma studio
```
Opens at http://localhost:5555 - you can see all tables and data.

### Option B: MySQL Workbench
1. Right-click on `cv_builder` database
2. Click "Refresh"
3. Expand "Tables" folder
4. You should see:
   - User
   - Account
   - Session
   - VerificationToken
   - CV
   - Payment

### Option C: Command Line
```bash
mysql -u root -p
USE cv_builder;
SHOW TABLES;
```

---

## Step 7: Start Application

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## Troubleshooting

### Error: "Access denied for user 'root'@'localhost'"
**Solution:** Check your password in DATABASE_URL

```bash
# Test connection
mysql -u root -p
# Enter your password
```

### Error: "Unknown database 'cv_builder'"
**Solution:** Database not created. Run Step 2 again.

### Error: "Can't connect to MySQL server"
**Solution:** MySQL not running

```bash
# Start MySQL (macOS)
brew services start mysql

# Start MySQL (Windows)
# Open Services and start MySQL80

# Start MySQL (Linux)
sudo service mysql start
```

### Error: "Prisma schema validation error"
**Solution:** Reset and try again

```bash
npx prisma generate
npx prisma db push
```

---

## Backup & Restore

### Backup Database
```bash
mysqldump -u root -p cv_builder > backup.sql
```

### Restore Database
```bash
mysql -u root -p cv_builder < backup.sql
```

---

## Reset Database (If Needed)

### Option 1: Drop and Recreate
```sql
DROP DATABASE cv_builder;
CREATE DATABASE cv_builder CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Then run:
```bash
npx prisma db push
```

### Option 2: Prisma Reset
```bash
npx prisma migrate reset
```

---

## Production Setup

### Create Production User (Optional)
```sql
CREATE USER 'cv_builder_prod'@'localhost' IDENTIFIED BY 'strong_password_here';
GRANT ALL PRIVILEGES ON cv_builder.* TO 'cv_builder_prod'@'localhost';
FLUSH PRIVILEGES;
```

Then update .env:
```env
DATABASE_URL="mysql://cv_builder_prod:strong_password_here@localhost:3306/cv_builder"
```

---

## Verify Everything Works

### Test 1: Database Connection
```bash
npx prisma studio
```
Should open without errors.

### Test 2: Create User
1. Go to http://localhost:3000
2. Register new account
3. Check Prisma Studio - new user should appear

### Test 3: Create CV
1. Login
2. Create a CV
3. Check Prisma Studio - CV should appear in CV table

### Test 4: Edit CV
1. Go to Account → My CVs
2. Click Edit on a CV
3. Make changes
4. Save
5. Check Prisma Studio - changes should be saved

---

## Quick Reference

| Task | Command |
|------|---------|
| Create database | `CREATE DATABASE cv_builder;` |
| View databases | `SHOW DATABASES;` |
| Use database | `USE cv_builder;` |
| View tables | `SHOW TABLES;` |
| View table structure | `DESCRIBE User;` |
| Generate Prisma | `npx prisma generate` |
| Push schema | `npx prisma db push` |
| View data | `npx prisma studio` |
| Reset database | `npx prisma migrate reset` |
| Start app | `npm run dev` |

---

## Support

If you encounter issues:

1. Check MySQL is running
2. Verify DATABASE_URL in .env
3. Run `npx prisma generate`
4. Run `npx prisma db push`
5. Check error messages carefully
6. Review troubleshooting section above

---

**Status:** ✅ Ready to Deploy
