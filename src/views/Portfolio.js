import m from "mithril";
import Page from "../models/Page";

export default {
    oninit: function () {
        Page.load("portfolio");
    },
    view: function () {
        let html = Page.html;
        return m.trust(html)
    }
}
