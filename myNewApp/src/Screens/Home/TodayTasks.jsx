import {FlatList, StyleSheet} from 'react-native'
import TaskItem from "./TaskItems"
import AppCard from '../../components/AppCard'
import AppText from '../../components/AppText'

const TodayTasks = ({tasks, onTaskComplete}) => {
  return (
    <AppCard style={styles.container}>
      <AppText variant='bold' style={styles.title}>
        Today's Tasks
      </AppText>

      <FlatList
      data={tasks}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <TaskItem task={item} onComplete={onTaskComplete}/>
      )}
      scrollEnabled={false}
      ItemSeparatorComponent={()=>{
        <AppText style={styles.seperator}/>
      }}/>
    </AppCard>
  )
}

export default TodayTasks

const styles = StyleSheet.create({
  container:{
    marginBottom:24
  },

  title:{
    marginBottom:12,
  },
  seperator:{
    height:12
  }
})