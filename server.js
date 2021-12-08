const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "build")));

// Fixes react router issue https://ui.dev/react-router-cannot-get-url-refresh/
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'), function (err) {
      if (err) {
        console.error(err)
      }
    })
  })

app.listen(port, () => console.log(`Server listening on port ${port}`));