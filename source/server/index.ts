/**
 * fullstack template
 *
 * @author Ralph Wiedemeier <ralph@framefactory.io>
 * @copyright (c) 2020 Frame Factory GmbH
 */

import sourceMapSupport from "source-map-support";
sourceMapSupport.install();

import "module-alias/register";

import * as path from "path";
import * as http from "http";

import debug from "debug";
import express from "express";
import morgan from "morgan";

////////////////////////////////////////////////////////////////////////////////
// CONFIGURATION

const port = parseInt(process.env["DOCKER_SERVER_PORT"]) || 8000;
const isDevMode = process.env["NODE_ENV"] !== "production";

const projectDir = path.resolve(__dirname, "../../..");
const builtDir = path.resolve(projectDir, "services/server/public/built");
const staticDir = path.resolve(projectDir, "services/server/public/static");

////////////////////////////////////////////////////////////////////////////////
// GREETING

console.log(`
--------------------------------------------------------------------------------
Fullstack Template - Server
--------------------------------------------------------------------------------
Port:               ${port}
Development mode:   ${isDevMode}
Project directory:  ${projectDir}
Built files:        ${builtDir} 
Static files:       ${staticDir}
--------------------------------------------------------------------------------
`);

////////////////////////////////////////////////////////////////////////////////

const app = express();
app.disable('x-powered-by');

// logging
const info = debug("info");
app.use(morgan("combined", { stream: { write: msg => info(msg) } }));

// static file server
app.use("/", express.static(builtDir));
app.use("/", express.static(staticDir));

// client application
const indexFile = path.resolve(builtDir, isDevMode ? "index.dev.html" : "index.html");
app.use("/", (req, res) => res.sendFile(indexFile));

const server = new http.Server(app);
server.listen(port, () => {
    info("Server ready and listening on port %d", port);
});
