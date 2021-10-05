db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $exists: true } },
      { litrosCombustivel: { $lt: 600 } },
      { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
    ],    
  },
  {
    vooId: true,
    "empresa.nome": true,
    litrosCombustivel: true,
    _id: false,
  },
);
