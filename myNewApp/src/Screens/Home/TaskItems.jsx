import { View, Text, StyleSheet } from 'react-native'
import AppText from "../../components/AppText"
import AppCard from "../../components/AppCard"
import AppButton from "../../components/AppButton"

const TaskItems = ({task, onComplete}) => {
  return (
    <AppCard style={styles.container}>
      <View>
        <AppText variant='bold'>{task.name}</AppText>
        <AppText variant='subtitle'>
          {task.target}{task.unit}
        </AppText>
      </View>

      <AppButton
      title={task.completed ? "Conquered":"Start"}
      onPress={()=>onComplete(task.id)}
      disabled={task.completed}/>
      
    </AppCard>
  )
}

export default TaskItems


const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:10,
  }
});