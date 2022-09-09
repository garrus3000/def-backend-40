const mongoose = require("mongoose");
const MongoClassContainer = require("../../containers/MongoClassContainer");
const UsuarioSchema = require("../../config/models/UsuarioSchema");

class MongoDaoUsers extends MongoClassContainer {

    constructor() {
        super('usuarios', UsuarioSchema)
    }

    getByEmail = async (email) => {
        try {
            const emailUser = await this.collection.find({email});
            return emailUser;
        } catch (error) {
            throw new Error(error)
        }
    };
}

module.exports = MongoDaoUsers;