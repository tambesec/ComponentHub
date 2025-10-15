# NetTechPro - PM2 Start Script
# Start all services with PM2

$ErrorActionPreference = "Stop"

Write-Host "================================" -ForegroundColor Cyan
Write-Host "  Starting with PM2" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check PM2
Write-Host "[INFO] Checking PM2..." -ForegroundColor Yellow
try {
    $pm2Version = pm2 -v
    Write-Host "  PM2 version: $pm2Version" -ForegroundColor Green
} catch {
    Write-Host "  [ERROR] PM2 not found!" -ForegroundColor Red
    Write-Host "  Installing PM2..." -ForegroundColor Yellow
    npm install -g pm2
    Write-Host "  PM2 installed successfully!" -ForegroundColor Green
}

Write-Host ""

# Check if apps need to be built
Write-Host "[INFO] Checking if build is needed..." -ForegroundColor Yellow

if (-not (Test-Path "server\dist")) {
    Write-Host "  Building server..." -ForegroundColor Yellow
    Push-Location server
    npm run build
    Pop-Location
}

if (-not (Test-Path "client\.next")) {
    Write-Host "  Building client..." -ForegroundColor Yellow
    Push-Location client
    npm run build
    Pop-Location
}

if (-not (Test-Path "admin\.next")) {
    Write-Host "  Building admin..." -ForegroundColor Yellow
    Push-Location admin
    npm run build
    Pop-Location
}

Write-Host ""
Write-Host "[INFO] Starting with PM2..." -ForegroundColor Yellow

# Start with PM2
pm2 start ecosystem.config.js

Write-Host ""
Write-Host "================================" -ForegroundColor Green
Write-Host "  Services Started with PM2!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""

# Show status
pm2 status

Write-Host ""
Write-Host "Commands:" -ForegroundColor Cyan
Write-Host "  pm2 logs          - View logs" -ForegroundColor White
Write-Host "  pm2 monit         - Monitor processes" -ForegroundColor White
Write-Host "  pm2 status        - Check status" -ForegroundColor White
Write-Host "  pm2 restart all   - Restart all" -ForegroundColor White
Write-Host "  pm2 stop all      - Stop all" -ForegroundColor White
Write-Host ""
Write-Host "URLs:" -ForegroundColor Cyan
Write-Host "  - API:    http://localhost:3000" -ForegroundColor White
Write-Host "  - Client: http://localhost:5173" -ForegroundColor White
Write-Host "  - Admin:  http://localhost:3001" -ForegroundColor White
Write-Host ""
