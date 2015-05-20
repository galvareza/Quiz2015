
var models = require ('../models/models.js');
// GET quizes/question

exports.show = function(req, res) {
	models.Quiz.find(req.params.quizId).then(function(quiz){
		
	res.render('quizes/show', {quiz:quiz});
   })
};

//GET /quizes/answer

exports.answer = function(req,res) {
	models.Quiz.find(req.params.quizId).then(function(quiz){
	if (req.query.respuesta===quiz.respuesta) {
		res.render('quizes/answer',
		res.render(quiz: quiz,  respuesta:'Correcto'});
	} else { 
		res.render('quizes/answer', 
		{quiz:quiz, respuesta:'Incorrecto'});
	}
})
};
