const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  PlanHoras:Number,
  RealHoras:Number,
  fecha:Date,
  Porcentaje:Number,

});

module.exports = mongoose.model('tasks', TaskSchema);
