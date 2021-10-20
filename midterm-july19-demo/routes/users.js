/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/:id/widgets", (req, res) => {
    const queryText = {
      text: `SELECT users.id AS user_id, users.name AS username, widgets.id AS widget_id, widgets.name AS widget_name
              FROM users
              INNER JOIN widgets
              ON users.id = widgets.user_id
              WHERE users.id = $1`,
      values: [req.params.id],
    };

    db.query(queryText)
      .then((data) => {
        console.log("data", data);
        res.json(data.rows);
      })
      .catch((err) => console.log({ err: err.message }));
  });

  return router;
};
