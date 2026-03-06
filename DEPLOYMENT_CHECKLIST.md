# Production Deployment Checklist

## ✅ Pre-Deployment Tasks

### 1. Database Setup
- [ ] MySQL database created
- [ ] Database user configured with proper privileges
- [ ] DATABASE_URL updated in .env
- [ ] Run `npx prisma db push`
- [ ] Verify tables created successfully

### 2. Environment Variables
- [ ] NEXTAUTH_SECRET generated (use: `openssl rand -base64 32`)
- [ ] NEXTAUTH_URL set to production domain
- [ ] PAYSUITE_API_KEY configured
- [ ] PAYSUITE_WEBHOOK_SECRET configured
- [ ] GOOGLE_CLIENT_ID configured (if using)
- [ ] GOOGLE_CLIENT_SECRET configured (if using)

### 3. Code Cleanup
- [ ] Remove console.log statements
- [ ] Remove debug code
- [ ] Remove unused imports
- [ ] Remove commented code
- [ ] Update README.md

### 4. Security
- [ ] .env file in .gitignore
- [ ] Sensitive data removed from code
- [ ] API keys secured
- [ ] CORS configured properly
- [ ] Rate limiting implemented

### 5. Testing
- [ ] User registration works
- [ ] User login works
- [ ] Google OAuth works
- [ ] CV creation works
- [ ] CV editing works
- [ ] CV deletion works
- [ ] Payment flow works
- [ ] PDF download works
- [ ] Language switching works
- [ ] Profile updates work

---

## 🚀 Deployment Steps

### Option 1: Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Production ready"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Import GitHub repository
   - Add environment variables
   - Deploy

3. **Configure Database:**
   - Use PlanetScale or Railway for MySQL
   - Update DATABASE_URL in Vercel

### Option 2: VPS/Dedicated Server

1. **Install Dependencies:**
   ```bash
   sudo apt update
   sudo apt install nodejs npm mysql-server nginx
   ```

2. **Clone Repository:**
   ```bash
   git clone your-repo-url
   cd cv-builder
   npm install
   ```

3. **Configure MySQL:**
   ```bash
   sudo mysql_secure_installation
   mysql -u root -p
   CREATE DATABASE cv_builder;
   ```

4. **Setup Environment:**
   ```bash
   cp .env.example .env
   nano .env  # Edit with production values
   ```

5. **Build Application:**
   ```bash
   npm run build
   ```

6. **Start with PM2:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "cv-builder" -- start
   pm2 save
   pm2 startup
   ```

7. **Configure Nginx:**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. **SSL Certificate:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

## 📊 Post-Deployment

### 1. Monitoring
- [ ] Setup error tracking (Sentry)
- [ ] Setup analytics (Google Analytics)
- [ ] Monitor server resources
- [ ] Monitor database performance

### 2. Backups
- [ ] Setup automated database backups
- [ ] Test backup restoration
- [ ] Document backup procedures

### 3. Documentation
- [ ] Update README with production URL
- [ ] Document deployment process
- [ ] Create user guide
- [ ] Create admin guide

---

## 🔧 Maintenance

### Regular Tasks:
- Weekly database backups
- Monthly dependency updates
- Security patches
- Performance monitoring
- User feedback review

### Update Process:
```bash
git pull origin main
npm install
npx prisma generate
npm run build
pm2 restart cv-builder
```

---

## 📝 Environment Variables Reference

```env
# Database
DATABASE_URL="mysql://user:pass@host:3306/db"

# NextAuth
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="generated-secret-key"

# Paysuite
PAYSUITE_API_KEY="live_key_here"
PAYSUITE_WEBHOOK_SECRET="webhook_secret_here"

# Google OAuth
GOOGLE_CLIENT_ID="client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="client-secret"
```

---

## 🐛 Troubleshooting

### Build Errors:
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Database Connection:
```bash
npx prisma studio  # Test connection
npx prisma db push  # Reset schema
```

### PM2 Issues:
```bash
pm2 logs cv-builder  # View logs
pm2 restart cv-builder  # Restart app
pm2 delete cv-builder  # Remove process
```

---

## 📞 Support

- GitHub Issues: [Repository URL]
- Email: support@yourdomain.com
- Documentation: [Docs URL]

---

**Last Updated:** 2024
**Version:** 1.0.0
**Status:** Production Ready ✅
