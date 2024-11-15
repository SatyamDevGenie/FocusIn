import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const Ebook = () => {
  const books = [
    {
      id: '1',
      title: 'The Great Gatsby',
      description: 'A classic novel by F. Scott Fitzgerald.',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '2',
      title: '1984',
      description: 'A dystopian novel by George Orwell.',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '3',
      title: 'To Kill a Mockingbird',
      description: 'A novel by Harper Lee about social injustice.',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '4',
      title: 'To Kill a Mockingbird',
      description: 'A novel by Harper Lee about social injustice.',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '5',
      title: 'To Kill a Mockingbird',
      description: 'A novel by Harper Lee about social injustice.',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '6',
      title: 'To Kill a Mockingbird',
      description: 'A novel by Harper Lee about social injustice.',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '7',
      title: 'To Kill a Mockingbird',
      description: 'A novel by Harper Lee about social injustice.',
      image: 'https://via.placeholder.com/100',
    },
  ];

  const renderBook = ({ item }) => (
    <View style={styles.bookCard}>
      <Image source={{ uri: item.image }} style={styles.bookImage} />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>E-Books</Text>
      </View>

      {/* Book List */}
      <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.bookList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f8',
  },
  header: {
    height: 60,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookList: {
    padding: 10,
  },
  bookCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  bookImage: {
    width: 100,
    height: 150,
  },
  bookInfo: {
    flex: 1,
    padding: 10,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bookDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  downloadButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Ebook;
