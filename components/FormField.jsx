import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import icons from '../constants/icons';

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.label}>
        {title}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          style={styles.input}
          placeholderTextColor="#aaa"
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#f5f5f5',
    fontWeight: '500',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ff4d4d',
    backgroundColor: '#1c1c1c',
    borderRadius: 12,
    height: 48,
    width:300,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    width:300,
    color: '#f5f5f5',
    fontSize: 16,
  },
  iconContainer: {
    paddingRight: 16,
    paddingLeft: 8,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#f5f5f5', // Adjust icon color as needed
  },
});

export default FormField;