# 🎬 Flixscope – Movie Explorer App

**Flixscope** is a responsive multi-page React app that lets users browse, explore, and learn more about movies using **The Movie Database (TMDB)** API.  
Built with **React**, **Vite**, **React Router**, and **styled-components**, it delivers a clean, accessible, and high-performance user experience.

👉 **Live site:** [flixscope.netlify.app](https://flixscope.netlify.app)

---

## ✨ Features

- 🎞️ Browse popular, now playing, upcoming, and top-rated movies  
- 🔍 View movie details including posters, backdrops, and metadata  
- 🧭 Multi-page routing with **React Router**  
- ⚙️ Reusable `useFetch` hook for fetching API data  
- 💅 Styled-components for theme consistency and maintainable styling  
- 🚦 Handles loading and error states gracefully  
- ❌ Custom 404 page and API SetupGuide for missing keys  
- 🌈 Fully responsive and accessible (95+ Lighthouse score)  
- 🌐 Deployed on **Netlify** with SPA routing and environment variables  

---

## 🧰 Tech Stack

| Category | Tech |
|-----------|------|
| Framework | [React (Vite)](https://vitejs.dev/) |
| Routing | [React Router](https://reactrouter.com/) |
| Styling | [styled-components](https://styled-components.com/) |
| API | [The Movie Database (TMDB)](https://www.themoviedb.org/) |
| Deployment | [Netlify](https://www.netlify.com/) |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/UlrikaRakkaBrant/js-project-movies.git
cd js-project-movies
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Add your TMDB API key
Create a `.env` file in the project root and add your API key:
```
VITE_TMDB_API_KEY=YOUR_API_KEY_HERE
```

> 🔑 Your key must start with `VITE_` for Vite to expose it to the app.  
> 🛡️ Make sure `.env` is listed in `.gitignore` so your key isn’t pushed to GitHub.

### 4️⃣ Start the development server
```bash
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Deploying to Netlify

### 1️⃣ Connect your GitHub repo in [Netlify](https://app.netlify.com/)

### 2️⃣ Build settings
- **Build command:** `npm run build`  
- **Publish directory:** `dist`

### 3️⃣ Add environment variables
In **Site Settings → Environment Variables**, add:
```
VITE_TMDB_API_KEY=YOUR_API_KEY_HERE
NODE_VERSION=20
```

### 4️⃣ Add a SPA redirect rule for React Router
In your project’s **public** folder, create a file named `_redirects` with this line:
```
/* /index.html 200
```

### 5️⃣ Deploy 🚀  
After deployment, visit your site and test:
```
https://flixscope.netlify.app/movies/123
```
✅ It should load directly (no 404 errors).

---

## 🧩 Folder Structure

```
src/
  api/          # TMDB endpoints + image helpers
  components/   # UI components (Loader, NotFound, MovieCard, etc.)
  hooks/        # useFetch hook
  routes/       # Page components (PopularList, MovieDetail)
  styles/       # GlobalStyles with theme variables
  App.jsx
  main.jsx
public/
  _redirects    # SPA redirect for Netlify
```

---

## 🧠 Lessons & Highlights

- Built a full multi-page React app from scratch  
- Integrated a real-world API with secure environment variables  
- Practiced reusable hooks and clean component architecture  
- Enhanced accessibility, performance, and responsiveness  
- Managed deployment workflow with Netlify and version control  

---

## 🪄 Future Enhancements

- 🔍 Add movie search functionality  
- ⏩ Pagination or infinite scroll  
- 🧭 Filter by genre or company  
- 💫 Add animations and hover effects  
- 🧱 Implement unit tests for hooks and components  

---

## 💻 Useful Commands

| Command | Description |
|----------|-------------|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the production version |
| `npm run preview` | Preview the production build locally |
| `git add . && git commit -m "message" && git push` | Commit and push changes |

---

## 👩‍💻 Author

**Ulrika Einebrant**  
Frontend Developer  

🌐 [Portfolio](https://ulrikasportfolio.netlify.app/)  
💼 [LinkedIn](https://www.linkedin.com/in/ulrika-einebrant/)  
🐙 [GitHub](https://github.com/UlrikaRakkaBrant)  
🌎 [Live Project – Flixscope](https://flixscope.netlify.app)

---

## 🏁 License

This project was created as part of the **Technigo Bootcamp**.  
You are welcome to use or reference the code for learning purposes.

---
