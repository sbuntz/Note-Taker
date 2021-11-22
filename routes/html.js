
// Dependencies
const path = require('path');
const router = require('express').Router();

//app.METHOD(PATH, HANDLER (HANDLER is the function executed when the route is matched.))
//connecting to index and notes html
// GET Route for notes page
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// GET Route for homepage
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// If no match
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = router;