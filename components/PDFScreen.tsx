import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Linking } from 'react-native';

interface PDFScreenProps {
  onBack: () => void;
}

export default function PDFScreen({ onBack }: PDFScreenProps) {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (text: string) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(text));
  };

  const handleDownloadPDF = async () => {
    if (!isEmailValid) {
      Alert.alert('Email Required', 'Please enter a valid email address before downloading the playbook.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://dreunwidupezjgcsaeuw.supabase.co/functions/v1/09376b04-aba6-4bb8-a155-4e7eca1cc138', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        console.log('Response from Supabase:', data);
        Alert.alert('Success', 'PDF request submitted! Check your email.');
        
        // Open PDF link
        const pdfUrl = 'https://drive.google.com/file/d/1QPVgOv3SCkqf5K2Lc-Xdx0b9LcUa8_yb/view?usp=sharing';
        Linking.openURL(pdfUrl).catch(err => {
          Alert.alert('Error', 'Could not open PDF link');
        });
      } else {
        Alert.alert('Error', data.error || 'Failed to submit email');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      Alert.alert('Error', 'Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Get Your Playbook</Text>
        <Text style={styles.subtitle}>
          "Kicka$$ Enablement Playbook"
        </Text>
        <Text style={styles.description}>
          Enter your email to download the complete playbook with actionable strategies.
        </Text>
        
        <TextInput
          style={[
            styles.input,
            isEmailValid ? styles.inputValid : email.length > 0 ? styles.inputInvalid : null
          ]}
          placeholder="Enter your email address"
          value={email}
          onChangeText={validateEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        
        <TouchableOpacity 
          style={[
            styles.downloadButton,
            (!isEmailValid || isSubmitting) && styles.downloadButtonDisabled
          ]} 
          onPress={handleDownloadPDF}
          disabled={!isEmailValid || isSubmitting}
        >
          <Text style={[
            styles.downloadButtonText,
            (!isEmailValid || isSubmitting) && styles.downloadButtonTextDisabled
          ]}>
            {isSubmitting ? '⏳ Submitting...' : '📥 Download the Playbook'}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>← Back to Results</Text>
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
    maxWidth: 400,
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    fontSize: 16,
    marginBottom: 24,
  },
  inputValid: {
    borderColor: '#10b981',
  },
  inputInvalid: {
    borderColor: '#ef4444',
  },
  downloadButton: {
    backgroundColor: '#10b981',
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
  downloadButtonDisabled: {
    backgroundColor: '#d1d5db',
    shadowOpacity: 0,
    elevation: 0,
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  downloadButtonTextDisabled: {
    color: '#9ca3af',
  },
  backButton: {
    paddingVertical: 12,
  },
  backButtonText: {
    color: '#64748b',
    fontSize: 16,
  },
});