let express = require("express");

let routes = express.Router();

routes.get("/", (req, res) => {

	res.statusCode = 200;

	res.setHeader("Content-Type", "application/json");

	res.json({

		users: [{

			name: "Guilherme",

			age: 27

		}]

	});
	
});

routes.get("/admin", (req, res) => {

	res.statusCode = 200;

	res.setHeader("Content-Type", "application/json");

	res.json({

		users: [{

			name: "Guilherme",

			admin: true,

			age: 27

		}]

	});
	
});

module.exports = routes;