use autovehicule_toyota // use or create db
db // confirm usage of db
db.createCollection("vanzari") // create collection vanzari
db.createCollection("autovehicule") // create collection autovehicule
db.createCollection("angajati") // create collection angajati



// insert multiple rows into the vanzarri collection
db.vanzari.insertMany ([
    {
        _id: 5246,
        data_ora: ISODate("2024-04-30T15:34:00Z"),
        tip_plata: "Integral",
        reducere: null,
        serie_sasiu_aul: "JSHA4582163542546",
        client: {
            cod: 57962,
            persoana: "fizica",
            nume: "Dubois",
            prenume: "Camille",
            email: "camille.dubois@yahoo.fr",
            adresa: "16 Rue de la Monnaie",
            nr_telefon: "+33654321098",
            cod_postal: 10000,
            oras: {
                cod: "TRO",
                denumire: "Troyes",
                departament: {
                    numar: 10,
                    denumire: "Aube"
                }
            }
        }
    },
    {
        _id: 9863,
        data_ora: ISODate("2024-04-29T13:45:00Z"),
        tip_plata: "Rate",
        reducere: null,
        serie_sasiu_aul: "ASDW5496825643520",
        client: {
            cod: 12567,
            persoana: "juridica",
            nume: "Martin",
            prenume: "Lea",
            email: "martin.lea@gmail.com",
            adresa: "1 Place de la Cathedrale",
            nr_telefon: "+33187654321",
            cod_postal: 68000,
            oras: {
                cod: "COL",
                denumire: "Colmar",
                departament: {
                    numar: 67,
                    denumire: "Haut-Rhin"
                }
            }
        }
    },
    {
        _id: 7852,
        data_ora: ISODate("2023-07-15T14:08:00Z"),
        tip_plata: "Rate",
        reducere: 0.1,
        serie_sasiu_aul: "ODUE4592635978421",
        client: {
            cod: 56324,
            persoana: "juridica",
            nume: "Leroy",
            prenume: "Antoine",
            email: "leroyantoine@yahoo.fr",
            adresa: "2 Rue des Hallebardes",
            nr_telefon: "+33921436587",
            cod_postal: 67000,
            oras: {
                cod: "STRAS",
                denumire: "Strasbourg",
                departament: {
                    numar: 68,
                    denumire: "Bas-Rhin",
                }
            }
        }
    },
    {
        _id: 9052,
        data_ora: ISODate("2023-03-14T15:09:00Z"),
        tip_plata: "Integral",
        reducere: null,
        serie_sasiu_aul: "AOSD1245649865320",
        client: {
            cod: 59135,
            persoana: "fizica",
            nume: "Dubois",
            prenume: "Charlotte",
            email: "charl_dubois_94@outlook.com",
            adresa: "26 Place Ducale",
            nr_telefon: "+33298765432",
            cod_postal: 8000,
            oras: {
                cod: "CHARL",
                denumire: "Charleville-Mezieres",
                departament: {
                    numar: 8,
                    denumire: "Ardennes",
                }

            }
        }
    },
    {
        _id: 1002,
        data_ora: ISODate("2023-12-21T18:00:00Z"),
        tip_plata: "Rate",
        reducere: 0.05,
        serie_sasiu_aul: "AORJ5246358154692",
        client: {
            cod: 68523,
            persoana: "fizica",
            nume: "Rousseau",
            prenume: "Manon",
            email: "manonr.ouss@mail.com",
            adresa: "9 Rue des Etats-Unis",
            nr_telefon: "+33164857925",
            cod_postal: 88000,
            oras: {
                cod: "EPIN",
                denumire: "Epinal",
                departament: {
                    numar: 88,
                    denumire: "Vosges",
                }
            }
        }
    }

]);



