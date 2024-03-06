const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/biblioteca", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

const LibroSchhema = new mongoose.Schema ({
    titulo: String,
    modelo: String
}, {collection: 'libros'})

const Libro = mongoose.model('Libro', LibroSchhema);

module.exports = Libro;