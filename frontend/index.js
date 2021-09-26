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

m.route(document.body, '/', {
  '/portfolio': {
    onmatch: async () => {
      await PageModel.load('portfolio')
    },
    render: () => m(LayoutView, m(PortfolioView))
  },
  '/musik': {
    onmatch: async () => {
      await PageModel.load('musik')
    },
    render: () => m(LayoutView, m(MusicView))
  },
  '/erlebnisse': {
    onmatch: async () => {
      await PhotoModel.loadList()
    },
    render: () => m(LayoutView, m(OnTheMoveView))
  },
  '/adresse': {
    onmatch: async () => {
      await PageModel.load('adresse')
    },
    render: () => m(LayoutView, m(AddressView))
  },
  '/artikel/:slug': {
    onmatch: async ({slug}) => {
      await ArticleModel.load(slug)
    },
    render: () => m(LayoutView, m(ArticleDetailView))
  },
  '/artikel': {
    onmatch: async () => {
      await ArticleModel.loadList()
    },
    render: () => m(LayoutView, m(ArticleListView))
  },
  '/fehler': {
    render: () => {
      return m(LayoutView, m(ErrorView))
    }
  },
  '/': {
    onmatch: async () => {
      await Promise.all([
        PageModel.load('home', true),
        ArticleModel.loadList(true),
        PhotoModel.loadLatest(true)
      ])
    },
    render: () => m(LayoutView, m(HomeView))
  },
  '/:404...': {
    render: () => m(LayoutView, m(NotFoundView))
  }
})
