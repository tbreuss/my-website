import m from "mithril";
import Adresse from "./views/Adresse";
import Error from "./views/Error";
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
            setActiveMenuItem('.site-navigation__portfolio a');
            return m(Layout, m(Portfolio))
        }
    },
    "/musik": {
        render: function () {
            document.title = "Musik // " + PAGE_TITLE;
            setActiveMenuItem();
            return m(Layout, m(Musik))
        }
    },
    "/unterwegs": {
        render: function () {
            document.title = "Unterwegs // " + PAGE_TITLE;
            setActiveMenuItem();
            return m(Layout, m(Unterwegs))
        }
    },
    "/adresse": {
        render: function () {
            document.title = "Adresse // " + PAGE_TITLE;
            setActiveMenuItem();
            return m(Layout, m(Adresse))
        }
    },
    "/": {
        render: function () {
            document.title = PAGE_TITLE;
            setActiveMenuItem('.site-navigation__home a');
            return m(Layout, m(Home))
        }
    },
    "/:404...": {
        render: function () {
            document.title = "Fehler // " + PAGE_TITLE;
            setActiveMenuItem();
            return m(Layout, m(Error))
        }
    }
});

function setActiveMenuItem(selector = '') {
    let els = document.querySelectorAll('.site-navigation a');
    els.forEach((el) => {
        el.classList.remove('active');
    });

    if (selector === '') {
        return;
    }

    let el = document.querySelector(selector);
    if (el) {
        el.classList.add('active');
    }
}
