const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myconnection");

const conexion = express();

// importandp rutas
const customerRoutes = require("./routes/customer.routes.js");

// configuracion
conexion.set("port", process.env.PORT || 3000);
conexion.set("views", path.join(__dirname, "views"));
conexion.set("view engine", "ejs");

// middlewares
conexion.use(morgan("dev"));
conexion.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "",
      port: 3306,
      database: "bdpersona",
    },
    "single"
  )
);

// routes
conexion.use('/', customerRoutes);

// archivos estaticos
conexion.use(express.static(path.join(__dirname, 'public')));

// iniciando el servidor
conexion.listen(conexion.get("port"), () => {
  console.log("Server on port 3000");
});
