import { StyleSheet, Text, View } from 'react-native';
import Home from '../paginas/home';
import Sobre from '../paginas/sobre';
import Contato from '../paginas/contato';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackRoutes from './stackRotas';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (

       <Tab.Navigator 
       initialRouteName='Home Stack'
       screenOptions={{headerShown:false,
        tabBarActiveTintColor:"red",
        tabBarInactiveTintColor:'blue',
        tabBarStyle:{
          backgroundColor:"black"

        }

      }}

       >

          <Tab.Screen name = "Home Stack" component={StackRoutes} 
          options = 
          {{tabBarIcon: ({color,size}) => {

          return   <Ionicons name="home-sharp" size={size} color={color}/>
          } 
          
          }}/>
          <Tab.Screen name ="Contato" component ={Contato}
           options = 
           {{tabBarIcon: ({color,size}) => {
 
           return   <AntDesign name="contacts" size={size} color={color} />
           } }}
          
          ></Tab.Screen>
          <Tab.Screen name = "Sobre" component={Sobre}
          
          options =
          {{
            tabBarIcon:({color,size}) => {
              return <Ionicons name="information-circle-outline" size={size} color={color} />
            }
          }}
          
          ></Tab.Screen>


        </Tab.Navigator>   



   
  );
}


