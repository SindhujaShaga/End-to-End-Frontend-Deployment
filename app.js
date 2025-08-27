
// app.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/* Next steps:
1. Add a 'public' folder in the same directory as app.js.
2. Inside the 'public' folder, create two files:
   - index.html (frontend HTML file).
   - styles.css (for styling).
3. Add a Dockerfile to containerize the application.
   - I will prepare all the necessary files and provide detailed instructions.
*/

