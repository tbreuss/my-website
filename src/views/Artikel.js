import m from "mithril";
import Artikel from "../models/Artikel";

export default {
    oninit: function () {
        Artikel.loadList();
    },
    view: function () {
        return m(".articles", [
            m("h2", "Artikel"),
            m("ul", [
                Artikel.list.map(function (article) {
                    return m("li", m("p", [
                        m("a[href='/artikel/" + article.slug + "']", {oncreate: m.route.link}, article.title),
                        m("br"),
                        article.abstract
                    ]))
                })])
            ])
    }
}
