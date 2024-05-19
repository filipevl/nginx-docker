const http = require("http");
const mysql = require("mysql");

// Validação das variáveis de ambiente
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, PORT = 3000 } = process.env;

if (!DB_HOST || !DB_USER || !DB_PASSWORD || !DB_NAME) {
	console.error("Por favor, defina todas as variáveis de ambiente: DB_HOST, DB_USER, DB_PASSWORD, DB_NAME.");
	process.exit(1);
}

const config = {
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
	if (err) {
		console.error("Erro ao conectar no banco de dados:", err);
		process.exit(1);
	}
	console.log("Conectado ao servidor MySQL.");
});

const requestHandler = (req, res) => {
	const name = "Full Cycle";
	connection.query("INSERT INTO people(name) VALUES (?)", [name], (err) => {
		if (err) {
			console.error("Erro ao inserir no banco de dados:", err);
			res.writeHead(500, { "Content-Type": "text/plain" });
			res.end("Erro ao inserir no banco de dados");
			return;
		}

		connection.query("SELECT name FROM people", (err, results) => {
			if (err) {
				console.error("Erro ao consultar o banco de dados:", err);
				res.writeHead(500, { "Content-Type": "text/plain" });
				res.end("Erro ao consultar o banco de dados");
				return;
			}

			const names = results.map((row) => row.name).join("<br>");
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(`<h1>Full Cycle Rocks!</h1><br>${names}`);
		});
	});
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
});
