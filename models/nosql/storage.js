const mongoose = require("mongoose")

const StorageScheme = new mongoose.Schema(
    {
        url: {
            type: String
        },
        filename: {
            type: Number
        },

    },
    {// se cree los campos marcas tiempo 
        timestamps: true,
        versionKey: false,

    }
);

module.exports = mongoose.model("storages", StorageScheme)

//____ nombre de la collecion 