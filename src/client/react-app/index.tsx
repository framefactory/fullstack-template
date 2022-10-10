/**
 * Fullstack Template
 * Copyright 2022 Ralph Wiedemeier, Frame Factory GmbH
 *
 * License: MIT
 */

import "./styles.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Application } from "./components/Application.jsx";

////////////////////////////////////////////////////////////////////////////////

ReactDOM.render(
    <Application/>,
    document.getElementById("main")
);
