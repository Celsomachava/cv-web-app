-- CV Builder Database Setup Script
-- Run this in MySQL Workbench

-- 1. Create Database
CREATE DATABASE IF NOT EXISTS cv_builder 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- 2. Use Database
USE cv_builder;

-- 3. Create Database User (Optional - for production)
-- CREATE USER 'cv_builder_user'@'localhost' IDENTIFIED BY 'your_secure_password';
-- GRANT ALL PRIVILEGES ON cv_builder.* TO 'cv_builder_user'@'localhost';
-- FLUSH PRIVILEGES;

-- 4. Verify Database
SELECT 'Database cv_builder created successfully!' AS Status;

-- 5. Show Current Database
SELECT DATABASE() AS CurrentDatabase;

-- Note: After running this script:
-- 1. Update your .env file with the correct DATABASE_URL
-- 2. Run: npx prisma db push
-- 3. Run: npx prisma generate
-- 4. Start your application: npm run dev
