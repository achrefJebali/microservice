const Evaluation = require('../models/evaluation');

// Create evaluation
exports.createEvaluation = async (req, res) => {
  try {
    const evaluation = new Evaluation(req.body);
    await evaluation.save();
    res.status(201).json(evaluation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all evaluations
exports.getAllEvaluations = async (req, res) => {
  try {
    const evaluations = await Evaluation.find();
    res.json(evaluations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get evaluation by ID
exports.getEvaluationById = async (req, res) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id);
    if (!evaluation) {
      return res.status(404).json({ message: 'Evaluation not found' });
    }
    res.json(evaluation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete evaluation
exports.deleteEvaluation = async (req, res) => {
  try {
    await Evaluation.findByIdAndDelete(req.params.id);
    res.json({ message: 'Evaluation deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
