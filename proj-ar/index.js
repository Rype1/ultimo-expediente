const http = require("http");
const fs = require("fs").promises; // Usando o módulo fs.promises

const server = http.createServer((req, res) => {
	fs.readFile("./index-ar.html")
		.then((data) => {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		})
		.catch((err) => {
			res.writeHead(500, { "Content-Type": "text/plain" });
			res.end("Internal Server Error");
		});
})

server.listen(5000, () => {
	console.log("Server is running on port 5000");
})
