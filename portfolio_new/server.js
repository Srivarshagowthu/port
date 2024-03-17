const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/protfolio.html');
});
app.listen(port, () => {
    console.log(`portfolio app listening at http://localhost:${port}`);
});