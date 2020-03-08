import m from "mithril";
import Artikel from "../models/Artikel";

export default {
    pageTitle:"",
    oninit: function (vnode) {
        Artikel.load(vnode.attrs.id);
    },
    oncreate: function (vnode) {
        this.pageTitle = vnode.attrs.pageTitle;
    },
    view: function () {
        var article = Artikel.current;
        this.setPageTitle(article.title);
        return m(".articles", [
            m("h2", article.title),
            m("div", [
                article.updated_at ? "Letzte Änderung: ": "Erstellt am: ",
                article.updated_at ? article.updated_at : article.created_at,
                " • ",
                "Lesezeit: ",
                article.reading_time,
                " Minuten"
            ]),
            m("div", m.trust(article.content)),
            m("p", [
                m("a[href='/artikel']", {oncreate: m.route.link}, "Alle Artikel anzeigen")
            ])
        ])
    },
    setPageTitle: function (articleName) {
        document.title = articleName + " // Artikel // " + this.pageTitle;
    }
}
