import axios from 'axios';

const API_KEY = '9a8847c3aa731c652a1c3824b2fe37ec';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
  );
  return response.data.results;
};

const fetchDetails = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

const fetchCredits = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
  );
  return response.data.cast;
};

const fetchReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`,
  );
  return response.data.results;
};

const fetchMovieSearching = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  );
  return response.data.results;
};

// export default {
//   fetchTrendingMovies,
//   fetchDetails,
//   fetchCredits,
//   fetchReviews,
//   fetchMovieSearching,
// };

const SearchApi = {
  fetchTrendingMovies,
  fetchDetails,
  fetchCredits,
  fetchReviews,
  fetchMovieSearching
}

export default SearchApi;