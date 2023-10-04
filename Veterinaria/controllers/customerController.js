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
console.log(req.body);
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO persona set ?", [data], (err, rows) => {
      console.log(rows);
      res.send("works");
    });
  });
};

module.exports = controller;
