import m from "mithril";
import Page from "../models/Page";

export default {
    oninit: function () {
        Page.load("adresse");
    },
    view: function () {
        let html = Page.html;
        return m.trust(html)
    }
}
