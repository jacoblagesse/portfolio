export const projects  = [
  {
    id: 1,
    title: 'New York Times Covid-19 Tracking',
    description: 'I develop and maintain ~40 Node.js scrapers to automate data collection + analysis for The New York Times\'s Covid-19 tracking project.',
    media: require('./images/nyt2.png'),
    url: 'https://www.nytimes.com/interactive/2020/us/coronavirus-nursing-homes.html'
  },
  {
    id: 2,
    title: 'Spotify API Web App',
    description: 'A project to track users\' trending artists and tracks using Spotify\'s Web API.',
    media: require('./images/spotify_api.png'),
    url: 'http://spotifytrack.me/',
    url2: 'https://github.com/jacoblagesse/spotify-tracker'
  },
  {
    id: 3,
    title: 'Political Donation Interactive',
    description: 'An interactive D3.js tool for visualizing donations from members of MU\'s Board of Curators to political organizations',
    media: require('./images/boc.png'),
    url: 'https://jacoblagesse.github.io/BOC-data/',
    url2: 'https://github.com/jacoblagesse/BOC-data'
  },
  {
    id: 4,
    title: 'Live Election Results for Voice of Orange County',
    description: 'Collection + visualization of live election results, developed in a partnership with the Voice of Orange County.',
    media: require('./Videos/vooc.mp4'),
    url: 'https://voiceofoc.org/orange-county-2020-election/',
    url2: 'https://observablehq.com/@mizzou-journalism/vooc-bar-chart',
    url3: 'https://github.com/rji-futures-lab/vooc-election-results',
    vid: true
  },
  {
    id: 5,
    title: 'Campus Covid-19 Dashboard',
    description: 'An automated scraper + dashboard system integrating Google App Scripts with Python triggers and Tableau\'s visualization software.',
    media: require('./images/covid.png'),
    url: 'https://www.themaneater.com/stories/campus/dashboard:-covid-19-at-mu',
    url2: 'https://github.com/jacoblagesse/covid-scraper',
    url3: 'https://github.com/jacoblagesse/covid-scraper-trigger'
  },
  {
    id: 6,
    title: 'Political Ad Data Analysis',
    description: 'A Django project to extract and analyze data from political advertisement contracts uploaded to the FCC\'s database. Still under development.',
    media: require('./images/fccdocs.png'),
    url2: 'https://github.com/rji-futures-lab/django-fcc-opif'
  },
  {
    id: 7,
    title: '3D Viz Tool',
    description: 'A Python tool that transforms a 2D chart, map or image into an animated 3D visualization.',
    media: require('./Videos/imgmap.mp4'),
    url2: 'https://github.com/jacoblagesse/image-mapper',
    vid: true
  }
]

export default {
    projects,
}