import m from "mithril"

export default {
    view: function (vnode) {
        return m(".app", [
            m("header.site-header", [
                m("h1.site-title", [
                    m("a[href='/']", {oncreate: m.route.link}, [
                        m("span.title-text", "Thomas Breuss")
                    ])
                ]),
                m("nav.site-navigation", [
                    m("ul", [
                        m("li", [
                            m("a[href='/']", {oncreate: m.route.link}, "Home"),
                        ]),
                        m("li", [
                            m("a[href='/portfolio']", {oncreate: m.route.link}, "Portfolio")
                        ])
                    ])
                ]),
            ]),
            m(".main", vnode.children),
            m(".site-footer", [
                m("p.hug", "© 2018 Thomas Breuss")
            ])
        ])
    }
}
