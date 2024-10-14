const mongoose = require('mongoose');

const themeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type_theme: { type: String, required: true },
  name: { type: String, required: true },
  images: { type: [String], required: true },
  category: { type: String, required: true },
  status: { type: Boolean, default: true },
  url_demo: { type: String, required: true },
  price: { type: Number, default: 0 },
  sale_price: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('theme', themeSchema);
