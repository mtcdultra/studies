const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    if (req.url === "/produto") {
      res.end(JSON.stringify({ message: "Rota do produto" }));
    }

    if (req.url === "/usuario") {
      res.end(JSON.stringify({ message: "Rota do usuário" }));
    }

    res.end(JSON.stringify({ message: "Rota não encontrada" }));
  })
  .listen(4001, () => console.log("Servidor está rodando na porta 4001"));
