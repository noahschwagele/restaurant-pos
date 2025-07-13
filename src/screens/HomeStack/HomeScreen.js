import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Divider, List } from 'react-native-paper';

const HomeScreen = ({ navigation, route }) => {
  // Dummy data for demonstration
  const salesSummary = {
    totalSales: 1250.75,
    transactions: 34,
  };
  const cashInTill = 500.00;
  const lowStockAlerts = [
    { product: 'Coke 330ml', qty: 2 },
    { product: 'Burger Buns', qty: 5 },
  ];
  const pendingRefunds = 1;
  const openSales = 2;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Home</Text>

      {/* Sales Summary */}
      <Card style={styles.card}>
        <Card.Title title="Today's Sales Summary" />
        <Card.Content>
          <Text>Total Sales: ${salesSummary.totalSales.toFixed(2)}</Text>
          <Text>Transactions: {salesSummary.transactions}</Text>
        </Card.Content>
      </Card>

      {/* Cash in Till */}
      <Card style={styles.card}>
        <Card.Title title="Cash in Till" />
        <Card.Content>
          <Text>${cashInTill.toFixed(2)}</Text>
        </Card.Content>
      </Card>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('NewSale')}
        >
          New Sale
        </Button>
        <Button
          mode="outlined"
          style={styles.button}
          onPress={() => navigation.navigate('Products')}
        >
          View Products
        </Button>
        <Button
          mode="outlined"
          style={styles.button}
          onPress={() => navigation.navigate('Stock')}
        >
          View Stock
        </Button>
      </View>

      {/* Alerts / Notifications */}
      <Card style={styles.card}>
        <Card.Title title="Alerts & Notifications" />
        <Card.Content>
          {lowStockAlerts.length > 0 && (
            <>
              <Text style={styles.alertTitle}>Low Stock:</Text>
              {lowStockAlerts.map((item, idx) => (
                <Text key={idx} style={styles.alertText}>
                  {item.product} (Qty: {item.qty})
                </Text>
              ))}
              <Divider style={{ marginVertical: 8 }} />
            </>
          )}
          <Text>
            Pending Refunds: {pendingRefunds}
          </Text>
          <Text>
            Open Sales: {openSales}
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'stretch',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    // alignSelf: 'center',
  },
  card: {
    marginVertical: 10,
    width: '100%',
    alignSelf: 'center',
  },
  quickActions: {
    marginVertical: 10,
    width: '100%',
  },
  button: {
    marginVertical: 5,
    borderRadius: 5,
  },
  alertTitle: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  alertText: {
    color: '#b71c1c',
  },
});

export default HomeScreen;