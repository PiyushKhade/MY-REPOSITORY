import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'
import { useColorScheme } from 'react-native';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import { useContext } from 'react';
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack'


function RootNavigator(){
  if (loading) return null;
  const {loading, isAuthenticated} = useContext(AuthContext);

  return isAuthenticated ? <AppStack/> : <AuthStack/>
}

export default function App() {
  
  const scheme = useColorScheme();
  return (
    <>
    
      <AuthProvider>
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <RootNavigator/>
        </NavigationContainer>
      </AuthProvider>
    
    </>
  )
}

