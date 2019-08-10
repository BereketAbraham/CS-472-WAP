package edu.mum.cs472.jspquizlab;

import java.util.ArrayList;
import java.util.List;

public class Quiz {
	List<Question> questions = new ArrayList<>(5);
	int score = 0;
	int count = 0;

	public Quiz() {
		questions.add(new Question("[1,8,27,64,125,?]", "216"));
		questions.add(new Question("[0,1,1,2,3,?]", "5"));
		questions.add(new Question("[2,4,6,8,10,?]", "12"));

	}

	public String getCurrentQuestion() {
		return questions.get(count).getQuestion();

	}

	public int getNumCorrect() {
		return score;
	}

	public boolean isCorrect(String answer) {
		if (answer.equals(questions.get(count).getAnswer())) {
			count++;
			return true;
		} else {
			return false;
		}
	}
	public void scoreAnswer(){
		score++;
	}
	public int getNumQuestions(){
		return  questions.size();
	}
}
