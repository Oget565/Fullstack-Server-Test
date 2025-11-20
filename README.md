# Fullstack-Server-Test

A full-stack web application built with React and Flask, containerized with Docker and orchestrated via Docker Compose.

## Architecture

- **Frontend**: React with Vite, served by Nginx on port 8083
- **Backend**: Python Flask on port 8085
- **Networking**: Services communicate via Docker bridge network
- **Features**: JS count button, svg, joke served from backend

## Quick Start

Start the entire application:

```bash
docker compose up --build -d
```

Access the application:
- Frontend: http://localhost:8083
- Backend API: http://localhost:8085/request_joke

To stop the services:

```bash
docker compose down
```
