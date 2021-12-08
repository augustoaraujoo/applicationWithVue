const db = require("../config/database");

// ==> Método responsável por criar um novo 'user':
exports.createUser = async (req, res) => {
  const { name } = req.body;

  try {
    const { rows } = await db.query(
      "INSERT INTO datauser (name) VALUES ($1)",
      [name]
    );
    res.status(201).send({
      message: "Employee added successfully!",
      body: {
        employee: { name },
      },
    });
  } catch (error) {
    console.error('createUser', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

exports.selectAllUsers = async (req, res) => {
  try {
    const { rows } = await db.query(
      `SELECT userid,name FROM datauser ORDER BY name asc`
    );
    res.status(200).send({
      message: 'success',
      rows
    })
  } catch (error) {
    console.log('list all users', error);
    res.status(500).send({
      message: 'ocorreu um erro'
    })
  }
}

exports.updateUserById = async (req, res) => {
  const { id } = req.params
  const { name } = req.body
  try {
    const { rows } = await db.query(`
      UPDATE datauser SET name = $1 WHERE userid = $2
    `, [name, id]
    )
    res.status(200).send({
      message: 'update',
      rows: {
        id,
        name,
      },

    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'ocorreu um erro'
    })
  }

}


exports.listUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(`SELECT userid,name FROM datauser WHERE userid = $1`, [id])
    if (!rows.length) {
      throw 'user not found'
    }
    res.status(200).send({
      message: 'list by id',
      rows
    })
  } catch (error) {
    console.log(error);
    if (error == 'user not found') {
      res.status(400).send({
        message: 'user not found'
      })
    } else {
      res.status(500).send({
        message: 'erro'
      })
    }
  }
}

exports.deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query(
      `DELETE FROM datauser WHERE userid = $1`,
      [id]
    )
    res.status(200).send({
      message: 'user deletado'
    })
  } catch (error) {
    console.log(merror);
    res.status(500).send({
      message: 'ocorreu um erro'
    })
  }
}