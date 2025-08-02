# Claimo – Dynamic Leaderboard System

Claimo is a dynamic leaderboard system built with **Node.js**, **Express**, **MongoDB**, and **ReactJS**. Users can claim random points (1–10) for themselves, and the leaderboard updates in real-time based on total points. The app also stores point claim history for each user.

### Live Demo
[View Claimo](https://claimo.netlify.app/)

## Features

- Display list of 10 default users
- Add new users from frontend (stored in MongoDB)
- Claim random points (1–10) per user
- Real-time dynamic leaderboard (sorted by total points)
- Claim history collection saved in MongoDB

## Tech Stack

- **Frontend:** ReactJS (Vite)
- **Backend:** Node.js + Express
- **Database:** MongoDB

## Screenshot

<img width="1919" height="910" alt="image" src="https://github.com/user-attachments/assets/c66066af-06d5-43ad-af81-de95276556a7" />

## Installation

### Backend

```bash
git clone https://github.com/Yash-Atkari/Claimo.git
cd backend
npm install
node server.js
```
Make sure to create a `.env` file in the backend root:
```bash
PORT=5000
ATLASDB_URL=your_mongodb_connection_string
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Set up your `.env` in the frontend root:
```bash
VITE_API_BASE=http://localhost:5000
```
Or use your deployed backend URL instead of localhost.
