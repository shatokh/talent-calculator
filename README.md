# Talent calculator for Skylore RPG game on Svelte + Tailwind

[![Playwright Tests](https://github.com/shatokh/talent-calculator/actions/workflows/playwright.yml/badge.svg?branch=master)](https://github.com/shatokh/talent-calculator/actions/workflows/playwright.yml) [![Unit Tests](https://github.com/shatokh/talent-calculator/actions/workflows/units.yml/badge.svg?branch=master)](https://github.com/shatokh/talent-calculator/actions/workflows/units.yml) [![CodeQL](https://github.com/shatokh/talent-calculator/actions/workflows/codeql.yml/badge.svg?branch=master)](https://github.com/shatokh/talent-calculator/actions/workflows/codeql.yml) [![Dependabot Updates](https://github.com/shatokh/talent-calculator/actions/workflows/dependabot/dependabot-updates/badge.svg?branch=master)](https://github.com/shatokh/talent-calculator/actions/workflows/dependabot/dependabot-updates)

![Project Logo](static/images/logo.png)

# Svelte

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

# Tailwindcss

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup [`Tailwindcss`](https://tailwindcss.com/)

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Testing

All tests are descibed there [e2e/README.md](e2e/README.md).

## Node version changing

```bash
nvm use 24.0.2
nvm use latest
```

## Dockerization

To ensure a consistent development environment and simplify deployment, you can containerize this Svelte application using Docker. Below are step-by-step instructions “out of the box” and free to use.

### Prerequisites

- [Docker Engine](https://docs.docker.com/get-docker/)  (tested with Docker 24+)
- Optional: [Docker Compose](https://docs.docker.com/compose/install/) for multi‐service setups


### 1. Add a .dockerignore

Create a file named .dockerignore in the project root:

```gitignore
node_modules
dist
.git
.vscode
*.log
.env
```
### 2. Development Container (Dockerfile.dev)
```dockerfile
# Dockerfile.dev
FROM node:24-alpine
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start Vite in host mode
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```
Build & run:
```bash
docker build -f Dockerfile.dev -t talent-calculator:dev 
docker run --rm -it -p 5173:5173 -v "${PWD}:/app:delegated" -v /app/node_modules talent-calculator:dev
```
### 3. Production Image (Dockerfile)

```dockerfile
# Stage 1: build
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
Build & run:

```bash
docker build -f Dockerfile.prod -t talent-calculator:prod .
docker run --rm -it -p 8080:80 talent-calculator:prod
```
### 4. Docker Compose

```yml
version: '3.8'
services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "5173:5173"
    volumes:
      - .:/app:delegated
      - /app/node_modules
```
Launch all services:

```bash
docker-compose up --build
```
### 5. Useful Docker Commands

docker images — list local images
docker ps — list running containers
docker-compose down — stop and remove containers
docker system prune --all --volumes — clean up unused data