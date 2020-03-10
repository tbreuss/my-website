import m from "mithril";
import Page from "../models/Page";

export default {
    view: function () {
        let html = Page.html;
        return m.trust(html)
    }
}
