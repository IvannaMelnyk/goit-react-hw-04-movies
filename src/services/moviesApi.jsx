const BASE_URL = 'https://api.themoviedb.org/3/';

const API_KEY = '9620bbde6240057ed7438c810b0caa0d';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchPopMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`,
  );
}

export function fetchMoviesByKeyWord(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`,
  );
}

export function fetchMoviesFullInfo(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`,
  );
}

export function fetchMoviesActorsInfo(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`,
  );
}

export function fetchMoviesReview(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`,
  );
}
