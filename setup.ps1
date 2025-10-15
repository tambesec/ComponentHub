# NetTechPro - Setup Helper Script
# Chạy script này để tự động setup môi trường development

$ErrorActionPreference = "Stop"

Write-Host "================================" -ForegroundColor Cyan
Write-Host "  NetTechPro Setup Helper" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check Node.js
Write-Host "[1/6] Checking Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node -v
    Write-Host "  ✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "  ❌ Node.js not found! Please install Node.js 18+ from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Check npm
Write-Host "[2/6] Checking npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm -v
    Write-Host "  ✅ npm version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "  ❌ npm not found!" -ForegroundColor Red
    exit 1
}

# Install server dependencies
Write-Host "[3/6] Installing server dependencies..." -ForegroundColor Yellow
Push-Location server
try {
    npm install
    Write-Host "  ✅ Server dependencies installed" -ForegroundColor Green
} catch {
    Write-Host "  ❌ Failed to install server dependencies" -ForegroundColor Red
    Pop-Location
    exit 1
}
Pop-Location

# Install client dependencies
Write-Host "[4/6] Installing client dependencies..." -ForegroundColor Yellow
Push-Location client
try {
    npm install
    Write-Host "  ✅ Client dependencies installed" -ForegroundColor Green
} catch {
    Write-Host "  ❌ Failed to install client dependencies" -ForegroundColor Red
    Pop-Location
    exit 1
}
Pop-Location

# Install admin dependencies
Write-Host "[5/6] Installing admin dependencies..." -ForegroundColor Yellow
Push-Location admin
try {
    npm install
    Write-Host "  ✅ Admin dependencies installed" -ForegroundColor Green
} catch {
    Write-Host "  ❌ Failed to install admin dependencies" -ForegroundColor Red
    Pop-Location
    exit 1
}
Pop-Location

# Create .env.local files if not exist
Write-Host "[6/6] Creating environment files..." -ForegroundColor Yellow

# Client .env.local
if (-not (Test-Path "client\.env.local")) {
    @"
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_URL=http://localhost:5173
NEXT_PUBLIC_SITE_NAME=NetTechPro
"@ | Out-File -FilePath "client\.env.local" -Encoding utf8
    Write-Host "  ✅ Created client/.env.local" -ForegroundColor Green
} else {
    Write-Host "  ℹ️  client/.env.local already exists" -ForegroundColor Cyan
}

# Admin .env.local
if (-not (Test-Path "admin\.env.local")) {
    @"
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_ADMIN_URL=http://localhost:3001
NEXT_PUBLIC_SITE_NAME=NetTechPro Admin
"@ | Out-File -FilePath "admin\.env.local" -Encoding utf8
    Write-Host "  ✅ Created admin/.env.local" -ForegroundColor Green
} else {
    Write-Host "  ℹ️  admin/.env.local already exists" -ForegroundColor Cyan
}

# Server .env check
if (Test-Path "server\.env") {
    Write-Host "  ✅ server/.env exists" -ForegroundColor Green
} else {
    Write-Host "  ⚠️  server/.env not found, copying from .env.example" -ForegroundColor Yellow
    Copy-Item "server\.env.example" "server\.env"
    Write-Host "  ✅ Created server/.env" -ForegroundColor Green
}

Write-Host ""
Write-Host "================================" -ForegroundColor Green
Write-Host "  Setup Complete! ✅" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Open 3 terminals" -ForegroundColor White
Write-Host "  2. Terminal 1: cd server && npm run dev" -ForegroundColor White
Write-Host "  3. Terminal 2: cd client && npm run dev" -ForegroundColor White
Write-Host "  4. Terminal 3: cd admin && npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "URLs:" -ForegroundColor Cyan
Write-Host "  - API:    http://localhost:3000" -ForegroundColor White
Write-Host "  - Docs:   http://localhost:3000/docs" -ForegroundColor White
Write-Host "  - Client: http://localhost:5173" -ForegroundColor White
Write-Host "  - Admin:  http://localhost:3001" -ForegroundColor White
Write-Host ""
Write-Host "Quick start with PM2 (optional):" -ForegroundColor Cyan
Write-Host "  npm install -g pm2" -ForegroundColor White
Write-Host "  pm2 start ecosystem.config.js" -ForegroundColor White
Write-Host ""
Write-Host "Read QUICKSTART.md for detailed instructions!" -ForegroundColor Yellow
Write-Host ""
