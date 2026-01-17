# SaaS Dashboard

## Overview

This project is an implementation of a SaaS dashboard.
The goal is to accurately translate design specs into a responsive, accessible, and performant React application with meaningful motion and microinteractions.

No backend is used. All data is mocked locally to demonstrate UI behavior such as sorting, filtering, pagination, and theming.

---

## Tech Stack

* **React (ES6+)**
* **CSS3** (Flexbox, CSS variables for theming)
* **Framer Motion** (animations & microinteractions)
* **Vite** (fast development & build)
* **React Context / Redux** (theme & UI state)

---

## Features Implemented

* Light & Dark theme support
* Responsive layout (Desktop / Tablet / Mobile)
* Sidebar navigation
* Tables with:

  * Sorting
  * Filtering
  * Searching
  * Pagination
* Smooth animations & microinteractions
* Cross-browser compatibility

---

## Mock Data Strategy

Since no backend/API was provided:

* Static mock data is used (`/src/utils/data.js`)
* Simulates real dashboard behavior
* Designed to be easily replaceable with API data later

---

## Setup & Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/axby1/saas_dashboard.git
cd app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

---

## Deployment

The project is deployed using **github pages**.

https://saasdashboard-jet.vercel.app/


---









