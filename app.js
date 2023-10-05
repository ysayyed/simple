const http = require('http')
http.createServer((req, res) => {
	res.write("Simple EC2 instance")
	res.end()
}).listen(80, () => {
	console.log("Listening on http://127.0.0.1:80")
})