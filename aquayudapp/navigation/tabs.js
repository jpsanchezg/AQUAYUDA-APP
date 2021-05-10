import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Noticiasscreen from '../components/Noticiasscreen';
import ReporteScreen from '../components/ReporteScreen';
import ChatScreen from '../components/ChatScreen';
import AjustesScreen from '../components/AjustesScreen';

const Tab = createBottomTabNavigator();

const Tabs = () =>  {
    return(
        <Tab.navigator>
<Tab.Screen name="Noticias" component={Noticiasscreen}/>
<Tab.Screen name="Reporte" component={ReporteScreen}/>
<Tab.Screen name="Chat" component={ChatScreen}/>
<Tab.Screen name="Ajustes" component={AjustesScreen}/>
        </Tab.navigator>
    );


}