exports.definition = {
	config: {
		columns: {
		    "nome": "text",
		    "foto1": "text",
		    "foto2": "text",
		    "qntFotos": "integer",
		    "favorito": "integer",
		    "categorias": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "contato"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};