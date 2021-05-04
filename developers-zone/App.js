import * as React from 'react';
import { View,Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import './App.css';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ReportStack = createStackNavigator();
const ChatStack = createStackNavigator();
const SettingsStack = createStackNavigator();



function Home() {
  return <View />;
}

function Report() {

  const [text] = React.useState(null);
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#315e7e',
    color : "white"

  },
  MainContainer: 
{
  flex:1,
// Set hex color code here.
backgroundColor: '#0089eb',
 
}
});
  return (
    <View style = {styles.MainContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nombre y apellido"
        placeholderTextColor="#fff" 
        value={text}
      />
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Nombre de la finca"
        placeholderTextColor="#fff" 
        
      />
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Nombre de la vereda"
        placeholderTextColor="#fff" 
        
      />
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Tipo de reporte"
        placeholderTextColor="#fff" 
      />

    </View>);
    
}

function Chat() {
  return <View />;
}

function Ajustes() {
  return (<View />);
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Noticias"
        component={Home}
        options={{ tabBarLabel: 'Noticias!' }}
      />
    </HomeStack.Navigator>
  );
}

function ReporteStackScreen() {
  return (

    <ReportStack.Navigator>
      <ReportStack.Screen
      
        name="Reporte"
        component={Report}

        options={{ tabBarLabel: 'Reporte!' }}
        
      />
    </ReportStack.Navigator>
    
  );
}

function ChatStackScreen() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="Chat"
        component={Chat}
        options={{ tabBarLabel: 'Chat!' }}
      />
    </ChatStack.Navigator>
  );
}


function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Ajustes"
        component={Ajustes}
        options={{ tabBarLabel: 'Ajustes!' }}
      />
    </SettingsStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Noticias" component={HomeStackScreen} />
        <Tab.Screen name="Reporte" component={ReporteStackScreen} />
        <Tab.Screen name="Chat" component={ChatStackScreen} />
        <Tab.Screen name="Ajustes" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
