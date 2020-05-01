/**
 * template
 *
 * @author Ralph Wiedemeier <ralph@framefactory.io>
 * @copyright (c) 2020 Frame Factory GmbH
 */

import "./styles.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import Application from "./components/Application";
import "./components/MainView";

////////////////////////////////////////////////////////////////////////////////

ReactDOM.render(
    <Application/>,
    document.getElementById("main")
);
