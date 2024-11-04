import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import images from '../constants/images';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#000000', '#3533cd', '#1c1c1c']}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1, paddingVertical: 20 }}>
            <View style={{ alignItems: 'center', minHeight: '84px', paddingHorizontal: 20 }}>
              <Image
                source={images.logo}
                style={{ width: 400, height: 400, marginBottom: 20 }}
                resizeMode="contain"
              />
              
              <Text 
                style={{
                  fontSize: 34,
                  color: '#f5f5f5',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  textShadowColor: 'rgba(0, 0, 0, 0.9)',
                  textShadowOffset: { width: 0, height: 2 },
                  textShadowRadius: 8,
                  marginHorizontal: 20,
                }}
              >
                Welcome to FocusIn
              </Text>
              
              <Text 
                style={{
                  fontSize: 16,
                  color: '#cfcfcf',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  textShadowColor: 'rgba(0, 0, 0, 0.7)',
                  textShadowOffset: { width: 0, height: 2 },
                  textShadowRadius: 6,
                  marginTop: 10,
                }}
              >
                "Turn Distractions into Determination"
              </Text>
            </View>
            
            <View style={{ marginTop: 80, alignItems: 'center', width: '100%' }}>
              {/* Continue with Gmail Button */}
              <Pressable
                onPress={() => router.push('/sign-in')}
                style={({ pressed }) => [
                  {
                    width: '80%',
                    paddingVertical: 16,
                    borderRadius: 12,
                    overflow: 'hidden',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.4,
                    shadowRadius: 10,
                    elevation: 6,
                    marginTop: 20,
                    transform: [{ scale: pressed ? 0.98 : 1 }],
                  },
                ]}
              >
                <LinearGradient
                  colors={['#e53935', '#d32f2f']} // Red gradient colors for Gmail button
                  style={{
                    paddingVertical: 16,
                    alignItems: 'center',
                    borderRadius: 12,
                  }}
                >
                  <Text style={{
                    fontSize: 20,
                    color: '#fff',
                    fontWeight: 'bold',
                    textShadowColor: 'rgba(0, 0, 0, 0.3)',
                    textShadowOffset: { width: 0, height: 1 },
                    textShadowRadius: 4,
                  }}>
                    Continue with Gmail
                  </Text>
                </LinearGradient>
              </Pressable>
            </View>
          </ScrollView>
          <StatusBar backgroundColor="#000" style="light" />
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}