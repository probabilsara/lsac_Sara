const express = require('express');
const app = express();
const port = 3000;

// Exemple de rețete cu ratinguri generate
const recipes = [
  { id: 1, name: "Pizza Margherita", rating: 4.8 },
  { id: 2, name: "Spaghetti Carbonara", rating: 4.6 },
  { id: 3, name: "Tiramisu", rating: 4.9 },
  { id: 4, name: "Lasagna", rating: 4.3 },
  { id: 5, name: "Risotto", rating: 4.7 }
];

// Endpoint pentru a obține primele 3 rețete cu ratingul cel mai mare
app.get('/top-recipes', (req, res) => {
  // Sortare descrescătoare după rating
  const topRecipes = recipes
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3); // Selectăm primele 3

  res.json(topRecipes); // Răspuns JSON
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});