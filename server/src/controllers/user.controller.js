const db = require("../config/database");


exports.createUser = async (req, res) => {
  const { name } = req.body;
  try {
    const { rows } = await db.query('INSERT INTO datauser (name) VALUES ($1)',
      [name])
    res.status(201).send(rows)
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'error'
    })
  }
}
exports.selectAllUsers = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT userid,name from datauser')
    res.status(200).send(rows)
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'error'
    })
  }
}
exports.listUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const { rows } = await db.query('SELECT userid, name from datauser WHERE userid = $1', [id])
    res.status(201).send({
      message: 'listado',
      rows
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'error' })
  }

}

exports.updateUserById = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const { rows } = await db.query('UPDATE datauser set name = $1 WHERE userid = $2',
      [name, id])
    res.status(201).send({
      message: 'update',
      body: {
        id,
        name
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'error'
    })
  }
}

exports.deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE from datauser WHERE userid = $1', [id])
    res.status(201).send({
      message: 'deletado'
    })
  } catch (error) {
    console.log(error);
  }
}