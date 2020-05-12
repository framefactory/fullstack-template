/**
 * template
 *
 * @author Ralph Wiedemeier <ralph@framefactory.ch>
 * @copyright (c) 2020 Frame Factory GmbH
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
            <div>Hello from the Application React component.</div>
        );
    }
}
