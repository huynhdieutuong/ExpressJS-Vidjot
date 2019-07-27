const Idea = require('../models/Idea.model');

module.exports.index = async (req, res) => {
  const ideas = await Idea.find().sort({date:'desc'});
  res.render('ideas/index', {
    title: 'Ideas',
    ideas
  });
}

module.exports.add = (req, res) => {
  res.render('ideas/add', { title: 'Add Idea'});
}

module.exports.postAdd = async (req, res) => {
  const { title, details } = req.body;
  await Idea.create({
    title: title.trim(),
    details: details.trim()
  });
  res.redirect('/ideas');
}

module.exports.edit = async (req, res) => {
  const idea = await Idea.findById(req.params.id);
  res.render('ideas/edit', {
    title: 'Edit Idea',
    idea
  });
}

module.exports.putEdit = async (req, res) => {
  const { title, details } = req.body;
  await Idea.findByIdAndUpdate(req.params.id, {
    title: title.trim(),
    details: details.trim()
  });
  res.redirect('/ideas');
}

module.exports.delete = async (req, res) => {
  await Idea.findByIdAndDelete(req.params.id);
  res.redirect('/ideas');
}