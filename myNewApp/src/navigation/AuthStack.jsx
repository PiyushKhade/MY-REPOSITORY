import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LandingPage from '../Screens/LandingPage';
import SignupScreen from '../Screens/SignupScreen';
import LoginScreen from '../Screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Landing' component={LandingPage}/>
            <Stack.Screen name='Signup' component={SignupScreen}/>
            <Stack.Screen name='Login' component={LoginScreen}/>
        </Stack.Navigator>
    </>
  )
}

