import m from "mithril";
import PageModel from "../models/PageModel";
import HtmlHelper from "../helpers/HtmlHelper";

export default {
    oncreate: function() {
        HtmlHelper.setActiveMenuItem("portfolio");
        HtmlHelper.setPageTitle("Portfolio");
        HtmlHelper.scrollTop();
    },
    view: function () {
        let html = PageModel.html;
        return m.trust(html)
    }
}
