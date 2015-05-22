
var models = require ('../models/models.js');

//Autoload

esports.load = function(req, res, next, quizId) {
  models.Quiz.find(quizId).then(
  fucntion(quiz)  {
   if(quiz)  {
   req.quiz = quiz;
   next();

   } else { next (new Error('No existe quizId=' + quizId)); }
  }
 ).catch(function(error) { next(error);});
};

//GET /quizes

exports.index = function(req, res) {
  models.Quiz.findAll().then(function(quizes){
  res.render('quizes/index.ejs', {quizes: quizes});
   })
};


// GET quizes/question

exports.show = function(req,res) {
 models.Quiz.find(req.params.quizId).then(function(quiz){
   res.render('quizes/show', { quiz: quiz});
   })
};

//GET quizes/answer
exports.answer = function(req, res) {
 models.Quiz.findAll(req.params.quizId).then(function(quiz){

  if(req.query.respuesta === quiz.respuesta)  {
    res.sender('quizes/answer', 
		{ quiz: quiz, respuesta: 'Correcto'});
  } else{
    res.render('quizes/answer',
		 { quiz: quiz, respuesta: 'Incorrecto'});
   }
})
};

