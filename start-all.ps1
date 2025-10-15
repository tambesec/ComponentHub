# NetTechPro - Start All Servers
# PowerShell Script

$ErrorActionPreference = "Stop"

Write-Host "================================" -ForegroundColor Cyan
Write-Host "  NetTechPro - Starting All Servers" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check Node.js
Write-Host "[INFO] Checking Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node -v
    Write-Host "  Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "  [ERROR] Node.js not found!" -ForegroundColor Red
    Write-Host "  Please install from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "[INFO] Starting servers in separate windows..." -ForegroundColor Yellow
Write-Host ""

# Function to start a server
function Start-Server {
    param(
        [string]$Name,
        [string]$Path,
        [string]$Port,
        [int]$Number
    )
    
    Write-Host "[$Number/3] Starting $Name (Port $Port)..." -ForegroundColor Cyan
    
    $command = "cd '$Path'; npm run dev"
    Start-Process powershell -ArgumentList "-NoExit", "-Command", $command -WindowStyle Normal
    
    Start-Sleep -Seconds 2
}

# Start all servers
Start-Server -Name "API Server" -Path "$PWD\server" -Port "3000" -Number 1
Start-Server -Name "Client" -Path "$PWD\client" -Port "5173" -Number 2
Start-Server -Name "Admin" -Path "$PWD\admin" -Port "3001" -Number 3

Write-Host ""
Write-Host "================================" -ForegroundColor Green
Write-Host "  All Servers Started!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""
Write-Host "Services:" -ForegroundColor Cyan
Write-Host "  - API:    http://localhost:3000" -ForegroundColor White
Write-Host "  - Docs:   http://localhost:3000/docs" -ForegroundColor White
Write-Host "  - Client: http://localhost:5173" -ForegroundColor White
Write-Host "  - Admin:  http://localhost:3001" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C in each window to stop servers" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press any key to exit this window..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
