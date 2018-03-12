/**
 * Template Application.
 *
 * @author Ralph Wiedemeier <ralph@framefactory.io>
 * @copyright (c) 2018 Frame Factory GmbH.
 */

import * as React from "react";
import { CSSProperties } from "react";

////////////////////////////////////////////////////////////////////////////////

export interface ApplicationProps
{
    className?: string;
    style?: CSSProperties;
}

export default class Application extends React.Component<ApplicationProps, {}>
{
    static defaultProps: ApplicationProps = {
        className: "application"
    };

    constructor(props: ApplicationProps)
    {
        super(props);
    }

    render()
    {
        const {
            className,
            style,
            children
        } = this.props;

        return (<div
            className={className}
            style={style}>
            <h1>Hello World!</h1>
            {children}
        </div>);
    }
}