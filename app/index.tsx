import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeScreen from '../components/WelcomeScreen';
import QuestionScreen from '../components/QuestionScreen';
import ResultsScreen from '../components/ResultsScreen';
import PDFScreen from '../components/PDFScreen';
import { questions } from '../data/questions';

type Screen = 'welcome' | 'question' | 'results' | 'pdf';

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleStart = () => {
    setCurrentScreen('question');
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentScreen('results');
    }
  };

  const handlePDFRequest = () => {
    setCurrentScreen('pdf');
  };

  const handleBackToResults = () => {
    setCurrentScreen('results');
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onStart={handleStart} />;
      case 'question':
        return (
          <QuestionScreen
            questionNumber={currentQuestion + 1}
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
        );
      case 'results':
        return (
          <ResultsScreen
            totalScore={totalScore}
            onPDFRequest={handlePDFRequest}
          />
        );
      case 'pdf':
        return <PDFScreen onBack={handleBackToResults} />;
      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});