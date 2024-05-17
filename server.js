require("./settings");
const http = require("http");
const app = require("./index");
const PORTHOST = port || 3000;

http.createServer(app).listen(PORTHOST, () => {
    console.log(`
        █████╗ ██╗     ██████╗ ██╗███████╗
       ██╔══██╗██║     ██╔══██╗██║██╔════╝
       ███████║██║     ██████╔╝██║███████╗
       ██╔══██║██║     ██╔═══╝ ██║╚════██║
       ██║  ██║███████╗██║     ██║███████║
       ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝ V2 
			                          @alipje29
								 
Server running on http://localhost:` + PORTHOST)
console.log(`Hello ${creator}`)
})
