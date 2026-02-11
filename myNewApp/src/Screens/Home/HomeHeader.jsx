import { View, StyleSheet } from 'react-native'
import AppText from '../../components/AppText';
import AppCard from '../../components/AppCard';

const HomeHeader = ({ level = {}, headerDay = 1, tokens }) => {
  const { current = "-", name = "" } = level;
  return (
    <AppCard style={styles.container}>
      <View>
        <AppText variant='title' style={styles.levelText}>
          Level: {current} {name && `- ${name}`}
        </AppText>
        <AppText variant='subtitle' style={styles.dayText}>
          Day {headerDay} of progress
        </AppText>
      </View>

      <View style={styles.tokenBox}>
        <AppText variant="bold">{tokens}</AppText>
        <AppText variant="subtitle">TOKENS</AppText>
      </View>
    </AppCard>
  );
};

export default HomeHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  tokenBox: {
    alignItems: "flex-end",
  },
  levelText: {
    marginBottom: 4,
  },
  dayText: {
    opacity: 0.8,
  },
})