const API = {
  base: "https://api.themoviedb.org/3",
  key: import.meta.env.VITE_TMDB_API_KEY,
};

export const HAS_KEY = !!API.key;

export const IMG = {
  base: "https://image.tmdb.org/t/p/",
  poster: (p, size = "w342") => (p ? `${IMG.base}${size}${p}` : null),
  backdrop: (p, size = "w780") => (p ? `${IMG.base}${size}${p}` : null),
};

function withKey(params = {}) {
  const q = new URLSearchParams({ api_key: API.key, language: "en-US", ...params });
  return q.toString();
}

export const endpoints = {
  popular: (page = 1) => `${API.base}/movie/popular?${withKey({ page })}`,
  movie: (id) => `${API.base}/movie/${id}?${withKey()}`,
};
