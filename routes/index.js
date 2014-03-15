
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
      title       : 'Express server',
      description : 'The first step with Node.js Express server by Romano Firtermaiszter'
  });
};