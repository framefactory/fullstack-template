/**
 * template
 *
 * @author Ralph Wiedemeier <ralph@framefactory.ch>
 * @copyright (c) 2020 Frame Factory GmbH
 */

import CustomElement, { customElement, html } from "@ff/ui/CustomElement";

////////////////////////////////////////////////////////////////////////////////

@customElement("ff-template")
export default class MainView extends CustomElement
{
    render()
    {
        return html`<div>Hello from the MainView HTML custom element.</div>`
    }
}
