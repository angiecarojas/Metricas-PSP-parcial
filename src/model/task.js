const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  PlanHoras:Number,
  RealHoras:Number,
  fecha:Date,
  Porcentaje:Number,
  DplanHoras:Number,
  DrealHoras:Number,
  Dfecha:Date,
  Dporcentaje:Number,
  CplanHoras:Number,
  CrealHoras:Number,
  Cfecha:Date,
  Cporcentaje:Number,
  PplanHoras:Number,
  PrealHoras:Number,
  Pfecha:Date,
  Pporcentaje:Number,
  PMplanHoras:Number,
  PMrealHoras:Number,
  PMfecha:Date,
  PMporcentaje:Number,
  TplanHoras:Number,
  TrealHoras:Number,
  Tfecha:Date,
  Tporcentaje:Number
});

module.exports = mongoose.model('tasks', TaskSchema);
