import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import images from '../../constants/images'; // Import images from images.js

const Timetable = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Light blue gradient background */}
      <LinearGradient
        colors={['#b3e5fc', '#e1f5fe']} // Light blue gradient for a soft, welcoming feel
        style={styles.gradientBackground}
      >
        {/* Display the times image */}
        <Image
          source={images.time} // Correct image reference from images.js
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.heading}>Set Your Timetable</Text>
        <Text style={styles.subheading}>
          Organize your study schedule easily and stay on track with our interactive timetable.
        </Text>

        <Pressable
          onPress={() => router.push('/timeTableScreen/tableList')}
          style={({ pressed }) => [
            styles.button,
            { transform: [{ scale: pressed ? 0.98 : 1 }] },
          ]}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 30,
  },
  heading: {
    fontSize: 38,
    fontWeight: '800',
    color: '#333333', // Dark gray text for high contrast on light blue
    textAlign: 'center',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
  },
  subheading: {
    fontSize: 20,
    color: '#555555', // Darker text for readability on light blue
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 15,
    lineHeight: 28,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#0277bd', // Contrasting medium blue for the button
    width: '80%',
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#0277bd',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Timetable;