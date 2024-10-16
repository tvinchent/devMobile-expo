import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { collection, addDoc } from '@firebase/firestore';
import { db } from '../firebase';  // Le fichier où tu as configuré Firebase

const MessageForm = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    if (message.trim() === '') {
      setStatus('Message cannot be empty!');
      return;
    }
    try {
      // Ajout du message dans la collection 'messages' dans Firestore
      await addDoc(collection(db, 'messages'), {
        message: message,
        timestamp: new Date()
      });
      setStatus('Message saved successfully!');
      setMessage(''); // Réinitialise le formulaire
    } catch (error) {
      setStatus('Error saving message: ' + error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Enter your message:</Text>
      <textarea
        onChangeText={setMessage}
        placeholder="Type your message here..."
        style={{ borderWidth: 1, marginVertical: 10, padding: 10, borderRadius: 5 }}
      >value={message}</textarea>
      <Button title="Save Message" onPress={handleSubmit} />
      {status ? <Text style={{ marginTop: 20 }}>{status}</Text> : null}
    </View>
  );
};

export default MessageForm;
