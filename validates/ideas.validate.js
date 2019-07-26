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