//insert multiple rows into the autovehicule collection
db.autovehicule.insertMany ([
    {
        serie_sasiu: "JSHA4582163542546",
        model_auto: "Corolla",
        an_productie: 2019,
        echipare: "Exclusive",
        pret_vanzare: 25000,
        culoare: "Blueprint",
        transmisie: "M",
        putere_motor: 132,
        cuplu: 160,
        dim_anvelope: "205/55 R16",
        tip: "Sedan",
        autonomie: 520,
        capacitate_baterie: null,
        consum_mediu: 6.5,
        motorizare: 1.6,
        indice_euro: 6,
        tip_carburant: "Benzina",
        reprezentanta: {
            cod: "ADS",
            denumire: "Ardennes Motors",
            adresa: "46 Avenue des Champs",
            cod_postal: 08000,
            nr_telefon: "+33354956283"
        }
    },
    {
        serie_sasiu: "ASDW5496825643520",
        model_auto: "Yaris",
        an_productie: 2020,
        echipare: "Dynamic",
        pret_vanzare: 32500,
        culoare: "Ruby Flare Pearl",
        transmisie: "A",
        putere_motor: 116,
        cuplu: 120,
        dim_anvelope: "195/50 R16",
        tip: "Hatchback",
        autonomie: 800,
        capacitate_baterie: null,
        consum_mediu: 6.5,
        motorizare: 1.5,
        indice_euro: 6,
        tip_carburant: "Benzina",
        reprezentanta: {
            cod: "MAO",
            denumire: "Marne Auto",
            adresa: "46 Avenue des Champs",
            cod_postal: 080000,
            nr_telefon: "+33356854261"
        }
    },
    {
        serie_sasiu: "ODUE4592635978421",
        model_auto: "RAV4",
        an_productie: 2021,
        echipare: "Active",
        pret_vanzare: 35000,
        culoare: "Lunar Rock",
        transmisie: "A",
        putere_motor: 218,
        cuplu: 221,
        dim_anvelope: "235/55 R19",
        tip: "SUV",
        autonomie: 1000,
        capacitate_baterie: 2.5,
        consum_mediu: 5,
        motorizare: 2.5,
        indice_euro: 6,
        tip_carburant: "Benzina",
        reprezentanta: {
            cod: "MMR",
            denumire: "Meurthe Motors",
            adresa: "21 Boulevard des Lilas",
            cod_postal: 52000,
            nr_telefon: "+33365210524"
        }
    },
    {
        serie_sasiu: "AOSD1245649865320",
        model_auto: "bZ4X",
        an_productie: 2023,
        echipare: "Exclusive",
        pret_vanzare: 45000,
        culoare: "Super White",
        transmisie: "A",
        putere_motor: 201,
        cuplu: 220,
        dim_anvelope: "225/60 R17",
        tip: "SUV",
        autonomie: 300,
        capacitate_baterie: 71.4,
        consum_mediu: null,
        motorizare: null,
        indice_euro: null,
        tip_carburant: null,
        reprezentanta: {
            cod: "MAS",
            denumire: "Meuse Automobiles",
            adresa: "78 Rue des Chenes",
            cod_postal: 55000,
            nr_telefon: "+33326512403"
        }
    },
    {
        serie_sasiu: "AORJ5246358154692",
        model_auto: "C-HR",
        an_productie: 2023,
        echipare: "Active",
        pret_vanzare: 33000,
        culoare: "Supersonic Red",
        transmisie: "M",
        putere_motor: 120,
        cuplu: 250,
        dim_anvelope: "215/60 R17",
        tip: "Crossover",
        autonomie: 700,
        capacitate_baterie: null,
        consum_mediu: 5,
        motorizare: 1.4,
        indice_euro: 6,
        tip_carburant: "Motorina",
        reprezentanta: {
            cod: "MAR",
            denumire: "Moselle Auto Center",
            adresa: "34 Rue des Roses",
            cod_postal: 570000,
            nr_telefon: "+33362542102"
        }
    }
]);



// insert multiple rows into the angajati collection
db.angajati.insertMany ([
    {
        _id: 625,
        nume: "Muller",
        prenume: "Thomas",
        salar: 4800,
        tip_angajare: "Fulltime",
        bonus: 600,
        cod_rpa: "MAO",
        cod_ddr: 3515
    },
    {
        _id: 152,
        nume: "Dupont",
        prenume: "Elise",
        salar: 1500,
        tip_angajare: "Parttime",
        bonus: null,
        cod_rpa: "ADS",
        cod_ddr: 2514
    },
    {
        _id: 854,
        nume: "Wagner",
        prenume: "Julia",
        salar: 5200,
        tip_angajare: "Fulltime",
        bonus: 800,
        cod_rpa: "MAS",
        cod_ddr: 6951
    },
    {
        _id: 521,
        nume: "Lefevre",
        prenume: "Charlotte",
        salar: 4700,
        tip_angajare: "Fulltime",
        bonus: 600,
        cod_rpa: "MMR",
        cod_ddr: 5481
    },
    {
        _id: 458,
        nume: "Dubois",
        prenume: "Alexandre",
        salar: 4500,
        tip_angajare: "Fulltime",
        bonus: 200,
        cod_rpa: "MAR",
        cod_ddr: 5481
    },
    {
        _id: 3515,
        nume: "Zimmermann",
        prenume: "Lucan",
        salar: 2500,
        tip_angajare: "Parttime",
        bonus: null,
        cod_rpa: "ATA",
        cod_ddr: null
    },
    {
        _id: 2514,
        nume: "Lemoine",
        prenume: "Emille",
        salar: 7500,
        tip_angajare: "Fulltime",
        bonus: 1500,
        cod_rpa: "MAO",
        cod_ddr: null
    },
    {
        _id: 6951,
        nume: "Fischer",
        prenume: "Lara",
        salar: 8600,
        tip_angajare: "Fulltime",
        bonus: null,
        cod_rpa: "ADS",
        cod_ddr: null
    },
    {
        _id: 5481,
        nume: "Berger",
        prenume: "Mathieu",
        salar: 9000,
        tip_angajare: "Fulltime",
        bonus: null,
        cod_rpa: "MAS",
        cod_ddr: null
    },
]);



