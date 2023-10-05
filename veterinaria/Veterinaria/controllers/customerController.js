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
<<<<<<< HEAD:veterinaria/Veterinaria/controllers/customerController.js
console.log(req.body);
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO persona set ?", [data], (err, rows) => {
      console.log(rows);
      res.send("works");
=======
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
>>>>>>> 454dc7dc16e5fa090de64f476c2a61427997e007:Veterinaria/controllers/customerController.js
    });
  });
};

module.exports = controller;
