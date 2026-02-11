import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)


    useEffect(() => {
        const loadToken = async () => {
            const storedToken = await AsyncStorage.getItem("token");
            if (storedToken) {
                setUserToken(storedToken)
                setIsLoggedIn(true)
                await getUser(storedToken)
            }
            setLoading(false)
        }
        loadToken()
    }, [])


    const login = async (jwtToken) => {
        await AsyncStorage.setItem("token", jwtToken)
        setUserToken(jwtToken)
        setIsLoggedIn(true)
        await getUser(jwtToken)
    };

    useEffect(() => {
        if (userToken) {
            getHomeData();
        }
    }, [userToken]);

    const getUser = async (token) => {
        try {
            const res = await api.get(`/auth/user`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(res.data);
            setUser(res.data);
        } catch (error) {
            console.log("User Fetch failed", error.response?.data || error.message);
            logout();
        }
    }

    const logout = async () => {
        await AsyncStorage.removeItem("token");
        setUserToken(null);
        setIsLoggedIn(false);
    }

    const getHomeData = async () => {
        const res = await api.get("/home");
        return res.data;
    };

    const completeTask = async (taskId) => {
        const res = await api.post("progress/task/complete", {
            taskId,
        });
        return res.data;
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            login,
            logout,
            user,
            setUser,
            userToken,
            loading,
            isAuthenticated: !!userToken,
            getHomeData,
            completeTask
        }}>
            {children}
        </AuthContext.Provider>
    );
};
