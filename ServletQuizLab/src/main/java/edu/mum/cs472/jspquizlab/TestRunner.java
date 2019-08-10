package edu.mum.cs472.jspquizlab;

import java.util.Scanner;

public class TestRunner {
	public static void main(String[] args)
	{
		try {
			Quiz quiz = new Quiz();

			Scanner sc = new Scanner(System.in);
			boolean questionsLeft = true;

			while (questionsLeft) {
				System.out.println();
				System.out.println("Your score is:  " + quiz.getNumCorrect());
				System.out.println("Next sequence is:  " + quiz.getCurrentQuestion());

				System.out.println("Enter the next number for the given sequence.");
				String answer = sc.nextLine();

				boolean error = true;

				if ((answer != null) && quiz.isCorrect(answer)) {
					error = false;
					quiz.scoreAnswer();
				}

				if (error == true) {
					System.out.println();
					System.out.println("Wrong answer, please try again.");
					System.out.println();
				}


				if (quiz.getNumCorrect() == quiz.getNumQuestions()) {
					questionsLeft = false;
					System.out.println("Congratulations, you have completed the quiz!");
				}
			}
		}
		catch (Exception ex)
		{
			System.out.format("%s: %s", ex.getClass().getName(), ex.getMessage());
		}
	}
}
