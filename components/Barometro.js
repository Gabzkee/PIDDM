import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { Barometer } from 'expo-sensors';
import Estilos from '../styles/Estilos';

export default function Barometro() {
  const [pressao, setPressao] = useState(null);
  const [altitude, setAltitude] = useState(null);

  useEffect(() => {
    let subscription = null;

    Barometer.setUpdateInterval(200);

    subscription = Barometer.addListener((monitor) => {
      const { pressure, relativeAltitude } = monitor;

      if (pressure === undefined) {
        return;
      }

      setPressao(pressure);
      setAltitude(relativeAltitude);
    })

    return () => {
      subscription?.remove();
    }
  }, []);

  return (
    <View style={Estilos.container}>
      <Text style={Estilos.textoMovimento}>
        {pressao !== null ? `Pressão: ${pressao.toFixed(2)} hPa` : "Lendo barômetro..."}
      </Text>
      {altitude !== null && (
        <Text style={Estilos.textoMovimento}>
          {`Altitude relativa: ${altitude.toFixed(2)} m`}
        </Text>
      )}
    </View>
  );
}
