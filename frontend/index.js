import m from 'mithril'
import {AddressView} from './views/AddressView'
import {ArticleListView} from './views/ArticleListView'
import {ArticleDetailView} from './views/ArticleDetailView'
import {ErrorView} from './views/ErrorView'
import {HomeView} from './views/HomeView'
import {OnTheMoveView} from './views/OnTheMoveView'
import {MusicView} from './views/MusicView'
import {PortfolioView} from './views/PortfolioView'
import {LayoutView} from './views/LayoutView'
import {NotFoundView} from './views/NotFoundView'

m.route(document.body, '/', {
  '/portfolio': {
    view: () => m(LayoutView, m(PortfolioView))
  },
  '/musik': {
    view: () => m(LayoutView, m(MusicView))
  },
  '/erlebnisse': {
    view: () => m(LayoutView, m(OnTheMoveView))
  },
  '/adresse': {
    view: () => m(LayoutView, m(AddressView))
  },
  '/artikel/:slug': {
    view: () => m(LayoutView, m(ArticleDetailView))
  },
  '/artikel': {
    view: () => m(LayoutView, m(ArticleListView))
  },
  '/fehler': {
    view: () => m(LayoutView, m(ErrorView))
  },
  '/': {
    view: () => m(LayoutView, m(HomeView))
  },
  '/:404...': {
    view: () => m(LayoutView, m(NotFoundView))
  }
})
