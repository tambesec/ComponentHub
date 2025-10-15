@echo off
REM NetTechPro - Start All Servers
REM Windows Batch Script

echo ================================
echo   NetTechPro - Starting All Servers
echo ================================
echo.

REM Check if node is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [INFO] Starting servers in separate windows...
echo.

REM Start API Server
echo [1/3] Starting API Server...
start "NetTechPro API - Port 3000" cmd /k "cd server && npm run dev"
timeout /t 2 /nobreak >nul

REM Start Client
echo [2/3] Starting Client...
start "NetTechPro Client - Port 5173" cmd /k "cd client && npm run dev"
timeout /t 2 /nobreak >nul

REM Start Admin
echo [3/3] Starting Admin...
start "NetTechPro Admin - Port 3001" cmd /k "cd admin && npm run dev"
timeout /t 2 /nobreak >nul

echo.
echo ================================
echo   All Servers Started!
echo ================================
echo.
echo Services:
echo   - API:    http://localhost:3000
echo   - Docs:   http://localhost:3000/docs
echo   - Client: http://localhost:5173
echo   - Admin:  http://localhost:3001
echo.
echo Press Ctrl+C in each window to stop servers
echo.
pause
