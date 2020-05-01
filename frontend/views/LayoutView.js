import m from 'mithril'

export default {
  view: ({children}) => m('.app', [
    m('header.site-header', [
      m('h1.site-title', [
        m(m.route.Link, {href: '/'}, m('span.title-text', 'Thomas Breuss'))
      ]),
      m('nav.site-navigation', [
        m('ul', [
          m('li.site-navigation__home', [
            m(m.route.Link, {href: '/'}, 'Home')
          ]),
          m('li.site-navigation__portfolio', [
            m(m.route.Link, {href: '/portfolio'}, 'Portfolio')
          ]),
          m('li.site-navigation__artikel', [
            m(m.route.Link, {href: '/artikel'}, 'Artikel')
          ])
        ])
      ]),
    ]),
    m('.main', children),
    m('.site-footer', [
      m('p.hug', '© 2020 Thomas Breuss')
    ])
  ])
}
