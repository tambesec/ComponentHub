# NetTechPro - PM2 Restart Script
# Restart all PM2 services

Write-Host "================================" -ForegroundColor Cyan
Write-Host "  Restarting PM2 Services" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check PM2
try {
    pm2 -v | Out-Null
} catch {
    Write-Host "[ERROR] PM2 not found!" -ForegroundColor Red
    Write-Host "Run: npm install -g pm2" -ForegroundColor Yellow
    exit 1
}

# Restart all
Write-Host "[INFO] Restarting all processes..." -ForegroundColor Yellow
pm2 restart all

Write-Host ""
Write-Host "================================" -ForegroundColor Green
Write-Host "  Services Restarted!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""

# Show status
pm2 status

Write-Host ""
