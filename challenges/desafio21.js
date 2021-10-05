db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $exists: true } },
      { litrosCombustivel: { $gte: 1000 } },
    ],    
  },
  {
    vooId: true,
    _id: false,
  },
);