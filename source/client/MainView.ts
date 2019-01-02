/**
 * FF Typescript Foundation Library
 * Copyright 2018 Ralph Wiedemeier, Frame Factory GmbH
 *
 * License: MIT
 */

import CustomElement, { customElement } from "@ff/ui/CustomElement";

import "./styles.scss";

////////////////////////////////////////////////////////////////////////////////

@customElement("f-template-application")
export default class MainView extends CustomElement
{
    constructor()
    {
        super();
    }
}