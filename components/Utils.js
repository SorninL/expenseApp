async function SaveExpense(nameExpense, textExpense, amountExpense) {
  let map = [];
  try {
    const value = await AsyncStorage.getItem("expense")
    if (value !== null) {
      value.push("expense", {nameExpense:nameExpense, textExpense: textExpense, amountExpense: amountExpense})
    } else {
      map.push("expense", {textExpense: textExpense, amountExpense: amountExpense})
    }
  } catch (e) {

  }
}
export {SaveExpense}
