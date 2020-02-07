const config = {
  siteTitle: 'DMV BOOK',
  siteTitleShort: 'DMV BOOK',
  siteTitleAlt: 'DMV BOOK',
  siteLogo: 'https://s3.amazonaws.com/upenn-wdp/images/book-icon2.png',
  siteUrl: 'https://www.dmvbookclub.com',
  repo: 'https://github.com/dmvbookclub/book-gatsby',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'DMV BOOK CLUB',
  siteRss: '/rss.xml',
  menuLinks: [
    {
      name: '지난 책들',
      link: '/books/',
    },
    // {
    //   name: 'About learn',
    //   link: '/learn/',
    // },
    // {
    //   name: 'Contact',
    //   link: '/contact/',
    // },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
