/**
 * Fullstack Template
 * Copyright 2022 Ralph Wiedemeier, Frame Factory GmbH
 *
 * License: MIT
 */

 import * as sourceMapSupport from "source-map-support";
 sourceMapSupport.install();
 
 import * as path from "path";
 import * as http from "http";
 
 import express from "express";
 import morgan from "morgan";

////////////////////////////////////////////////////////////////////////////////
// CONFIGURATION

const port = parseInt(process.env["DOCKER_SERVER_PORT"]) || 8000;
const isDevMode = process.env["NODE_ENV"] !== "production";

const projectDir = process.env.PWD;
const builtDir = path.resolve(projectDir, "services/server/public/built");
const staticDir = path.resolve(projectDir, "services/server/public/static");

////////////////////////////////////////////////////////////////////////////////
// GREETING

console.log(`
--------------------------------------------------------------------------------
Fullstack Template - Server
--------------------------------------------------------------------------------
Port:               ${port}
Mode:               ${isDevMode ? "development" : "production"}
Project directory:  ${projectDir}
Built files:        ${builtDir} 
Static files:       ${staticDir}
--------------------------------------------------------------------------------
`);

////////////////////////////////////////////////////////////////////////////////

const app = express();
app.disable('x-powered-by');

// logging
if (isDevMode) {
    app.use(morgan("tiny"));
}

// static file server
app.use("/", express.static(builtDir));
app.use("/", express.static(staticDir));

// client application
const indexFile = path.resolve(builtDir, "lit-app/index.html");
app.use("/", (req, res) => res.redirect("/lit-app/index.html"));

const server = new http.Server(app);
server.listen(port, () => {
    console.info("Server ready and listening on port %d", port);
});
