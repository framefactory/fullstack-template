/**
 * Template Application.
 *
 * @author Ralph Wiedemeier <ralph@framefactory.io>
 * @copyright (c) 2018 Frame Factory GmbH.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";

import "./application.scss";
import Application from "../components/Application";

ReactDOM.render(
    <Application/>,
    document.getElementById("main")
);