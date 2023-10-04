const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM persona", (err, rows) => {
      if (err) {
        res.json(err);
      }
      res.render("personas.ejs", {
        data: rows,
      });
    });
  });
};

module.exports = controller;
