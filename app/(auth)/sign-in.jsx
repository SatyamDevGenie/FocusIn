import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import images from '../../constants/images';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, useRouter } from 'expo-router';
import axios from 'axios';

const SignIn = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setSubmitting] = useState(false);

  const submit = async () => {
    setSubmitting(true);
    try {
      const response = await axios.post('http://192.168.0.108:5000/api/users/login', {
        email: form.email,
        password: form.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        alert('Login successful!');
        router.push('/timetable');
      } else {
        alert(response.data.message || 'Login failed!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred, please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <LinearGradient colors={['#1e3c72', '#2a5298']} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Image source={images.logo} resizeMode='contain' style={styles.logo} />
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Login to your account</Text>

            <View style={styles.inputContainer}>
              <FormField 
                title="Email"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles={styles.inputSpacing}
                keyboardType="email-address"
              />
              <FormField 
                title="Password"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                otherStyles={styles.inputSpacing}
              />
            </View>

            <CustomButton 
              title="Sign In"
              handlePress={submit}
              containerStyles={styles.buttonContainer} 
              isLoading={isSubmitting}
            />

            <View style={styles.footer}>
              <Text style={styles.footerText}>Don’t have an account?</Text>
              <Link href="/sign-up" style={styles.signupLink}>Signup</Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safeArea: { flex: 1 },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    flex: 1,
  },
  logo: { width: 220, height: 200, marginBottom: 20 },
  title: { color: '#f0f0f0', fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { color: '#d3d3d3', fontSize: 16, marginBottom: 20 },
  inputContainer: { width: '100%', alignItems: 'center', marginBottom: 8 },
  inputSpacing: { marginTop: 0, width: '90%', paddingVertical: 12, borderRadius: 25 },
  buttonContainer: { 
    marginTop: 8, 
    width: '90%', 
    borderRadius: 25, 
    backgroundColor: '#4f4f4f' 
  },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20, alignItems: 'center' },
  footerText: { fontSize: 16, color: '#d3d3d3', marginRight: 5 },
  signupLink: { fontSize: 16, fontWeight: '600', color: '#d3d3d3' },
});

export default SignIn;