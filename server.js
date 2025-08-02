// const express = require('express') ;

// const app = express() ; 
// const PORT = '3000' ; 

// app.get("/", (req, res) => {
//   res.send("Server is running ✅");
// });

// app.listen(PORT , () => {
//      console.log(`🚀 Server is running on http://localhost:${PORT}`);
// })  ;


// server.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

module.exports = app; // ✅ important for Vercel

