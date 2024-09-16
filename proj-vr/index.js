const http = require("http");
const fs = require("fs").promises; // Usando o módulo fs.promises

const server = http.createServer((req, res) => {
	fs.readFile("./index-vr.html")
		.then((data) => {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		})
		.catch((err) => {
			res.writeHead(500, { "Content-Type": "text/plain" });
			res.end("Internal Server Error");
		});
})

server.listen(6000, () => {
	console.log("Server is running on port 6000");
})
