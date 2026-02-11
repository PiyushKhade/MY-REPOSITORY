import { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, Image } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import HomeHeader from "./HomeHeader"
import StreakSection from "./StreakSection"
import TodayTasks from "./TodayTasks"
import CompletetionState from "./CompletetionState"
import { AuthContext } from '../../context/AuthContext'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import AppText from '../../components/AppText'


const HomeScreen = () => {

  const { getHomeData, completeTask, userToken, loading, user } = useContext(AuthContext)

  const [homeData, setHomeData] = useState({ tasks: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchHome = async () => {
    try {
      setIsLoading(true)
      const data = await getHomeData();
      setHomeData(data);
      setIsLoading(false);
    } catch (error) {
      console.log("HOME ERROR 👉", error?.response || error);
      setError("Failed to Load Data");
      setIsLoading(false);

    }
  };

  useEffect(() => {
    if (!loading && userToken) {
      fetchHome()
    }
  }, [loading, userToken])


  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size='large' color="#F97316" />
      </View>
    )
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    )
  }

  const mappedTasks = homeData.tasks.map(t => ({
    id: t.taskId?._id || t._id,
    name: t.taskId?.name ?? "",
    unit: t.taskId?.unit ?? "",
    target: t.target,
    completed: t.completed,
  }));

  console.log("HOME TASKS 👉", homeData.tasks);

  const allTasksCompleted = homeData.tasks.every(
    (task) => task.completed
  );

  const completedDays = allTasksCompleted
    ? homeData.levelDay
    : homeData.levelDay - 1;

  const isLockedForToday = homeData.lockedForToday === true;


  const handleTaskComplete = async (taskId) => {
    if (isLockedForToday) return;
    try {
      const data = await completeTask(taskId);
      setHomeData(prev => ({
        ...prev,
        tasks: data.progress.tasks
      }));

      if (data.dayCompleted) {
        await fetchHome()
      }
    } catch (error) {
      console.log("TASK COMPLETE ERROR Homescreen", error?.response || error);
    }
  }


  return (
    <SafeAreaProvider style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <AppText variant='subtitle'><SimpleLineIcons name="menu" size={24} /></AppText>
          <AppText variant='title'>Dashboard</AppText>
          <View>
            <Image
              style={styles.profileImage}
              source={
                user?.profileImage
                  ? { uri: user.profileImage }
                  : require('../../../assets/profilepic.png')
              }
            />
          </View>
        </View>

        <HomeHeader
          level={{
            current: homeData.level,
            name: homeData.level
          }}
          headerDay={homeData.headerDay}
          tokens={homeData.tokens} />

        <StreakSection
          levelDay={Math.max(0, completedDays)}
          daysRequired={homeData.daysRequired}
        />

        {!isLockedForToday && (
          <TodayTasks
            tasks={mappedTasks}
            onTaskComplete={handleTaskComplete} />)}

        {(allTasksCompleted || isLockedForToday) && <CompletetionState />}

      </ScrollView>
    </SafeAreaProvider>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#2d2d39",
  },
  container: {
    padding: 16,
    paddingBottom: 32
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2d2d39",
  },
  errorText: {
    color: "#EF4444",
    fontSize: 16,
    fontWeight: "600",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
    marginTop: 18
  },
  profileImage:{
    width: 45,
    height: 45,
    borderRadius:50
  }
});
