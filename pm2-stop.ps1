# NetTechPro - PM2 Stop Script
# Stop all PM2 services

Write-Host "================================" -ForegroundColor Yellow
Write-Host "  Stopping PM2 Services" -ForegroundColor Yellow
Write-Host "================================" -ForegroundColor Yellow
Write-Host ""

# Check PM2
try {
    pm2 -v | Out-Null
} catch {
    Write-Host "[ERROR] PM2 not found!" -ForegroundColor Red
    exit 1
}

# Stop all processes
Write-Host "[INFO] Stopping all processes..." -ForegroundColor Yellow
pm2 stop all

Write-Host ""
Write-Host "[INFO] Deleting processes..." -ForegroundColor Yellow
pm2 delete all

Write-Host ""
Write-Host "================================" -ForegroundColor Green
Write-Host "  All Services Stopped!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""
