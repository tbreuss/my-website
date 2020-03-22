import m from "mithril";
import ArticleModel from "../models/ArticleModel";

export default {
    view: function () {
        var article = ArticleModel.current;
        if (article === false) {
            throw new Error("Artikel nicht gefunen");
        }
        return m(".articles", [
            m("h2", article.title),
            m("div", [
                article.updated_at ? "Letzte Änderung: " : "Erstellt am: ",
                article.updated_at ? article.updated_at : article.created_at,
                " • ",
                "Lesezeit: ",
                article.reading_time,
                " Minuten"
            ]),
            m("div", m.trust(article.content)),
            m("p", [
                m(m.route.Link, {href: "/artikel"}, "Alle Artikel anzeigen"),
            ])
        ])
    }
}