# NetTechPro - Windows Deployment Script
# Usage: .\deploy.ps1 [service]
# Services: api, client, admin, all

param(
    [Parameter(Position=0)]
    [ValidateSet('api', 'server', 'client', 'admin', 'all', 'status')]
    [string]$Service = 'all'
)

function Write-Info {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor Blue
}

function Write-Success {
    param([string]$Message)
    Write-Host "[SUCCESS] $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

function Deploy-Server {
    Write-Info "Deploying Server (API)..."
    
    Push-Location server
    
    try {
        # Install dependencies
        Write-Info "Installing dependencies..."
        npm install
        
        # Build TypeScript
        Write-Info "Building TypeScript..."
        npm run build
        
        # Restart PM2
        Write-Info "Restarting PM2 process..."
        pm2 restart nettechpro-api
        if ($LASTEXITCODE -ne 0) {
            pm2 start npm --name "nettechpro-api" -- start
        }
        
        Write-Success "Server deployed successfully!"
    }
    catch {
        Write-Error "Failed to deploy server: $_"
    }
    finally {
        Pop-Location
    }
}

function Deploy-Client {
    Write-Info "Deploying Client..."
    
    Push-Location client
    
    try {
        # Install dependencies
        Write-Info "Installing dependencies..."
        npm install
        
        # Build Next.js
        Write-Info "Building Next.js..."
        npm run build
        
        # Restart PM2
        Write-Info "Restarting PM2 process..."
        pm2 restart nettechpro-client
        if ($LASTEXITCODE -ne 0) {
            pm2 start npm --name "nettechpro-client" -- start -- -p 5173
        }
        
        Write-Success "Client deployed successfully!"
    }
    catch {
        Write-Error "Failed to deploy client: $_"
    }
    finally {
        Pop-Location
    }
}

function Deploy-Admin {
    Write-Info "Deploying Admin..."
    
    Push-Location admin
    
    try {
        # Install dependencies
        Write-Info "Installing dependencies..."
        npm install
        
        # Build Next.js
        Write-Info "Building Next.js..."
        npm run build
        
        # Restart PM2
        Write-Info "Restarting PM2 process..."
        pm2 restart nettechpro-admin
        if ($LASTEXITCODE -ne 0) {
            pm2 start npm --name "nettechpro-admin" -- start -- -p 3001
        }
        
        Write-Success "Admin deployed successfully!"
    }
    catch {
        Write-Error "Failed to deploy admin: $_"
    }
    finally {
        Pop-Location
    }
}

function Show-Status {
    Write-Info "Current PM2 Status:"
    pm2 list
    
    Write-Host ""
    Write-Info "Services:"
    Write-Host "  - API:    http://localhost:3000" -ForegroundColor Cyan
    Write-Host "  - Client: http://localhost:5173" -ForegroundColor Cyan
    Write-Host "  - Admin:  http://localhost:3001" -ForegroundColor Cyan
    Write-Host "  - Docs:   http://localhost:3000/docs" -ForegroundColor Cyan
}

# Main script
Write-Info "NetTechPro Deployment Script"
Write-Info "Service: $Service"
Write-Host ""

switch ($Service) {
    { $_ -in 'api', 'server' } {
        Deploy-Server
    }
    'client' {
        Deploy-Client
    }
    'admin' {
        Deploy-Admin
    }
    'all' {
        # Pull latest code
        Write-Info "Pulling latest code from Git..."
        git pull origin main
        
        # Deploy all services
        Deploy-Server
        Deploy-Client
        Deploy-Admin
        
        # Save PM2 config
        pm2 save
    }
    'status' {
        Show-Status
        exit 0
    }
}

Write-Host ""
Write-Success "Deployment completed!"
Write-Host ""
Show-Status
