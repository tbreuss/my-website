import m from "mithril";
import AddressView from "./views/AddressView";
import ArticleListView from "./views/ArticleListView";
import ArticleDetailView from "./views/ArticleDetailView";
import ErrorView from "./views/ErrorView";
import HomeView from "./views/HomeView";
import OnTheMoveView from "./views/OnTheMoveView";
import MusicView from "./views/MusicView";
import PortfolioView from "./views/PortfolioView";
import LayoutView from "./views/LayoutView";
import ArticleModel from "./models/ArticleModel";
import PageModel from "./models/PageModel";
import PhotoModel from "./models/PhotoModel";
import HtmlHelper from "./helpers/HtmlHelper";

m.route(document.body, "/", {
    "/portfolio": {
        onmatch: function() {
            return PageModel.load("portfolio");
        },
        render: function () {
            HtmlHelper.setActiveMenuItem("portfolio");
            HtmlHelper.setPageTitle("Portfolio");
            return m(LayoutView, m(PortfolioView))
        }
    },
    "/musik": {
        onmatch: function() {
            return PageModel.load("musik");
        },
        render: function () {
            HtmlHelper.setActiveMenuItem();
            HtmlHelper.setPageTitle("Musik");
            return m(LayoutView, m(MusicView))
        }
    },
    "/unterwegs": {
        onmatch: function() {
            return PhotoModel.loadList();
        },
        render: function () {
            HtmlHelper.setActiveMenuItem();
            HtmlHelper.setPageTitle("Unterwegs");
            return m(LayoutView, m(OnTheMoveView))
        }
    },
    "/adresse": {
        onmatch: function() {
            return PageModel.load("adresse");
        },
        render: function () {
            HtmlHelper.setActiveMenuItem();
            HtmlHelper.setPageTitle("Adresse");
            return m(LayoutView, m(AddressView))
        }
    },
    "/artikel/:slug": {
        onmatch: function(attrs) {
            return ArticleModel.load(attrs.slug);
        },
        render: function(vnode) {
            HtmlHelper.setActiveMenuItem("artikel");
            HtmlHelper.setPageTitle(ArticleModel.current.title + " // Artikel");
            return m(LayoutView, m(ArticleDetailView, vnode.attrs))
        }
    },
    "/artikel": {
        onmatch: function() {
            return ArticleModel.loadList();
        },
        render: function () {
            HtmlHelper.setActiveMenuItem("artikel");
            HtmlHelper.setPageTitle("Artikel");
            return m(LayoutView, m(ArticleListView))
        }
    },
    "/": {
        onmatch: function() {
            return Promise.all([
                PageModel.load("home"),
                ArticleModel.loadList(),
                PhotoModel.loadLatest()
            ]);
        },
        render: function () {
            HtmlHelper.setActiveMenuItem("home");
            HtmlHelper.setPageTitle();
            return m(LayoutView, m(HomeView))
        }
    },
    "/:404...": {
        render: function () {
            HtmlHelper.setActiveMenuItem();
            HtmlHelper.setPageTitle("Fehler");
            return m(LayoutView, m(ErrorView))
        }
    }
});
