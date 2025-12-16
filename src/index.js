const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Route de test
app.get('/', (req, res) => {
  res.json({
    message: 'CI/CD1 🚀'
  });
});



// Démarrage serveur
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
