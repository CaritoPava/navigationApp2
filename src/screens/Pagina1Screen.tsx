import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text style={{ marginVertical: 20, fontSize: 20 }}>Navegar con argumentos</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6',
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Mateo',
          })}
        >
          <Text style={
            styles.botonGrandeTexto
          }>Mateo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427',
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Martin',
          })}
        >
          <Text style={
            styles.botonGrandeTexto
          }>Martin</Text>
        </TouchableOpacity>

      </View>


    </View>
  );
};
