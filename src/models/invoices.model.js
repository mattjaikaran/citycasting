// invoices-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const invoices = new Schema({
    custCode: {
      type: String,
      unique: true,
      required: true
    },
    invoiceNumber: {
      type: Number,
      unique: true,
      required: true
    },
    userInfo: {
      name: String,
      phone: String,
      fax: String
    },
    lineItems: [
      {
        weight: Number,
        pieces: Number,
        metal: String,
        styleNumber: String,
        description: String,
        labor: Number,
        laborPC: Number,
        priceDWT: Number,
        lineTotal: Number
      }
    ],
    metalTotal: Number,
    laborTotal: Number,
    otherCharges: Number,
    shippingTotal: Number,
    invoiceTotal: Number,
    goldPrice: Number,
    goldBalance: Number,
    goldUsed: Number,
    newGoldBalance: Number,
    platinumPrice: Number,
    platinumBalance: Number,
    silverPrice: Number,
    silverBalance: Number,
    brassPrice: Number,
    brassBalance: Number,
    createdBy: String,
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      default: 'Pending'
    }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('invoices');
  } catch (e) {
    return mongooseClient.model('invoices', invoices);
  }
};
