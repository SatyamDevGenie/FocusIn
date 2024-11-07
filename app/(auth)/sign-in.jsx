// web 514953434534-avtc8si154b6vhqrq5naa0e2ccvtk9eh.apps.googleusercontent.com
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import images from '../../constants/images';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setSubmitting] = useState(false);

  const submit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      // Handle sign-in logic here
    }, 2000);
  };

  return (
    <LinearGradient
      colors={['#1c1c1c', '#3533cd', '#000000']}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Image 
              source={images.logo}
              resizeMode='contain' 
              style={styles.logo} 
            />
            <Text style={styles.title}>
              Welcome Back!
            </Text>
            <Text style={styles.subtitle}>
              Login to your account
            </Text>

            {/* Centered input fields */}
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

            {/* Sign In button with original size */}
            <CustomButton 
              title="Sign In"
              handlePress={submit}
              containerStyles={styles.buttonContainer} 
              isLoading={isSubmitting}
            />

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Don’t have an account?
              </Text>
              <Link
                href="/sign-up"
                style={styles.signupLink}
              >
                Signup
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
    padding: 16,
  },
  container: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center', // Center everything vertically
    flex: 1, // Ensure the container takes up all available space
  },
  logo: {
    width: 220,
    height: 200,
    marginBottom: 20,
  },
  title: {
    color: '#f5f5f5',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 20, // Reduced bottom margin for subtitle
  },
  inputContainer: {
    width: '100%', // Full width for inputs container
    alignItems: 'center', // Center input fields horizontally
    marginBottom: 8, // Further reduce space between inputs and button
  },
  inputSpacing: {
    marginTop: 0, // Reduced top margin between input fields
    width: '90%', // Set a smaller width for inputs (to keep them centered properly)
    paddingVertical: 12, // Increase padding for height
    borderRadius: 25, // Rounded corners similar to button
  },
  buttonContainer: {
    marginTop: 8, // Reduced margin to bring the button closer to the password field
    width: '90%', // Set the button width same as the inputs
    borderRadius: 25,
    backgroundColor: '#008080', // Updated background color for the button
  },
  
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center', // Aligns text and link vertically
  },
  footerText: {
    fontSize: 16,
    color: '#f5f5f5',
    marginRight: 5, // Adds space between text and link
  },
  signupLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFA500', // Orange color for better visibility
  },
});

export default SignIn;