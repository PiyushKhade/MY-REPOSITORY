import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack';
import CardElem from '../components/CardElem';
import { Ionicons } from '@expo/vector-icons';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: "#9900cc",
                    tabBarInactiveTintColor: "#9900cc",
                    headerShown: false
                }}>
                    

                <Tab.Screen name='Home'
                    component={HomeStack}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons
                                name={focused ? 'home' : "home-outline"}
                                size={25}
                                color={color} />
                        )
                    }}
                />


                <Tab.Screen name='Products'
                    component={CardElem}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons name={focused ? "cart" : "cart-outline"}
                                size={25}
                                color={color} />
                        ),
                    }}
                />


                <Tab.Screen name='Settings'
                    component={ProfileStack}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons
                                name={focused ? "settings" : "settings-outline"}
                                color={color}
                                size={25} />
                        )
                    }} />


            </Tab.Navigator>
        </>
    )
}