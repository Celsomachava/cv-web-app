# Quick Command Reference

## 🚀 Initial Setup (First Time)

```bash
# 1. Install dependencies
npm install

# 2. Generate Prisma client
npx prisma generate

# 3. Push database schema (creates tables)
npx prisma db push

# 4. Start development server
npm run dev
```

Open http://localhost:3000

---

## 🧪 Development Commands

```bash
# Start dev server
npm run dev

# View database (Prisma Studio)
npx prisma studio

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 🗄️ Database Commands

```bash
# Push schema changes
npx prisma db push

# Generate Prisma client
npx prisma generate

# Create migration
npx prisma migrate dev --name migration_name

# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# View database in Prisma Studio
npx prisma studio
```

---

## 🔧 MySQL Commands

```bash
# Connect to MySQL
mysql -u root -p

# Create database
CREATE DATABASE cv_builder CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Show all databases
SHOW DATABASES;

# Use database
USE cv_builder;

# Show all tables
SHOW TABLES;

# Show table structure
DESCRIBE User;

# Exit MySQL
EXIT;
```

---

## 📦 Deployment Commands

```bash
# Build application
npm run build

# Start production server
npm start

# Build and start
npm run build && npm start

# With PM2 (process manager)
pm2 start npm --name "cv-builder" -- start
pm2 save
pm2 startup
```

---

## 🐛 Troubleshooting Commands

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Reset everything
rm -rf .next node_modules
npm install
npx prisma generate
npx prisma db push

# Kill process on port 3000
npx kill-port 3000

# Check if MySQL is running
mysql -u root -p -e "SELECT 1"

# View application logs
npm run dev

# View PM2 logs
pm2 logs cv-builder
```

---

## 📝 Environment Setup

```bash
# Generate NEXTAUTH_SECRET
openssl rand -base64 32

# Copy environment template
cp .env.example .env

# Edit environment variables
nano .env  # or use your editor
```

---

## 🔄 Common Workflows

### First Time Setup
```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

### After Pulling Changes
```bash
npm install
npx prisma generate
npm run dev
```

### Before Deployment
```bash
npm install
npx prisma generate
npx prisma db push
npm run build
npm start
```

### Reset Everything
```bash
rm -rf .next node_modules
npm install
npx prisma migrate reset
npm run dev
```

---

## 🚀 Deployment Workflows

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy to VPS
```bash
# SSH into server
ssh user@server.com

# Clone repository
git clone your-repo-url
cd cv-builder

# Install and setup
npm install
npx prisma db push
npm run build

# Start with PM2
pm2 start npm --name "cv-builder" -- start
```

### Docker Deployment
```bash
# Build Docker image
docker build -t cv-builder .

# Run container
docker run -p 3000:3000 cv-builder

# With docker-compose
docker-compose up
```

---

## 📊 Monitoring Commands

```bash
# View PM2 processes
pm2 list

# View PM2 logs
pm2 logs

# Monitor resources
pm2 monit

# Restart application
pm2 restart cv-builder

# Stop application
pm2 stop cv-builder

# Delete process
pm2 delete cv-builder
```

---

## 🔐 Security Commands

```bash
# Generate secure secret
openssl rand -base64 32

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Update dependencies
npm update

# Check outdated packages
npm outdated
```

---

## 📈 Performance Commands

```bash
# Analyze bundle size
npm run build
npx next-bundle-analyzer

# Check performance
npm run build
npm start

# View Lighthouse report
# Use Chrome DevTools → Lighthouse
```

---

## 🧹 Cleanup Commands

```bash
# Remove build artifacts
rm -rf .next

# Remove dependencies
rm -rf node_modules

# Clear npm cache
npm cache clean --force

# Remove lock file
rm package-lock.json

# Clean database
npx prisma migrate reset
```

---

## 📋 Backup Commands

```bash
# Backup database
mysqldump -u root -p cv_builder > backup.sql

# Restore database
mysql -u root -p cv_builder < backup.sql

# Backup project
tar -czf cv-builder-backup.tar.gz .

# Restore project
tar -xzf cv-builder-backup.tar.gz
```

---

## 🔍 Debugging Commands

```bash
# Enable debug logging
DEBUG=* npm run dev

# Check Node version
node --version

# Check npm version
npm --version

# Check MySQL version
mysql --version

# Test database connection
npx prisma studio

# View environment variables
env | grep DATABASE_URL
```

---

## 📚 Help Commands

```bash
# Next.js help
npx next --help

# Prisma help
npx prisma --help

# npm help
npm help

# MySQL help
mysql --help
```

---

## ⚡ Quick Reference Table

| Task | Command |
|------|---------|
| Install | `npm install` |
| Dev | `npm run dev` |
| Build | `npm run build` |
| Start | `npm start` |
| Database | `npx prisma studio` |
| Push Schema | `npx prisma db push` |
| Reset DB | `npx prisma migrate reset` |
| Generate | `npx prisma generate` |
| Lint | `npm run lint` |
| Audit | `npm audit` |
| Update | `npm update` |
| Clean | `npm cache clean --force` |

---

## 🎯 Typical Development Day

```bash
# Morning - Start work
npm run dev

# Make changes to code

# Test changes
# Open http://localhost:3000

# Check database
npx prisma studio

# Before committing
npm run lint
npm run build

# Deploy
git add .
git commit -m "message"
git push origin main
```

---

## 🚨 Emergency Commands

```bash
# Kill all Node processes
killall node

# Kill process on port 3000
npx kill-port 3000

# Force restart PM2
pm2 kill
pm2 start npm --name "cv-builder" -- start

# Emergency database reset
npx prisma migrate reset --force
```

---

**Bookmark this file for quick reference!**
