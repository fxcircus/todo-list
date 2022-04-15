const { Schema, model } = require("./connection")

const itemSchema = Schema ({
    text: {
        required: true,
        type: String
    },
    status: {
        type: String,
        required: true,
        default: 'Ice-Box',
        enum: ['Ice-Box', 'In-Progress', 'Completed']
    },
},
{
    timestamps: true
}
)

module.exports = model('Item', itemSchema)