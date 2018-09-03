import m from "mithril";
import Adresse from "./views/Adresse";
import Home from "./views/Home";
import Unterwegs from "./views/Unterwegs";
import Musik from "./views/Musik";
import Portfolio from "./views/Portfolio";
import Layout from "./views/Layout";

const PAGE_TITLE = "Thomas Breuss";

m.route(document.body, "/", {
    "/portfolio": {
        render: function () {
            document.title = "Portfolio // " + PAGE_TITLE;
            return m(Layout, m(Portfolio))
        }
    },
    "/musik": {
        render: function () {
            document.title = "Musik // " + PAGE_TITLE;
            return m(Layout, m(Musik))
        }
    },
    "/unterwegs": {
        render: function () {
            document.title = "Unterwegs // " + PAGE_TITLE;
            return m(Layout, m(Unterwegs))
        }
    },
    "/adresse": {
        render: function () {
            document.title = "Adresse // " + PAGE_TITLE;
            return m(Layout, m(Adresse))
        }
    },
    "/": {
        render: function () {
            document.title = PAGE_TITLE;
            return m(Layout, m(Home))
        }
    }
});
