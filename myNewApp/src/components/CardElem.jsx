import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper'

const CardElem = () => {

  const cardItems={
        name:"Item 1",
        price:"$20",
        isAvailable:true,
      }

  return (
    <>
    <View style={styles.container}>
        <Card>
          {/* <Card.Title title="My Product"/> */}
            
          <Card.Cover source={{uri:"https://i.pinimg.com/1200x/33/42/fb/3342fb20c301334e06b92fbdc7f63e0b.jpg"}}/>
          <Card.Content>
            <Text>Lorem ipsum dolor sit amet consectetur.</Text>
            <Text style={styles.text}>Name: {cardItems.name}</Text>
            <Text>{cardItems.isAvailable ? "Available" : "Out of Stock"}</Text>
            <View style={styles.priceFlex}>
              <Text style={[styles.text, { color: cardItems.isAvailable ? "green" : "red" }]}>Price: {cardItems.price}</Text>
              <Button mode='contained'
                disabled={!cardItems.isAvailable}
                onPress={() => {
                  alert("Purchase Completed");
                }}
                {...cardItems.isAvailable ? "available" : "unavailable"}>Buy</Button>

            </View>
          </Card.Content>

        </Card>
        </View>
    </>
  )
}

export default CardElem

const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    fontWeight:"bold"
  },
  priceFlex:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },

})
