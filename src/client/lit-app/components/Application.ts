import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("ff-application")
class Application extends LitElement
{
    render()
    {
        return html`<h1>Lit Application</h1>`
    }
}