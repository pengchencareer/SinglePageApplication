import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome back </h1>
            <p>this is paragraph 1</p>
            <p>
                <a href = "/posts" data-link>view recent posts</a>
            </p>
        `;
    }
}