import { View, Text, Platform } from 'react-native';
import { useState, useEffect } from 'react';
import { LightSensor } from 'expo-sensors';
import Estilos from '../styles/Estilos';

export default function SensorLuz() {
  const [luminosidade, setLuminosidade] = useState(null);

  useEffect(() => {
    if (Platform.OS !== 'android') {
      return;
    }

    let subscription = null;

    LightSensor.setUpdateInterval(200);

    subscription = LightSensor.addListener((monitor) => {
      const { illuminance } = monitor;

      if (illuminance === undefined) {
        return;
      }

      setLuminosidade(illuminance);
    })

    return () => {
      subscription?.remove();
    }
  }, []);

  return (
    <View style={Estilos.container}>
      <Text style={Estilos.textoMovimento}>
        {Platform.OS !== 'android'
          ? "Sensor de luz disponível apenas no Android"
          : luminosidade !== null
            ? `Luminosidade: ${luminosidade.toFixed(2)} lx`
            : "Lendo sensor de luz..."}
      </Text>
    </View>
  );
}
