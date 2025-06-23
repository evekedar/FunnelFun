import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface QuestionScreenProps {
  questionNumber: number;
  question: string;
  onAnswer: (score: number) => void;
}

const tooltips = [
  'Strongly Disagree',
  'Disagree', 
  'Neutral',
  'Agree',
  'Strongly Agree'
];

export default function QuestionScreen({ questionNumber, question, onAnswer }: QuestionScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.questionNumber}>Q{questionNumber}</Text>
        <Text style={styles.question}>{question}</Text>
        
        <View style={styles.buttonContainer}>
          {[1, 2, 3, 4, 5].map((score) => (
            <TouchableOpacity
              key={score}
              style={styles.scoreButton}
              onPress={() => onAnswer(score)}
            >
              <Text style={styles.scoreText}>{score}</Text>
              <Text style={styles.tooltip}>{tooltips[score - 1]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    maxWidth: 600,
    alignSelf: 'center',
  },
  questionNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0ea5e9',
    marginBottom: 16,
  },
  question: {
    fontSize: 20,
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 28,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  scoreButton: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0ea5e9',
    marginBottom: 4,
  },
  tooltip: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
});