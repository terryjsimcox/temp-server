// MODULES
const express = require('express');
const cors = require('cors');


// VARIABLES
const app = express();
const PORT = process.env.PORT || 5000

// MIDDLEWARE
app.use(cors())

// ROUTES
app.get('/', (req, res) => {
    res.status(200).send('Temp Server');
});

// APP
app.listen(PORT, () => {console.log(`Server started at https://localhost:${PORT}`)});