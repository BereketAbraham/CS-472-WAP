package edu.mum.cs472.model;

import java.util.Arrays;
import java.util.List;

public class Quiz {
	private int questionNumber;
	private List<String> questions;
	private List<String> answer;
	private int score;

	public Quiz()
	{
		questions= Arrays.asList("[1,2,3,?]","[2,3,4,5,?,7]","[4,5,7,8,9,?]");
		answer=Arrays.asList("4","6","7");
		this.questionNumber = 0;
		this.score=0;


	}
	public int getScore(){
		return score;
	}
	public void awardScore(){
		score++;
	}

	public boolean checkAnswer(String ans){

		return ans.equals(answer.get(questionNumber));
	}

	public String getQuestion(){
		return questions.get(questionNumber);
	}
	public List<String> getAnswer() {
		return answer;
	}

	public void setAnswer(List<String> answer) {
		this.answer = answer;
	}
	public int getQuestionNumber() {
		return questionNumber;
	}

	public void nextQuestion(){
		questionNumber++;
	}
	public boolean allQuestionsDOne(){
		return questions.size()==questionNumber;

	}
	@Override
	public String toString(){
		return "questionNumber="+questionNumber+"\nquestion="+questions.get(questionNumber)+"\nansewr"+answer.get(questionNumber);
	}
}
