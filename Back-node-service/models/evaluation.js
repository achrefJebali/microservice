const mongoose = require('mongoose');

const EvaluationSchema = new mongoose.Schema({
  departmentId: {
    type: Number, // <-- not ObjectId, just a Number (same as idDepart)
    required: true
  },
  titre: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  dateEvaluation: {
    type: Date,
    required: true
  },
  noteMaximale: {
    type: Number,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Evaluation', EvaluationSchema);
