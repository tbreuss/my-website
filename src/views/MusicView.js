import m from "mithril";
import PageModel from "../models/PageModel";

export default {
    view: function () {
        let html = PageModel.html;
        return m.trust(html)
    }
}
