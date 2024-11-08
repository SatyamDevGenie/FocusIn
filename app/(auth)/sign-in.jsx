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
  const router = useRouter(); // Initialize router for navigation
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setSubmitting] = useState(false);

  const submit = async () => {
    setSubmitting(true);
    try {
      // Replace with your server's IP address and port
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
        // Navigate to the homepage
        router.push('/home');
        console.log(response.data);
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
    <LinearGradient colors={['#1c1c1c', '#3533cd', '#000000']} style={styles.gradient}>
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
  title: { color: '#f5f5f5', fontSize: 30, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { color: '#aaa', fontSize: 16, marginBottom: 20 },
  inputContainer: { width: '100%', alignItems: 'center', marginBottom: 8 },
  inputSpacing: { marginTop: 0, width: '90%', paddingVertical: 12, borderRadius: 25 },
  buttonContainer: { marginTop: 8, width: '90%', borderRadius: 25, backgroundColor: '#008080' },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20, alignItems: 'center' },
  footerText: { fontSize: 16, color: '#f5f5f5', marginRight: 5 },
  signupLink: { fontSize: 16, fontWeight: '600', color: '#FFA500' },
});

export default SignIn;














// // web 514953434534-avtc8si154b6vhqrq5naa0e2ccvtk9eh.apps.googleusercontent.com
// import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
// import React, { useState } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { LinearGradient } from 'expo-linear-gradient';
// import images from '../../constants/images';
// import FormField from '../../components/FormField';
// import CustomButton from '../../components/CustomButton';
// import { Link } from 'expo-router';

// const SignIn = () => {
//   const [form, setForm] = useState({
//     email: '',
//     password: ''
//   });

//   const [isSubmitting, setSubmitting] = useState(false);

//   const submit = () => {
//     setSubmitting(true);
//     setTimeout(() => {
//       setSubmitting(false);
//       // Handle sign-in logic here
//     }, 2000);
//   };

//   return (
//     <LinearGradient
//       colors={['#1c1c1c', '#3533cd', '#000000']}
//       style={styles.gradient}
//     >
//       <SafeAreaView style={styles.safeArea}>
//         <ScrollView contentContainerStyle={styles.scrollContainer}>
//           <View style={styles.container}>
//             <Image 
//               source={images.logo}
//               resizeMode='contain' 
//               style={styles.logo} 
//             />
//             <Text style={styles.title}>
//               Welcome Back!
//             </Text>
//             <Text style={styles.subtitle}>
//               Login to your account
//             </Text>

//             {/* Centered input fields */}
//             <View style={styles.inputContainer}>
//               <FormField 
//                 title="Email"
//                 value={form.email}
//                 handleChangeText={(e) => setForm({ ...form, email: e })}
//                 otherStyles={styles.inputSpacing}
//                 keyboardType="email-address"
//               />

//               <FormField 
//                 title="Password"
//                 value={form.password}
//                 handleChangeText={(e) => setForm({ ...form, password: e })}
//                 otherStyles={styles.inputSpacing}
//               />
//             </View>

//             {/* Sign In button with original size */}
//             <CustomButton 
//               title="Sign In"
//               handlePress={submit}
//               containerStyles={styles.buttonContainer} 
//               isLoading={isSubmitting}
//             />

//             <View style={styles.footer}>
//               <Text style={styles.footerText}>
//                 Don’t have an account?
//               </Text>
//               <Link
//                 href="/sign-up"
//                 style={styles.signupLink}
//               >
//                 Signup
//               </Link>
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   gradient: {
//     flex: 1,
//   },
//   safeArea: {
//     flex: 1,
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center', // Vertically center the content
//     alignItems: 'center', // Horizontally center the content
//     padding: 16,
//   },
//   container: {
//     alignItems: 'center',
//     width: '100%',
//     paddingHorizontal: 20,
//     justifyContent: 'center', // Center everything vertically
//     flex: 1, // Ensure the container takes up all available space
//   },
//   logo: {
//     width: 220,
//     height: 200,
//     marginBottom: 20,
//   },
//   title: {
//     color: '#f5f5f5',
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtitle: {
//     color: '#aaa',
//     fontSize: 16,
//     marginBottom: 20, // Reduced bottom margin for subtitle
//   },
//   inputContainer: {
//     width: '100%', // Full width for inputs container
//     alignItems: 'center', // Center input fields horizontally
//     marginBottom: 8, // Further reduce space between inputs and button
//   },
//   inputSpacing: {
//     marginTop: 0, // Reduced top margin between input fields
//     width: '90%', // Set a smaller width for inputs (to keep them centered properly)
//     paddingVertical: 12, // Increase padding for height
//     borderRadius: 25, // Rounded corners similar to button
//   },
//   buttonContainer: {
//     marginTop: 8, // Reduced margin to bring the button closer to the password field
//     width: '90%', // Set the button width same as the inputs
//     borderRadius: 25,
//     backgroundColor: '#008080', // Updated background color for the button
//   },
  
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//     alignItems: 'center', // Aligns text and link vertically
//   },
//   footerText: {
//     fontSize: 16,
//     color: '#f5f5f5',
//     marginRight: 5, // Adds space between text and link
//   },
//   signupLink: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFA500', // Orange color for better visibility
//   },
// });

// export default SignIn;