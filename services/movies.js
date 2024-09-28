const { Movies } = require("../models/stepDbSchema");

const getAllMovies = async () => {
  const movies = await Movies.find();
  return movies;
};

const getMovieById = async (movieId) => {
  const movies = await Movies.findOne({movieId: movieId});
  return movies;
};

const getMovieByGenre = async (genre) => {
  const movies = await Movies.find({ genre: genre });
  return movies;
};

const createMovie = async (movieParam) => {
  const { movieId, movieName, genre, favorite, rating, moviePlot } = movieParam;
  const movie = new Movies({
    movieId,
    movieName,
    genre,
    favorite,
    rating,
    moviePlot,
  });
  const newMovie = await movie.save();
  return newMovie;
};

const updateMovie = async (movieId, data) => {
  const movieUpdated = await Movies.updateOne({ movieId: movieId }, data);
  return movieUpdated;
};

const deleteMovie = async (movieId) => {
  const movieDeleted = await Movies.deleteOne({ movieId: movieId });
  return movieDeleted
};

module.exports = {
  getAllMovies,
  getMovieById,
  getMovieByGenre,
  createMovie,
  updateMovie,
  deleteMovie,
};
