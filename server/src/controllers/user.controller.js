const db = require('../config/database')

exports.createUser = async (req, res) => {
    const { name } = req.body;

    try {

        const { rows } = await db.query(
            "INSERT INTO datauser (name) VALUES ($1)",
            [name]
        );

        res.status(201).send({
            message: "user added successfully!",
            body: {
                user: { name },
            },
        });

    } catch (error) {
        console.error('createUser', error);
        res.status(500).send({
            message: "Ocorreu um erro."
        });
    }
};