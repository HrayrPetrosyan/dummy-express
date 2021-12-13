const express = require('express');
const cors = require('cors');
const data = require('./data.json');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	let body = data;

	console.log(req.query)

	if (req.query.search) {
		body = body.filter((item) => item.title.startsWith(req.query.search));
	}

	if (req.query.offset) {
		const start = Number(req.query.start) || 0;
		body = body.slice(start, start + Number(req.query.offset));
	}

	res.status(200).json(body)
})

app.listen(5000, () => {
	console.log('server is up')
})