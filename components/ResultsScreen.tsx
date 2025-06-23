import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

interface ResultsScreenProps {
  totalScore: number;
  onPDFRequest: () => void;
}

export default function ResultsScreen({ totalScore, onPDFRequest }: ResultsScreenProps) {
  const getScoreZone = () => {
    if (totalScore >= 41) {
      return {
        zone: 'green',
        color: '#10b981',
        backgroundColor: '#d1fae5',
        message: 'Excellent! Your partners are well-enabled and ready to drive revenue.'
      };
    } else if (totalScore >= 31) {
      return {
        zone: 'yellow',
        color: '#f59e0b',
        backgroundColor: '#fef3c7',
        message: 'Good progress! Some areas need attention to maximize partner potential.'
      };
    } else {
      return {
        zone: 'red',
        color: '#ef4444',
        backgroundColor: '#fee2e2',
        message: 'Critical gaps identified. Immediate action needed to improve partner success.'
      };
    }
  };

  const scoreZone = getScoreZone();

  const handleBookCall = () => {
    Linking.openURL('https://link.ultraliminal.com/widget/booking/HPKfffVHiPMgxL52SAUH');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🎯</Text>
        <Text style={styles.title}>Your Partner Enablement Score:</Text>
        <Text style={[styles.score, { color: scoreZone.color }]}>{totalScore} / 50</Text>
        
        <View style={[styles.messageBox, { backgroundColor: scoreZone.backgroundColor }]}>
          <Text style={[styles.message, { color: scoreZone.color }]}>
            {scoreZone.message}
          </Text>
        </View>
        
        <Text style={styles.callToAction}>
          Want a custom roadmap to fix your gaps?
        </Text>
        <Text style={styles.description}>
          I'll walk you through your score and give you 3 targeted actions to grow partner revenue.
        </Text>
        
        <TouchableOpacity style={styles.button} onPress={handleBookCall}>
          <Text style={styles.buttonText}>👉 Book Free Strategy Call</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.pdfButton} onPress={onPDFRequest}>
          <Text style={styles.pdfButtonText}>Get Bonus PDF Guide</Text>
        </TouchableOpacity>
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
    maxWidth: 500,
    alignSelf: 'center',
  },
  emoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 8,
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  messageBox: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  callToAction: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#0ea5e9',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  pdfButton: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#0ea5e9',
  },
  pdfButtonText: {
    color: '#0ea5e9',
    fontSize: 16,
    fontWeight: '500',
  },
});