#!/bin/bash

# NetTechPro - Quick Deploy Script
# Usage: ./deploy.sh [service]
# Services: api, client, admin, all

set -e

COLOR_GREEN='\033[0;32m'
COLOR_BLUE='\033[0;34m'
COLOR_YELLOW='\033[1;33m'
COLOR_RED='\033[0;31m'
COLOR_RESET='\033[0m'

log_info() {
    echo -e "${COLOR_BLUE}[INFO]${COLOR_RESET} $1"
}

log_success() {
    echo -e "${COLOR_GREEN}[SUCCESS]${COLOR_RESET} $1"
}

log_warning() {
    echo -e "${COLOR_YELLOW}[WARNING]${COLOR_RESET} $1"
}

log_error() {
    echo -e "${COLOR_RED}[ERROR]${COLOR_RESET} $1"
}

deploy_server() {
    log_info "Deploying Server (API)..."
    
    cd server
    
    # Install dependencies
    log_info "Installing dependencies..."
    npm install
    
    # Build TypeScript
    log_info "Building TypeScript..."
    npm run build
    
    # Restart PM2
    log_info "Restarting PM2 process..."
    pm2 restart nettechpro-api || pm2 start npm --name "nettechpro-api" -- start
    
    cd ..
    log_success "Server deployed successfully!"
}

deploy_client() {
    log_info "Deploying Client..."
    
    cd client
    
    # Install dependencies
    log_info "Installing dependencies..."
    npm install
    
    # Build Next.js
    log_info "Building Next.js..."
    npm run build
    
    # Restart PM2
    log_info "Restarting PM2 process..."
    pm2 restart nettechpro-client || pm2 start npm --name "nettechpro-client" -- start -- -p 5173
    
    cd ..
    log_success "Client deployed successfully!"
}

deploy_admin() {
    log_info "Deploying Admin..."
    
    cd admin
    
    # Install dependencies
    log_info "Installing dependencies..."
    npm install
    
    # Build Next.js
    log_info "Building Next.js..."
    npm run build
    
    # Restart PM2
    log_info "Restarting PM2 process..."
    pm2 restart nettechpro-admin || pm2 start npm --name "nettechpro-admin" -- start -- -p 3001
    
    cd ..
    log_success "Admin deployed successfully!"
}

show_status() {
    log_info "Current PM2 Status:"
    pm2 list
    
    echo ""
    log_info "Services:"
    echo "  - API:    https://api.nettechpro.me"
    echo "  - Client: https://nettechpro.me"
    echo "  - Admin:  https://admin.nettechpro.me"
}

# Main script
SERVICE=${1:-all}

log_info "NetTechPro Deployment Script"
log_info "Service: $SERVICE"
echo ""

case $SERVICE in
    api|server)
        deploy_server
        ;;
    client)
        deploy_client
        ;;
    admin)
        deploy_admin
        ;;
    all)
        # Pull latest code
        log_info "Pulling latest code from Git..."
        git pull origin main
        
        # Deploy all services
        deploy_server
        deploy_client
        deploy_admin
        
        # Save PM2 config
        pm2 save
        ;;
    status)
        show_status
        exit 0
        ;;
    *)
        log_error "Invalid service: $SERVICE"
        echo "Usage: $0 [api|client|admin|all|status]"
        exit 1
        ;;
esac

echo ""
log_success "Deployment completed!"
echo ""
show_status
