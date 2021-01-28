
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
  	'name': '',
  });
};

// exports.view = function(req, res){
//   res.nameToShow('hello', {
//   	'name': nameToShow,
//   });
// };