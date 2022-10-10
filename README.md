# Fullstack Template
Template for a dockerized fullstack web application. The template creates 3 docker services,
a Node.js server, a database (MySQL or MongoDB), and a database admin tool.

### Services
- server: Node.js
- db: MySQL or MongoDB
- admin: Adminer or Mongo-Express

### Server
- Typescript
- Node.js
- Express

### Client
- Typescript
- Webpack
- React
- Lit Web Components

# Getting Started
- Edit `docker-compose.yml` to enable desired services
- Copy `.template.env` to `.env` and edit configuration
- Edit `client/webpack.config.js` to configure the client (browser) components
- run `pnpm run up` to create and start the docker services

## Scripts
### Scripts to be called from the host:
- `pnpm run up [-- <component>]` builds/starts the service containers in development
  mode, either compiles and watches `all` components, or the component with the given name.
  If no name is given, a component named `default` is assumed.
- `pnpm run down` stops and removes all containers
- `pnpm run restart` stops, removes and then starts the containers again
- `pnpm run bash` runs a bash shell on the server container
- `pnpm run node` runs a fresh node.js container with the current host folder
  mapped to `/app` and port `9000` exposed

### Scripts to be called from inside the server container:
- `pnpm run server` compiles and runs the server code
- `pnpm run dev` compiles, runs, and watches the server code, and compiles, runs,
  and watches the client code (all components)
- `pnpm run dev:component` compiles, runs, and watches the server code, and compiles,
  runs, and watches the client code (all components)
- `pnpm run build` builds the server and client code in production mode
- `pnpm run build:server` builds the server code
- `pnpm run build:client` builds the client code
- `pnpm run build:client:prod` builds the client code in production mode
- `pnpm run build:client:dev` builds the client code in development mode
- `pnpm run clean` cleans the output folders `services/server/bin` and
  `services/server/public/built`
