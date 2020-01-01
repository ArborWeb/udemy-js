module.exports = app => {

	app.get("/users", (req, res) => {

		res.statusCode = 200;

		res.setHeader("Content-Type", "application/json");

		res.json({

			users: [{

				name: "Guilherme",

				age: 27

			}]

		});
		
	});

	app.get("/users/admin", (req, res) => {

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

};