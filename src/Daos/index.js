

require("dotenv").config()

let productos
let carritos
let usuarios
let mensajes

switch (process.env.DB_HOST) {
	case "mongodb":
		const MongoDaoCarts = require("./mongodb/MongoDaoCarts");
		const MongoDaoProducts = require("./mongodb/MongoDaoProducts");
		const MongoDaoUsers = require("./mongodb/MongoDaoUsers");
		const MongoDaoMessages = require("./mongodb/MongoDaoMessages")

		carritos = new MongoDaoCarts();
		productos = new MongoDaoProducts();
		usuarios = new MongoDaoUsers();
		mensajes = new MongoDaoMessages();
		break;

	default:
		throw new Error("No se ha definido una conexión a la base de datos");
		break;
}

const productsDao = productos;
const cartDao = carritos;
const userDao = usuarios;
const messageDao = mensajes;

module.exports = { productsDao, cartDao, userDao, messageDao };