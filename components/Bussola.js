import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { Magnetometer } from 'expo-sensors';
import Estilos from '../styles/Estilos';

function calcularAngulo({ x, y }) {
  let angulo = Math.atan2(y, x) * (180 / Math.PI);
  angulo = angulo + 90;
  if (angulo < 0) {
    angulo += 360;
  }
  return angulo;
}

function direcaoCardeal(angulo) {
  const direcoes = ["N", "NE", "L", "SE", "S", "SO", "O", "NO"];
  const indice = Math.round(angulo / 45) % 8;
  return direcoes[indice];
}

export default function Bussola() {
  const [angulo, setAngulo] = useState(0);
  const [direcao, setDirecao] = useState("N");

  useEffect(() => {
    let subscription = null;

    Magnetometer.setUpdateInterval(200);

    subscription = Magnetometer.addListener((monitor) => {
      if (!monitor) {
        return;
      }

      const grau = calcularAngulo(monitor);
      setAngulo(grau);
      setDirecao(direcaoCardeal(grau));
    })

    return () => {
      subscription?.remove();
    }
  }, []);

  return (
    <View style={Estilos.container}>
      <Text style={Estilos.textoMovimento}>{`${angulo.toFixed(0)}° ${direcao}`}</Text>
    </View>
  );
}
