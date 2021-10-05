db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $exists: true } },
      { litrosCombustivel: { $not: { $gt: 1000 } } },
    ],    
  },
  {
    vooId: true,
    litrosCombustivel: true,
    _id: false,
  },
);