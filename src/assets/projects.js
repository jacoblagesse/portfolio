export const projects  = [
  {
    id: 1,
    title: 'NYT Covid-19 Tracking',
    description: 'Development and maintenance of ~40 Node.js scrapers to automate data collection + analysis for The New York Times\'s Covid-19 tracking project.',
    image: require('./images/nyt.png'),
    url: ''
  },
  {
    id: 2,
    title: 'BOC Data',
    description: 'An interactive tool for visualizing donations from members of MU\'s Board of Curators to political organizations',
    image: require('./images/boc.png'),
    url: ''
  },
  {
    id: 3,
    title: 'Voice of Orange County Election Results',
    description: 'Collection + visualization of live election results, developed in a partnership with the Voice of Orange County.',
    image: require('./images/vooc.png'),
    url: ''
  },
  {
    id: 4,
    title: 'MU Covid-19 Scraper',
    description: 'An automated scraper + dashboard system integrating Google App Scripts with Python triggers and Tableau\'s visualization software.',
    image: require('./images/covid.png'),
    url: ''
  }
]

export default {
    projects,
}