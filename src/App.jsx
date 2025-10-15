import { Routes, Route } from "react-router-dom";
import PopularList from "./routes/PopularList.jsx";
import MovieDetail from "./routes/MovieDetail.jsx";
import NotFound from "./components/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PopularList />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
