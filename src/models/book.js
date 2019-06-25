const mongoose = require('mongoose');
const paginate = require('mongoose-paginate')

const schemaBook = mongoose.Schema({
	"livro" : { type: String, required: true },
	"autor" : { type: String, required: true },
	"imagem" : { type: String, required: true },
	"detalhes": {
		"paginas" : { type: Number, required: true },
		"idioma" : { type: String, required: true },
		"editora" : { type: String, required: true },
		"nota" : { type: String },
		"serie" : { type: String }
	},
	"status" : { type: String, required: true },
	"lido" : { type: String, required: true },
	"genero" : { type: Array},
	"sinopse" : { type: String, required: true }
});
mongoose.plugin(paginate);
mongoose.model('book', schemaBook);