// delete employee with id 854
db.angajati.deleteOne({ _id: 854 });

// check that deletion was made
db.angajati.find({ _id: 854 });



// for employee 625, change their salary by 5000 and raise their bonus by 10%
db.angajati.updateOne(
  { _id: 625 }, // filter condition
  {
    $set: { salar: 5000 }, // set the new salary
    $mul: { bonus: 1.1 }   // increase the bonus by 10%
  }
);

// check the changes
db.angajati.find({ _id: 625 });



// compund index for model_auto and putere_motor
// organizez them together in order to optimize searches involving both fields
// can be used for queries that filter or sort by model_auto OR by model_auto and putere_motor
db.autovehicule.createIndex({ model_auto: 1, putere_motor: 1 });



// QUERIES

/* 1.
* sort vehicles by their motor type (hybrid, electric, neither)
* for each category, display the number or cars in the inventory
*/
db.vanzari.aggregate([ // start aggregation on the vanzari collection
  {
    $lookup: { // joins the vanzari and the autovehicule collections
      from: "autovehicule", // collection to join (~fk relationship)
      localField: "serie_sasiu_aul", // field in vanzari to be matched (~pk)
      foreignField: "serie_sasiu", // field in autovehicule to match (~fk)
      as: "car_details" // array to store matched documents from autovehicule
    }
  },
  { $unwind: "$car_details" }, // split car_details into individual documents
  {
    $addFields: { // add new field to each document based on conditions
      car_type: { // field name
        $switch: {
          branches: [ // cases
            {
              case: { // case 1: check if the car is hybrid
                $and: [
                  { $ne: ["$car_details.tip_carburant", null] },
                  { $ne: ["$car_details.capacitate_baterie", null] }
                ]
              },
              then: "Hybrid"
            },
            {
              case: { // case 2: check if the car is electric
                $eq: ["$car_details.tip_carburant", null] },
              then: "Electric"
            },
            {
              case: { // case 3: car is neither
                $and: [
                  { $ne: ["$car_details.tip_carburant", null] },
                  { $eq: ["$car_details.capacitate_baterie", null] }
                ]
              },
              then: "Neither"
            }
          ],
          default: "Unknown"
        }
      }
    }
  },
  {
    $group: { // group the document by car_type
      _id: "$car_type",
      total_sales: { $sum: 1 } // count numbers of document in each group
    }
  },
  { $sort: { total_sales: -1 } } // sort results, display in descending order
]);


/* 2.
* display top 3 biggest sales
* display the sold car models and their price for each
*/
db.vanzari.aggregate([ // aggredate on vanzari collection
  {
    $lookup: { // join vanzari and autovehicule
      from: "autovehicule", // collection to join with
      localField: "serie_sasiu_aul", // field in vanzari to match
      foreignField: "serie_sasiu", // field in autovehicule to match
      as: "car_details" // array to store matched documents
    }
  },
  { $unwind: "$car_details" }, // split car_details into individual documents
  { $sort: { "car_details.pret_vanzare": -1 } }, // sort by car price in descending order
  { $limit: 3 }, // only get the first 3 sales
  {
    $project: { // choose the fields to be included in the final result
      _id: 1,
      tip_plata: 1,
      "car_details.model_auto": 1,
      "car_details.pret_vanzare": 1
    }
  }
]);



/* 3.
* sort vehicles by tip_carburant
* display the quantity of each
*/
db.autovehicule.aggregate([ // aggregate autovehicule
  {
      $group: { // group documents by tip_carburant
          _id: "$tip_carburant",
          total_cars: { $sum: 1 } // count the number of cars in each fuel type (add 1 for each one found)
      }
  },
  { $sort: { total_cars: -1 } } // display the grouped results in descending order
]);



/* 4.
* display the top 3 employees, based on their bonus
*/
db.angajati.find({
    bonus: {$ne: null} // only get the employees with a bonus
})
    .sort({bonus: -1}) // order results by bonus in descending order
    .limit(3) // only display the first 3
    .pretty();



/* 4.
* dislay all vehicles of a certain model
* display them in descending order by their engine power
*/
db.autovehicule.find(
  { model_auto: "RAV4" }, // only select documents where model_auto is RAV4
  {
      model_auto: 1, // include model_audo
      putere_motor: 1, // include putere_moror
      serie_sasiu: 1, _id: 0 } // include serie_sasiu
).sort({ putere_motor: -1 }); // display them in descending order

// as i need more than 1 car of this model to test the functionality, i edited a car to make it of RAV 4 model
db.autovehicule.updateOne(
  { serie_sasiu: "ASDW5496825643520" }, // match the specific VIN
  { $set: { model_auto: "RAV4" } } // set the model to RAV4
);