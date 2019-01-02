import * as React from "react";
import { CSSProperties } from "react";

import merge from "flow/core/merge";

////////////////////////////////////////////////////////////////////////////////

export interface TestProps
{
    className?: string;
    style?: CSSProperties;
}

export default class Test extends React.Component<TestProps, {}>
{
    static defaultProps: TestProps = {
        className: "Test"
    };

    private static style: CSSProperties = {
    };

    constructor(props: TestProps)
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

        const stylesCombined = merge(Test.style, style);

        return (<div
            className={className}
            style={stylesCombined}>
            {children}
        </div>);
    }
}