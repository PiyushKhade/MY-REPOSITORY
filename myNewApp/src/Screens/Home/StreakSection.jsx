import { View, StyleSheet } from 'react-native'
import AppCard from '../../components/AppCard';
import AppText from '../../components/AppText';

const StreakSection = ({levelDay=0, daysRequired=1}) => {
   const safeLevelDay = Math.min(levelDay, daysRequired);
  const progress = safeLevelDay / daysRequired;
  return (
    <AppCard style={styles.container}>
      <View style={styles.header}>
        <AppText variant='bold' >Streak</AppText>
        <AppText variant='subtitle'>
          Day {safeLevelDay}/{daysRequired}
        </AppText>
      </View>

      <View style={styles.barBackground}>
        <View style={[
          styles.barFill,
          {width:`${progress * 100}%`},
        ]}/>
      </View>
      <AppText variant='subtitle' style={styles.warning}>
        Miss Today...? Streak Resets!!
      </AppText>
    </AppCard>
  )
}

export default StreakSection

const styles=StyleSheet.create({
  container:{
    marginBottom:32
  },
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:8
  },
  barBackground:{
    height:8,
    backgroundColor:"#2A2A2E",
    borderRadius:4,
    overflow:"hidden",
  },
  barFill:{
    height:"100%",
    backgroundColor:"#C1121F",
  },
  warning: {
    marginTop: 8,
  },
})