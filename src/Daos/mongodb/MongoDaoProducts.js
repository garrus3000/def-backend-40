
const mongoose = require("mongoose");
const MongoClassContainer = require("../../containers/MongoClassContainer");
const ProductSchema = require("../../config/models/ProductSchema");


class MongoDaoProducts extends MongoClassContainer {
    constructor() {
        super('products', ProductSchema)
    }

    save = async (element) => {
        try {
            element.timestamp = new Date().toISOString();
            element.codigo = Date.now();
            const newElement = new this.collection(element);
            const result = await newElement.save();
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

}

module.exports = MongoDaoProducts;