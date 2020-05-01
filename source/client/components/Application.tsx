/**
 * template
 *
 * @author Ralph Wiedemeier <ralph@framefactory.ch>
 * @copyright (c) 2020 Frame Factory GmbH
 */

import * as React from "react";

import { ThemeProvider } from '@material-ui/styles';
import { withStyles, StyleRules } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { theme } from "./theme";

////////////////////////////////////////////////////////////////////////////////

export interface IApplicationProps
{
}

export interface IApplicationState
{
}

const styles = theme => ({
    root: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
    },
} as StyleRules);

class Application extends React.Component<IApplicationProps, IApplicationState>
{
    render()
    {
        return (
            <ThemeProvider theme={theme}>
                <div>Hello from the Application React component.</div>
            </ThemeProvider>
        );
    }
}

export default withStyles(styles)(Application);
