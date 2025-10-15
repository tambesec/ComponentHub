#!/bin/bash

# NetTechPro - Start All Servers
# Linux/Mac Script

set -e

COLOR_GREEN='\033[0;32m'
COLOR_BLUE='\033[0;34m'
COLOR_YELLOW='\033[1;33m'
COLOR_RED='\033[0;31m'
COLOR_CYAN='\033[0;36m'
COLOR_RESET='\033[0m'

echo -e "${COLOR_CYAN}================================${COLOR_RESET}"
echo -e "${COLOR_CYAN}  NetTechPro - Starting All Servers${COLOR_RESET}"
echo -e "${COLOR_CYAN}================================${COLOR_RESET}"
echo ""

# Check Node.js
echo -e "${COLOR_YELLOW}[INFO] Checking Node.js...${COLOR_RESET}"
if ! command -v node &> /dev/null; then
    echo -e "${COLOR_RED}[ERROR] Node.js not found!${COLOR_RESET}"
    echo -e "${COLOR_RED}Please install from https://nodejs.org/${COLOR_RESET}"
    exit 1
fi

NODE_VERSION=$(node -v)
echo -e "${COLOR_GREEN}  Node.js version: $NODE_VERSION${COLOR_RESET}"
echo ""

echo -e "${COLOR_YELLOW}[INFO] Starting servers in separate terminals...${COLOR_RESET}"
echo ""

# Function to start server based on OS
start_server() {
    local name=$1
    local path=$2
    local port=$3
    
    echo -e "${COLOR_CYAN}Starting $name (Port $port)...${COLOR_RESET}"
    
    # For macOS
    if [[ "$OSTYPE" == "darwin"* ]]; then
        osascript -e "tell app \"Terminal\" to do script \"cd '$PWD/$path' && npm run dev\""
    # For Linux
    else
        if command -v gnome-terminal &> /dev/null; then
            gnome-terminal -- bash -c "cd '$PWD/$path' && npm run dev; exec bash"
        elif command -v xterm &> /dev/null; then
            xterm -e "cd '$PWD/$path' && npm run dev" &
        else
            echo -e "${COLOR_RED}No suitable terminal emulator found${COLOR_RESET}"
            echo "Please run manually: cd $path && npm run dev"
        fi
    fi
    
    sleep 2
}

# Start all servers
start_server "API Server" "server" "3000"
start_server "Client" "client" "5173"
start_server "Admin" "admin" "3001"

echo ""
echo -e "${COLOR_GREEN}================================${COLOR_RESET}"
echo -e "${COLOR_GREEN}  All Servers Started!${COLOR_RESET}"
echo -e "${COLOR_GREEN}================================${COLOR_RESET}"
echo ""
echo -e "${COLOR_CYAN}Services:${COLOR_RESET}"
echo "  - API:    http://localhost:3000"
echo "  - Docs:   http://localhost:3000/docs"
echo "  - Client: http://localhost:5173"
echo "  - Admin:  http://localhost:3001"
echo ""
echo -e "${COLOR_YELLOW}Press Ctrl+C in each terminal to stop servers${COLOR_RESET}"
echo ""
