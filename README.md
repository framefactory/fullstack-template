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
- run `npm run up` to create and start the docker services

## Scripts
### Scripts to be called from the host:
- `npm run up [-- <component>]` builds/starts the service containers in development
  mode, either compiles and watches `all` components, or the component with the given name.
  If no name is given, a component named `default` is assumed.
- `npm run down` stops and removes all containers
- `npm run restart` stops, removes and then starts the containers again
- `npm run install` runs `npm install` on the server container
- `npm run bash` runs a bash shell on the server container
- `npm run node` runs a fresh node.js container with the current host folder
  mapped to `/app` and port `9000` exposed

### Scripts to be called from inside the server container:
- `npm run server` compiles and runs the server code
- `npm run dev` compiles, runs, and watches the server code, and compiles, runs,
  and watches the client code (all components)
- `npm run dev:component` compiles, runs, and watches the server code, and compiles,
  runs, and watches the client code (all components)
- `npm run build` builds the server and client code in production mode
- `npm run build:server` builds the server code
- `npm run build:client` builds the client code
- `npm run build:client:prod` builds the client code in production mode
- `npm run build:client:dev` builds the client code in development mode
- `npm run clean` cleans the output folders `services/server/bin` and
  `services/server/public/built`
