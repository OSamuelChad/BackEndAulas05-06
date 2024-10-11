module.exports = {
    type: "Object",
    properties: {
      nome: {type: "String"},
      descrição: {type: "String"},
      preço: {type: "Number"},
    },
    required: ["nome", "descrição", "preço"],
    additionalProperties: false,
  }