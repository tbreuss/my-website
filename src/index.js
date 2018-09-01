import m from "mithril";
import Home from "./views/Home";
import Unterwegs from "./views/Unterwegs";
import Musik from "./views/Musik";
import Portfolio from "./views/Portfolio";
import Layout from "./views/Layout";

m.route(document.body, "/", {
    "/portfolio": {
        render: function () {
            return m(Layout, m(Portfolio))
        }
    },
    "/musik": {
        render: function () {
            return m(Layout, m(Musik))
        }
    },
    "/unterwegs": {
        render: function () {
            return m(Layout, m(Unterwegs))
        }
    },
    "/": {
        render: function () {
            return m(Layout, m(Home))
        }
    }
});
