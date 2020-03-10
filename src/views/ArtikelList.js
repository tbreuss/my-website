import m from "mithril";
import Artikel from "../models/Artikel";

export default {
    view: function () {
        return m(".articles", [
            m("h2", "Artikel"),
            m("ul", [
                Artikel.list.map(function (article) {
                    return m("li", m("p", [
                        m(m.route.Link, {href: "/artikel/" + article.slug}, article.title),
                        m("br"),
                        article.abstract
                    ]))
                })])
        ])
    }
}
