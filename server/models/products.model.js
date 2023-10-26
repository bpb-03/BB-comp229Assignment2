import mongoose from 'mongoose'
//const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
 name: {
 type: String,
 trim: true,
 required: 'Name is required'
 },

 description: {
 type: String,
 trim: true,
 },

 price: {
 type: Number,
 required: 'Price is required'
 },

 quantity: {
 type: Number, 
 },

 category: {
 type: String,
 required: 'Password is required'
}});

const CategoriesSchema = new mongoose.Schema({
  category: {
  type: String,
  required: 'Password is required'
 }});

export default mongoose.model('Product', ProductSchema);