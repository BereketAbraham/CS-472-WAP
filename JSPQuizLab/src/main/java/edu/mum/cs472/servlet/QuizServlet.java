package edu.mum.cs472.servlet;

import edu.mum.cs472.model.Quiz;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/QuizServlet")
public class QuizServlet extends HttpServlet {
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session= request.getSession();
		Quiz quiz=(Quiz)session.getAttribute("quiz");

		if(quiz==null){
			quiz=new Quiz();
			session.setAttribute("quiz",quiz);
			session.setAttribute("age",45);

		}


		String txtAns=request.getParameter("txtAnswer");

		if(txtAns!=null) {
			if(quiz.checkAnswer(txtAns)){
				System.out.println("IN HERE");
				quiz.nextQuestion();
				quiz.awardScore();
				session.setAttribute("error",false);

			}
			else{
				session.setAttribute("error",true);
			}
		}
		RequestDispatcher dispatcher;
		if(quiz.allQuestionsDOne()){
			dispatcher=request.getRequestDispatcher("finishQuiz.jsp");


		}
		else{
			dispatcher=request.getRequestDispatcher("quiz.jsp");


		}

		dispatcher.forward(request,response);

	}
}
