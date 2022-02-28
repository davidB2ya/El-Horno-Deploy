const { Schema, model } = require('mongoose');

// schema creation for sales
const saleSchema = new Schema(
    {
        client: {
            type: String,
            trim: true
        },
        phone: {
            type: Number,
            unique: true
        },
        namePizza: {
            type: String
        },
        price: {
            type: Number
        },
        ingredents: {
            types: [String]
        },
        address: {
            type: String
        }
    },
    {
        timestamps: true
    }
)
// fixes in userSchema
saleSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// compilation of sales model
const Sales = model('Sales', saleSchema)

module.exports = Sales