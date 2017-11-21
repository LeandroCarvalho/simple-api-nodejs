let mongoose =  require('mongoose')
let Schema = mongoose.Schema

const SCHEMA_VERSION = 1;

let product = Schema({
    schemaVersion : { type: Number, default: SCHEMA_VERSION },
    name : {
        type: String,
        required: true
    },
    price : {
       type: Number,
       required: true
    },
    dateCriation : {
      type: Date,
      required: true
    },
    dateUpdate : Date,
    cotegorieId: Schema.Types.ObjectId,
});

var schema = Schema({
    name: {
        type: String,
        required: true
    },
    products: [product]

});