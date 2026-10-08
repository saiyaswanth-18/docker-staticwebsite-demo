# HashTek Solutions - Static Multi-Page Website & Docker Setup

This project is a clean, responsive, multi-page static website demo inspired by [HashTek Solutions](https://www.hashteksolutions.com/), containerized using **Nginx on Alpine Linux**.

---

## 📁 Project Structure

```
docker-demo/
│
├── index.html           # Home page (Hero, stats, featured offerings)
├── corporate.html       # Corporate Solutions (Cloud migration, DevOps, FinOps)
├── training.html        # Training Programs (AWS, DevOps, Docker, Python)
├── internship.html      # Internship Programs (Tracks, process, certification)
├── contact.html         # Contact Us page (Interactive inquiry form & details)
│
├── css/
│   └── style.css        # Responsive styling & design system
├── js/
│   └── main.js          # Navigation toggle, active states, form handler
│
├── nginx.conf           # Custom Nginx configuration (gzip, caching, routing)
├── Dockerfile           # Multi-stage/Alpine Nginx container definition
├── docker-compose.yml   # Docker Compose file for 1-click startup
└── .dockerignore        # Files excluded from Docker build context
```

---

## 🌐 1. Testing Locally (Without Docker)

You can open the website right away:
- Simply double-click `index.html` in your file explorer to view it directly in any web browser.
- Or run a lightweight local HTTP server:
  ```powershell
  python -m http.server 3000
  ```
  Then visit: `http://localhost:3000`

---

## 🐳 2. Dockerizing the Website

### Prerequisites
Make sure **Docker Desktop** is running on your system.

### Option A: Using Docker CLI

1. **Build the Docker image**:
   ```powershell
   docker build -t hashtek-solutions:v1 .
   ```

2. **Run the container**:
   ```powershell
   docker run -d -p 8080:80 --name hashtek-website hashtek-solutions:v1
   ```

3. **View the website**:
   Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

4. **Stop or remove the container**:
   ```powershell
   docker stop hashtek-website
   docker rm hashtek-website
   ```

---

### Option B: Using Docker Compose (Easiest)

1. **Start the container**:
   ```powershell
   docker compose up -d --build
   ```

2. **Access the site**:
   ```
   http://localhost:8080
   ```

3. **Stop the container**:
   ```powershell
   docker compose down
   ```
