# NetTechPro - Stop All Servers
# Kill all Node.js processes

Write-Host "================================" -ForegroundColor Yellow
Write-Host "  Stopping All Servers" -ForegroundColor Yellow
Write-Host "================================" -ForegroundColor Yellow
Write-Host ""

Write-Host "[INFO] Killing all Node.js processes..." -ForegroundColor Yellow

try {
    # Kill all node processes
    Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force
    Write-Host "  ✅ All Node.js processes stopped" -ForegroundColor Green
} catch {
    Write-Host "  ℹ️  No Node.js processes found" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "[INFO] Checking ports..." -ForegroundColor Yellow

# Check if ports are free
$ports = @(3000, 3001, 5173)
foreach ($port in $ports) {
    $connection = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
    if ($connection) {
        Write-Host "  ⚠️  Port $port still in use, killing process..." -ForegroundColor Yellow
        $processId = $connection.OwningProcess
        Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
        Write-Host "  ✅ Port $port freed" -ForegroundColor Green
    } else {
        Write-Host "  ✅ Port $port is free" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "================================" -ForegroundColor Green
Write-Host "  All Servers Stopped!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""
