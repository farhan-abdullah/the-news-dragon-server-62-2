const express = require('express');
const categories = require('./Data/categories.json');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.get('/', (req, res) => {
	res.send('Dragon is running');
});
app.get('/categories', (req, res) => {
	res.send(categories);
});

app.listen(port, () => {
	console.log(`Dragon api is running on port ${port} `);
});
