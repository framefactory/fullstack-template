/**
 * Template Application.
 *
 * @author Ralph Wiedemeier <ralph@framefactory.io>
 * @copyright (c) 2018 Frame Factory GmbH.
 */

import * as sourceMapSupport from "source-map-support";
sourceMapSupport.install();

import * as fs from "fs";
import * as path from "path";
import * as http from "http";

import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as handlebars from "express-handlebars";
import * as morgan from "morgan";

////////////////////////////////////////////////////////////////////////////////
// APPLICATION SETUP

let devMode: boolean = process.env.NODE_ENV !== "production";

const port = parseInt(process.env.SERVER_PORT) || 8000;

const rootDir = path.resolve(__dirname, process.env.SERVER_ROOT);
const templateDir = path.resolve(rootDir, "views");
let staticDir = path.resolve(rootDir, "static");

////////////////////////////////////////////////////////////////////////////////
// EXPRESS SERVER

let app = express();
app.set("port", port);

let server = http.createServer(app);
server.listen(app.get("port"), () => {
    console.info(`Server listening on port ${app.get("port")}`);
});

////////////////////////////////////////////////////////////////////////////////
// TEMPLATE ENGINE

const handlebarsConfig = {
    extname: ".hbs",
    layoutsDir: templateDir + "/layouts",
    defaultLayout: "page"
};

app.engine(".hbs", handlebars(handlebarsConfig));
app.set("view engine", ".hbs");
app.set("views", templateDir);

////////////////////////////////////////////////////////////////////////////////
// SERVER ROUTING

// logging middleware
if (devMode) {
    app.use(morgan("tiny"));
}

// parse cookies
app.use(cookieParser());

// parse json and urlencoded request bodies into req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// index page
app.get("/", (req: any, res) => {
    res.render("pages/application", { layout: null });
});

// serve static files
app.use("/static", express.static(staticDir));