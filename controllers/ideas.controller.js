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
    title,
    details
  });
  res.redirect('/ideas');
}