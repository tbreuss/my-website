import m from "mithril";
import ArticleModel from "../models/ArticleModel";

export default {
    view: function () {
        return m(".articles", [
            m("h2", "Artikel"),
            m("ul", [
                ArticleModel.list.map(function (article) {
                    return m("li", m("p", [
                        m(m.route.Link, {href: "/artikel/" + article.slug}, article.title),
                        m("br"),
                        article.abstract
                    ]))
                })])
        ])
    }
}
