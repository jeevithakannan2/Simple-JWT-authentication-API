const {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieByGenre,
} = require("../services/movies");

const getAllMoviesController = async (req, res, next) => {
  const result = await getAllMovies();
  res.status(200).send(result);
};

const getMovieByIdController = async (req, res, next) => {
  const movie = await getMovieById(req.params.movieId);
  res.status(200).send(movie);
};

const getMovieByGenreController = async (req, res, next) => {
  const genre = req.query.genre;
  const movies = await getMovieByGenre(genre);
  res.status(200).send(movies);
};

const createMovieController = async (req, res, next) => {
  const movie = req.body;
  await createMovie(movie);
  res.status(201).send({ data: "Movie created successfully" });
};

const updateMovieController = async (req, res, next) => {
  const movieId = req.params.movieId;
  const data = req.body;
  await updateMovie(movieId, data);
  res.status(200).send({ data: "Movie updated successfully" });
};

const deleteMovieController = async (req, res, next) => {
  const movieId = req.params.movieId;
  await deleteMovie(movieId);
  res.status(200).send({ data: "Movie deleted successfully" });
};

module.exports = {
  getAllMoviesController,
  getMovieByIdController,
  getMovieByGenreController,
  createMovieController,
  updateMovieController,
  deleteMovieController,
};
