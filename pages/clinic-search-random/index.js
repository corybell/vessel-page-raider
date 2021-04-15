
const scrape = async () => {
  return Promise.resolve([
    {
      url: 'http://google.com',
      name: 'Google', 
    },
    {
      url: 'http://apple.com',
      name: 'Apple', 
    },
  ])
}

module.exports = {
  url: 'http://random.clinic.search.com',
  scrape,
}
