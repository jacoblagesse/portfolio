export const projects  = [
  {
    id: 1,
    title: 'NYT Covid-19 Tracking',
    description: 'Development and maintenance of ~40 Node.js scrapers to automate data collection + analysis for The New York Times\'s Covid-19 tracking project.',
    media: require('./images/nyt2.png'),
    url: 'https://www.nytimes.com/interactive/2020/us/coronavirus-nursing-homes.html'
  },
  {
    id: 2,
    title: 'BOC Data',
    description: 'An interactive tool for visualizing donations from members of MU\'s Board of Curators to political organizations',
    media: require('./images/boc.png'),
    url: 'https://github.com/jacoblagesse/BOC-data',
    url2: 'https://jacoblagesse.github.io/BOC-data/'
  },
  {
    id: 3,
    title: 'Voice of Orange County Election Results',
    description: 'Collection + visualization of live election results, developed in a partnership with the Voice of Orange County.',
    media: require('./Videos/vooc.mp4'),
    url: 'https://voiceofoc.org/orange-county-2020-election/',
    url2: '',
    vid: true
  },
  {
    id: 4,
    title: 'MU Covid-19 Scraper',
    description: 'An automated scraper + dashboard system integrating Google App Scripts with Python triggers and Tableau\'s visualization software.',
    media: require('./images/covid.png'),
    url: ''
  },
  {
    id: 4,
    title: 'MU Covid-19 Scraper',
    description: 'An automated scraper + dashboard system integrating Google App Scripts with Python triggers and Tableau\'s visualization software.',
    media: require('./images/covid.png'),
    url: ''
  },
  {
    id: 5,
    title: 'Image Mapper',
    description: 'A Python visualization tool that maps a chart, map or image onto a 3D plane.',
    media: require('./Videos/imgmap.mp4'),
    url: '',
    vid: true
  }
]

export default {
    projects,
}