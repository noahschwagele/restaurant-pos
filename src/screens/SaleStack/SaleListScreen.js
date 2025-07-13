import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

// Dummy sales data
const initialSales = [
    {
        id: '1',
        itemsCount: 3,
        createdAt: '2024-06-10 14:23',
        paymentType: 'Cash',
        paymentAmount: 45.00,
        status: 'Pending',
    },
    {
        id: '2',
        itemsCount: 2,
        createdAt: '2024-06-10 15:10',
        paymentType: 'Card',
        paymentAmount: 30.50,
        status: 'Completed',
    },
];

const statuses = ['Pending', 'Completed', 'Cancelled'];

const SaleListScreen = ({navigation , route}) => {
    const [sales, setSales] = useState(initialSales);

    const changeStatus = (id) => {
        setSales((prevSales) =>
            prevSales.map((sale) =>
                sale.id === id
                    ? {
                            ...sale,
                            status:
                                statuses[(statuses.indexOf(sale.status) + 1) % statuses.length],
                        }
                    : sale
            )
        );
    };

    const renderSale = ({ item }) => (
        <View style={styles.saleItem}>
            <Text style={styles.saleText}>Sale #{item.id}</Text>
            <Text>Items: {item.itemsCount}</Text>
            <Text>Created: {item.createdAt}</Text>
            <Text>Payment: {item.paymentType} (${item.paymentAmount.toFixed(2)})</Text>
            <View style={styles.statusRow}>
                <Text>Status: {item.status}</Text>
                <Button title="Change Status" onPress={() => changeStatus(item.id)} />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sales List</Text>
            <Button onPress={() => navigation.navigate('SaleStack')}>New Order</Button>
            <FlatList
                data={sales}
                keyExtractor={(item) => item.id}
                renderItem={renderSale}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16,},
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
    listContent: { paddingBottom: 32 },
    saleItem: {
        padding: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginBottom: 12,
        backgroundColor: '#f9f9f9',
    },
    saleText: { fontWeight: 'bold', marginBottom: 4 },
    statusRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8, justifyContent: 'space-between' },
});

export default SaleListScreen;