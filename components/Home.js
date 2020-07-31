import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


export default function Home () {

    const startGame = () => {
        Actions.add()
    }
    const goToRanking = () => {
      Actions.search()
    }

    return(
        <View style={styles.buttons}>
            <Button style={stylesBtn.btn}
                title="J'ai dépensé, je le notes !"
                onPress={startGame}
            />
            <Button style={stylesBtn.btn}
                title="Qu'ai-je dépensé ?"
                onPress={goToRanking}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '5px',
        width: '200px'
    },
  });

  const stylesBtn = StyleSheet.create({
    btn: {
        flex: 3,
        margin: '10px'
    },
  });

