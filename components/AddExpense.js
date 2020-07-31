import React, {useState} from 'react';
import {AsyncStorage, Dimensions, StyleSheet, Text, View} from 'react-native';
import {Button, Input, normalize} from 'react-native-elements';
import {SaveExpense} from './Utils'


export default function AddExpense (props){
  const [textExpense, setTextExpense] = useState("Description manquante");
  const [nameExpense, setNameExpense] = useState("Description manquante");
  const [amountExpense, setAmountExpense] = useState(0);
  const [isSent, setIsSent] = useState(false);
  const updateAmountExpense = (value) => {
    setAmountExpense(value);
  }
  const updateTextExpenses = (value) => {
    setTextExpense(value);
  }
  const updateNameExpense = (value) => {
    setNameExpense(value);
  }

  const onPressYeet = () => {
    SaveExpense(nameExpense, textExpense, amountExpense).then(() => {
      setIsSent(true);
    })
  }
  if (isSent === true) {
    return (
      <View style={styles.mainView}>
        <View style={styles.stats}>
            <Text style={styles.monthText}>
              La dépense à été sauvée !
            </Text>
        </View>
      </View>
    )
  } else {
    return(
      <View style={styles.mainView}>
        <View style={styles.stats}>
          <Input placeholder="Nom" onChangeText={value => updateNameExpense(value)}/>
          <Input placeholder="Description" onChangeText={value => updateTextExpenses(value)}/>
          <Input placeholder="Montant" onChangeText={value => updateAmountExpense(value)}/>
          <Button title="Sauvegarder la dépense" onPress={onPressYeet}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  stats: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("window").width,
    height: (100 * Dimensions.get("window").height)/100,
  },
  monthText: {
    fontSize: '25px',
    color: '#F8F8FF'
  },
  mainView: {
    width: Dimensions.get("window").width,
    position: 'relative',
    backgroundColor: '#00539F'
  }
});
