import { Link } from "react-router-dom";
export default function NotFound({ message = "We couldn't find that page." }) {
  return (
    <main className="container">
      <h1>404 – Not Found</h1>
      <p>{message}</p>
      <p><Link to="/">Go home</Link></p>
    </main>
  );
}
