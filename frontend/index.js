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
import {ArticleModel} from './models/ArticleModel'
import {PageModel} from './models/PageModel'
import {PhotoModel} from './models/PhotoModel'
import {NotFoundView} from './views/NotFoundView'
import {lastError} from './api'

m.route(document.body, '/', {
  '/portfolio': {
    onmatch: () => PageModel.load('portfolio'),
    render: () => m(LayoutView, m(PortfolioView))
  },
  '/musik': {
    onmatch: () => PageModel.load('musik'),
    render: () => m(LayoutView, m(MusicView))
  },
  '/unterwegs': {
    onmatch: () => PhotoModel.loadList(),
    render: () => m(LayoutView, m(OnTheMoveView))
  },
  '/adresse': {
    onmatch: () => PageModel.load('adresse'),
    render: () => m(LayoutView, m(AddressView))
  },
  '/artikel/:slug': {
    onmatch: ({slug}) => ArticleModel.load(slug),
    render: () => m(LayoutView, m(ArticleDetailView))
  },
  '/artikel': {
    onmatch: () => ArticleModel.loadList(),
    render: () => m(LayoutView, m(ArticleListView))
  },
  '/fehler': {
    onmatch: () => {
      if (lastError.code === '') {
        m.route.set('/')
      }
    },
    render: () => {
      return m(LayoutView, m(ErrorView))
    }
  },
  '/': {
    onmatch: () => Promise.all([
      PageModel.load('home'),
      ArticleModel.loadList(),
      PhotoModel.loadLatest()
    ]),
    render: () => m(LayoutView, m(HomeView))
  },
  '/:404...': {
    render: () => m(LayoutView, m(NotFoundView))
  }
})
