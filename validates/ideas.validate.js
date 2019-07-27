const Idea = require('../models/Idea.model');

module.exports.postAdd = (req, res, next) => {
  const { title, details } = req.body;
  
  let errors = [];
  if(!title) {
    errors.push('Title is empty!');
  }
  if(!details) {
    errors.push('Details are empty!');
  }

  if(errors.length) {
    return res.render('ideas/add', {
      errors,
      values: req.body
    })
  }

  next();
}

module.exports.putEdit = async (req, res, next) => {
  const { title, details } = req.body;
  const idea = await Idea.findById(req.params.id);
  
  let errors = [];
  if(!title) {
    errors.push('Title is empty!');
  }
  if(!details) {
    errors.push('Details are empty!');
  }

  if(errors.length) {
    return res.render('ideas/edit', {
      errors,
      values: req.body,
      idea
    })
  }

  next();
}