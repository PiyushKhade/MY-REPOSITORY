import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../Screens/ProfileScreen';
import EditProfilePage from '../Screens/EditProfilePage';

const Stack = createNativeStackNavigator();
export default function ProfileStack() {
  return (
   <Stack.Navigator>
    <Stack.Screen name='ShowProfile' component={ProfileScreen}/>
    <Stack.Screen name='EditProfile' component={EditProfilePage} options={{headerShown:false}}/>
   </Stack.Navigator>
  )
}