export default function SetupGuide() {
  return (
    <main className="container">
      <h1>Connect TMDB</h1>
      <ol>
        <li>Create an account at themoviedb.org and request a Developer API key.</li>
        <li>Create a file named <code>.env</code> in the project root with:<br />
          <code>VITE_TMDB_API_KEY=YOUR_API_KEY_HERE</code>
        </li>
        <li>Stop and restart the dev server: <code>npm run dev</code>.</li>
      </ol>
      <p>If you prefer to code meanwhile, I can switch the list to mock data—just say the word.</p>
    </main>
  );
}
