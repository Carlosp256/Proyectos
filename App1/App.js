import React from 'react';
import { View, Button, Alert } from 'react-native';
import axios from 'axios';
import { encode } from 'base-64';

export default function TokenApp() {
  const my_client_id = '5e42c81628ba42d480ca47a5dcc6691f';
  const my_client_secret = '1b8da3986645461c931ff7cfe0519b92';

  const handleAuthPress = async () => {
    try {
      // Codifica la cadena de autorización en base64 utilizando la biblioteca base-64
      const auth = `${my_client_id}:${my_client_secret}`;
      const base64Auth = encode(auth);

      // Realiza una solicitud para obtener un token de acceso
      const response = await axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        params: {
          grant_type: 'client_credentials'
        },
        headers: {
          'Authorization': `Basic ${base64Auth}`
        }
      });

      // Extrae el token de acceso de la respuesta
      const { access_token } = response.data;
      console.log(`Token de acceso: ${access_token}`);

      // Aquí puedes utilizar el token de acceso para realizar solicitudes a la API web de Spotify en nombre del usuario
    } catch (error) {
      console.error(error);
      Alert.alert('Error', `Hubo un problema al iniciar sesión en Spotify: ${error.message}`);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Iniciar sesión en Spotify" onPress={handleAuthPress} />
    </View>
  );
}
