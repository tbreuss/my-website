import m from "mithril";
import ArticleModel from "../models/ArticleModel";
import PageModel from "../models/PageModel";
import PhotoModel from "../models/PhotoModel";
import HtmlHelper from "../helpers/HtmlHelper";

export default {
    oncreate: function () {
        HtmlHelper.setActiveMenuItem("home");
        HtmlHelper.setPageTitle();
        HtmlHelper.scrollTop();
    },
    view: function () {
        let html = PageModel.html;
        return [
            m.trust(html),
            this.photo(),
            this.article()
        ]
    },
    article: function () {
        var article = ArticleModel.list[0];
        return [
            m("p.lead", "Letzter Artikel"),
            m("p", {style: {marginTop: "0.85rem"}}, [
                m(m.route.Link, {href: "/artikel/" + article.slug}, article.title),
                m("br"),
                article.abstract
            ])
        ]
    },
    photo: function () {
        var photo = PhotoModel.latest;
        return [
            m("p.lead", "Zuletzt unterwegs"),
            m(".img", {style: {marginTop: "0.85rem"}}, [
                m("img", {
                    alt: photo.name,
                    src: "/assets/media/thumbs/" + photo.id + "." + photo.extension,
                    style: {
                        maxWidth: "100%"
                    }
                }),
                m("caption", photo.date + " – " + photo.name)
            ])
        ];
    }
}
