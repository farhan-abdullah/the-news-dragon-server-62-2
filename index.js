const express = require('express');
const categories = require('./Data/categories.json');
const news = require('./Data/news.json');
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
app.get('/categories/:id', (req, res) => {
	const id1 = parseInt(req.params.id);
	if (id1 == 0) {
		res.send(news);
	} else {
		const selectedCategory = news.filter((n) => parseInt(n.category_id) === id1);
		res.send(selectedCategory);
	}
});
app.get('/news', (req, res) => {
	res.send(news);
});
app.get('/news/:id', (req, res) => {
	const id1 = req.params.id;
	const selectedNews = news.find((n) => n._id === id1);
	res.send(selectedNews);
});

app.listen(port, () => {
	console.log(`Dragon api is running on port ${port} `);
});
