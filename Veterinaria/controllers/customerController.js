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

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO persona set ?", [data], (err, rows) => {
      res.redirect("/");
    });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;

  req.getConnection((err, conn) => {
    conn.query("DELETE FROM persona WHERE ID = ?", [id], (err, rows) => {
      res.redirect("/");
    });
  });
};

module.exports = controller;
