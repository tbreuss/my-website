import m from 'mithril'

export const LayoutView = {
  view: ({children}) => m('.app',
    m('header.site-header',
      m('h1.site-title',
        m(m.route.Link, {href: '/'}, m('span.title-text', 'Thomas Breuss'))
      ),
      m('nav.site-navigation',
        m('ul',
          m('li.site-navigation__portfolio',
            m(m.route.Link, {href: '/portfolio'}, 'Portfolio')
          ),
          m('li.site-navigation__artikel',
            m(m.route.Link, {href: '/artikel'}, 'Artikel')
          ),
          m('li.site-navigation__erlebnisse',
            m(m.route.Link, {href: '/erlebnisse'}, 'Erlebnisse')
          )
        )
      )
    ),
    m('.main', children),
    m('.site-footer',
      m('p.github', m('a', {href:'https://github.com/tbreuss/my-website', target:'_blank'}, 'GitHub')),
      m('p.hug', '© 2025 Thomas Breuss')
    )
  )
}
