import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg: #0b0f16;
    --card: #111827;
    --text: #e5e7eb;
    --muted: #9ca3af;
    --accent: #22d3ee;
  }

  * { box-sizing: border-box; }

  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: "Inter", system-ui, Avenir, Helvetica, Arial, sans-serif;
  }

  a {
    color: var(--accent);
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }
`;
