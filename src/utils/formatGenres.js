export const formatGenres = (genres, genre_ids) => {
  const genresFormated = new Array()

  genre_ids.map(id => {
    genres.filter(genre => genre.id === id && genresFormated.push(genre.name))
  })

  return genresFormated.join(' - ')
}
