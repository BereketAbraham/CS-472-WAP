package edu.mum.cs472.JSPIntro;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/JSPIntroServlet")
public class ChooseServlet extends javax.servlet.http.HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		RequestDispatcher dispatcher = request.getRequestDispatcher("Hello.jsp"); dispatcher.forward(request, response);
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException
	{
		RequestDispatcher dispatcher = request.getRequestDispatcher("PostMessage.jsp"); dispatcher.forward(request, response);
	}
}
