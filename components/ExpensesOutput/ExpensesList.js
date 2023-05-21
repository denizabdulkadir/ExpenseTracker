import { FlatList, StyleSheet, View } from 'react-native';

import ExpenseItem from './ExpenseItem';

function renderExpensItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={renderExpensItem}
      />
    </View>
  );
}

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});
