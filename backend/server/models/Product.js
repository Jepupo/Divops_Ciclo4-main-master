import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    nombre: {
        type: 'string',
        required: false,
        trim: true
    },
    precio: {
        type: Number,
        required: false,
        trim: true
    },
    cantidad: {
        type: Number,
        required: false,
        trim: true
    }
})

export default mongoose.model('Product', productSchema);