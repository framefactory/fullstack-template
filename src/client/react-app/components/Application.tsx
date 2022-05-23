/**
 * Fullstack Template
 * Copyright 2022 Ralph Wiedemeier, Frame Factory GmbH
 *
 * License: MIT
 */

import * as React from "react";

////////////////////////////////////////////////////////////////////////////////

export interface IApplicationProps
{
}

export interface IApplicationState
{
}

export default class Application extends React.Component<IApplicationProps, IApplicationState>
{
    render()
    {
        return (
            <div>Hello from the Application React components.</div>
        );
    }
}
