const latan = "LATAM AIRLINES BRASIL";

db.voos.count(
  {
    "empresa.nome": latan,
    natureza: "Doméstica",
  },
);

db.resumoVoos.insertOne(
  { 
    empresa: latan,
    totalVoosDomesticos: 20026,
  },
);

db.resumoVoos.find(
  {
    empresa: latan,
  },
  { 
    empresa: true,
    totalVoosDomesticos: true,
    _id: false,
  },
);
