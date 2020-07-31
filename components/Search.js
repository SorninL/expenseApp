import React, {useState, useEffect} from 'react';
import {AsyncStorage, Dimensions, StyleSheet, Text, View} from 'react-native';
import {Button, Divider, Input, normalize} from 'react-native-elements';
import {exp} from "react-native-reanimated";

async function List(props) {
  let expenseMapped;

  return (
    <View>
      <Text>
        Montant : {props.amountExpense}
      </Text>
      <Text>
        Description : {props.textExpense}
      </Text>
      <Text>
        Nom : {props.nameExpense}
      </Text>
      <Divider />
    </View>
  )
}

export default async function AddExpense (props) {
  const [expenselist, setExpenseList] = useState(null)
  let expenseMapped;

  useEffect(() => {
    async function anyNameFunction() {
      await getExpenses();
    }    // Execute the created function directly
    anyNameFunction();
    }, [])


  const getExpenses = async () => {
    const value = await AsyncStorage.getItem("expense")
    if (value === null) {
      return <Text>Pas de dépenses enregistrée</Text>;
    } else {
      expenseMapped = expenselist.map(expense => <List amountExpense={expense.amountExpense}
                                                       textExpense={expense.textExpense}
                                                       nameExpense={expense.nameExpense}/>)
      setExpenseList(expenseMapped)
    }
  }



  return(
      <View style={styles.mainView}>
        {expenselist}
      </View>
  )
}

const stylesBtn = StyleSheet.create({
  btn: {
    flex: 1,
    margin: '10px'
  },
});

const styles = StyleSheet.create({
  stats: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("window").width,
    height: (15 * Dimensions.get("window").height)/100,
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
