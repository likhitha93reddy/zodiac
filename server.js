const express = require('express');

const app = express();
app.use(express.static(__dirname + '/client'));

const port = 3000;

app.listen(port, () => {
	console.log('Server is running nodemon on the port'+port);
});