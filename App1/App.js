import React from 'react';
import { View, Button, Alert } from 'react-native';
import axios from 'axios';

export default function TokenApp() {
  const my_client_id = '5e42c81628ba42d480ca47a5dcc6691f';
  const my_client_secret = '1b8da3986645461c931ff7cfe0519b92';

  const handleAuthPress = async () => {
    try {
      // Realiza una solicitud para obtener un token de acceso
      const response = await axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        params: {
          grant_type: 'client_credentials'
        },
        headers: {
          'Authorization': `Basic ${Buffer.from(`${my_client_id}:${my_client_secret}`).toString('base64')}`
        }
      });

      // Extrae el token de acceso de la respuesta
      const { access_token } = response.data;
      console.log(`Token de acceso: ${access_token}`);

      // Aquí puedes utilizar el token de acceso para realizar solicitudes a la API web de Spotify en nombre del usuario
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un problema al iniciar sesión en Spotify.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Iniciar sesión en Spotify" onPress={handleAuthPress} />
    </View>
  );
}
