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
  nowPlaying: (page = 1) => `${API.base}/movie/now_playing?${withKey({ page })}`,
  upcoming: (page = 1) => `${API.base}/movie/upcoming?${withKey({ page })}`,
  topRated: (page = 1) => `${API.base}/movie/top_rated?${withKey({ page })}`,
  movie: (id) => `${API.base}/movie/${id}?${withKey()}`,
};

// Optional: export a config for the picker UI
export const CATEGORY_OPTIONS = [
  { key: "popular", label: "Popular" },
  { key: "nowPlaying", label: "Now Playing" },
  { key: "upcoming", label: "Upcoming" },
  { key: "topRated", label: "Top Rated" },
];
