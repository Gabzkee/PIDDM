import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Barometro from './components/Barometro';
import Bussola from './components/Bussola';
import Light from './components/Light';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Bússola" component={Bussola}
                    options={{
                      tabBarIcon: ({ color, size }) => (
                        <Ionicons
                          name="compass-outline"
                          size={size}
                          color={color}
                        />
                      )
                    }}
        />
        <Tab.Screen name="Pressão/Altura" component={Barometro}
                    options={{
                      tabBarIcon: ({ color, size }) => (
                        <Ionicons
                          name="airplane-outline"
                          size={size}
                          color={color}
                        />
                      )
                    }}
        />
        <Tab.Screen name="Luz" component={Light}
                    options={{
                      tabBarIcon: ({ color, size }) => (
                        <Ionicons
                          name="sunny-outline"
                          size={size}
                          color={color}
                        />
                      )
                    }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
