import {html, render} from "./web_modules/lit-html.js";

render(html`
    <style>
        body {
          background-color: lightgray;
          padding: 0;
          margin: 0;
        } 
    </style>
    <tm-lit-app></tm-lit-app>
`, document.querySelector('body'));