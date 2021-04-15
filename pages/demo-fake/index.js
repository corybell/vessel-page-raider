const scrape = async () => {
  return Promise.resolve([
    {
      title: "Castle in the Sky",
      director: "Hayao Miyazaki",
      releaseDate: "1986",
    },
    {
      title: "Grave of the Fireflies",
      director: "Isao Takahata",
      releaseDate: "1988",
    },
    {
      title: "My Neighbor Totoro",
      director: "Hayao Miyazaki",
      releaseDate: "1988",
    },
  ])
}

module.exports = {
  url: "http://fake.url",
  scrape,
}
