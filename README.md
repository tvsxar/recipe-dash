# Recipe Dash

A recipe browsing application built with **Vue 3** and **Vuex**. The app allows users to search for recipes, filter by category, and view detailed recipe information including ingredients, instructions, and YouTube videos.
The main focus of the project is **search and category filtering, state management with Vuex**, and a clean, responsive UI.

---

## Table of Contents

- [Description](#description)
- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies & Stack Explanation](#technologies--stack-explanation)
- [Architecture & Flow](#architecture--flow)
- [Installation & Run](#installation--run)
- [Project Structure](#project-structure)
- [Author](#author)

---

## Description

Recipe Dash allows users to:

- Browse random recipes fetched from TheMealDB API
- Search recipes by name
- Filter recipes by category
- View recipe details including ingredients, instructions, and YouTube video
- Experience a responsive, modern UI

Frontend is built with **Vue 3** and styled with **Tailwind CSS**.
State is managed with **Vuex**, and external data is fetched from **TheMealDB API**.

---

## Live Demo

Try it online via our [Live Demo](https://recipe-dash-vue-frontend.onrender.com)!

---

## Features

- Search recipes by name
- Filter recipes by category
- Display random recipes on the homepage
- Show detailed recipe information:
  1. Ingredients and measurements
  2. Instructions
  3. Optional YouTube video
- Responsive UI with adaptive layouts
- Loading states and empty states handling
- State management via Vuex

---

## Technologies & Stack Explanation

- **Vue 3** — frontend framework
- **ReaVuexct** — global state management
- **Vue Router** — navigation between pages
- **Tailwind CSS** — utility-first styling
- **TheMealDB API** — external recipe data source
- **REST API calls** — fetched from the client-side

---

## Architecture & Flow

_Home / Search_

1. User visits the homepage
2. Random recipes and categories are fetched via Vuex actions
3. User can search recipes or select a category
4. Search results or filtered recipes are displayed dynamically

_Recipe Details_

1. User clicks on a recipe card
2. Frontend navigates to /about/:id route
3. Recipe details are fetched via Vuex action fetchRecipeDetails
4. Ingredients, instructions, and YouTube video are displayed

---

## Installation & Run

### Setup

```bash
npm install
npm run dev
```

Your app will be available at:
http://localhost:5173

---

## Project Structure

```
recipe-app/
├─ src/
│  ├─ components/
│  │  ├─ RecipeCard.vue
│  │  ├─ RecipesGrid.vue
│  │  ├─ Navbar.vue
│  │  ├─ Footer.vue
│  │  ├─ RecipeDetails.vue
│  │  ├─ RecipeHeader.vue
│  │  ├─ RecipeButton.vue
│  │  ├─ CategoriesGrid.vue
│  │  ├─ SearchBar.vue
│  │  ├─ EmptyState.vue
│  │  └─ Loading.vue
│  ├─ views/
│  │  ├─ Home.vue
│  │  ├─ Search.vue
│  │  └─ About.vue
│  ├─ router/
│  │  └─ index.js
│  ├─ store/
│  │  ├─ actions.js
│  │  ├─ mutations.js
│  │  ├─ state.js
│  │  └─ index.js
│  ├─ App.vue
│  └─ main.js
├─ public/
├─ package.json
└─ vite.config.js
```

---

## Author

**Taras Poiatsyka**\
[GitHub](https://github.com/tvsxar)
