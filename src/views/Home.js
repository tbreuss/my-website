import m from "mithril";
import Artikel from "../models/Artikel";
import Page from "../models/Page";
import Photo from "../models/Photo";

export default {
    view: function () {
        let html = Page.html;
        return [
            m.trust(html),
            this.photo(),
            this.article()
        ]
    },
    article: function () {
        var article = Artikel.list[0];
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
        var photo = Photo.latest;
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
