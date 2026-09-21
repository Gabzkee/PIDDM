# Explore — Guia Histórico-Cultural
 
MVP em React Native + Expo com 3 telas:
 
1. **Mapa**: mostra patrimônios cadastrados e a posição atual do usuário por GPS.
2. **Detalhes**: mostra informações do patrimônio e permite favoritar.
3. **Bússola**: usa `expo-sensors`/`Magnetometer` para orientar o usuário na direção do patrimônio e usa o GPS para calcular a distância.
 
## Instalação
 
Este projeto foi preparado para **Expo SDK 54**.
 
```bash
npm install
npx expo start
```
 
Ou, para abrir diretamente no Android:
 
```bash
npx expo start --android
```

Ou, para baixar o apk

```bash
eas build -p android --profile preview
```