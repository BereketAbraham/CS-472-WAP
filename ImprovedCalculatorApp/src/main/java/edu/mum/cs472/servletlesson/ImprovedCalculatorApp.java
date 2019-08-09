package edu.mum.cs472.servletlesson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/calculate")
public class ImprovedCalculatorApp extends HttpServlet {
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String op1 = "";
		String op2 = "";
		String op3 = "";
		String op4 = "";
		String res1 = "";
		String res2 = "";

		if (request != null) {

			op1 = request.getParameter("operand1");
			op2 = request.getParameter("operand2");
			op3 = request.getParameter("operand3");
			op4 = request.getParameter("operand4");

			res1 = Integer.toString(Integer.parseInt(op1) + Integer.parseInt(op2));
			res2 = Integer.toString(Integer.parseInt(op3) * Integer.parseInt(op4));

		}
		PrintWriter out = response.getWriter();
		out.print("<html><head><title>Test</title></head><body>");

		out.print(" <form method=\"post\" action=\"calculate\">\n" +
				"\n" +
				"    <input type=\"number\" name=\"operand1\" value=" + op1 + "> +\n" +
				"\n" +
				"    <input type=\"number\" name=\"operand2\" value=" + op2 + "> =\n" +
				"    <input type=\"number\" name=\"result1\"  value=" + res1 + ">\n" +
				"\n" +
				"    <br />\n" +
				"    <input type=\"number\" name=\"operand3\" value=" + op3 + "> *\n" +
				"\n" +
				"    <input type=\"number\" name=\"operand4\" value=" + op4 + "> =\n" +
				"    <input type=\"number\" name=\"result2\"  value=" + res2 + ">\n" +
				"    <br />\n" +
				"    <input type=\"submit\" value=\"Submit\">\n" +
				"  </form>");

		out.print("</body></html>");
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}
}
