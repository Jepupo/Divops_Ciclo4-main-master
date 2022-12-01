import mongoose from 'mongoose';

const ventaSchema = new mongoose.Schema({
    fecha: {
        type: 'string',
        required: false,
        trim: true
    },
    valor: {
        type: Number,
        required: false,
        trim: true
    }
})

export default mongoose.model('Venta', ventaSchema);