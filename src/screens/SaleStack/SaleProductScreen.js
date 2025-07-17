import React from 'react';
import { View, StyleSheet, ScrollView, FlatList, Dimensions, SafeAreaView } from 'react-native';
import { Badge, Button, Card, Chip, SegmentedButtons, Text, useTheme } from 'react-native-paper';
import { StockCategoryCard } from '../../components/StockCategoryCard';
import { StockItemCard } from '../../components/StockItemCard';

const SaleProductScreen = () => {
    const { width } = Dimensions.get('window');
    const theme = useTheme();
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.categoryList}>
                    <ScrollView contentContainerStyle={{ padding: 10, gap: 10 }}>
                    <StockCategoryCard/>
                    <StockCategoryCard/>
                    <StockCategoryCard/>
                    <StockCategoryCard/>
                    <StockCategoryCard/>
                    <StockCategoryCard/>
                    <StockCategoryCard/>
                    <StockCategoryCard/>
                    <StockCategoryCard/>
                    </ScrollView>
                </View>
                <View style={styles.ItemsList}>
                    <FlatList
                        data={[{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}, {key: '5'}]}
                        renderItem={({ item }) => <StockItemCard/>}
                        numColumns={5}
                        contentContainerStyle={{  }}
                        columnWrapperStyle={{ gap: 10 }}
                        keyExtractor={item => item.key}
                    />
                </View>
                <View style={styles.detailsList}>
                            <View style={{gap: 5}}>
                                <Text variant="titleLarge" style={{ marginBottom: 10 }}>Order Details</Text>  
                                <SegmentedButtons
                                    value={'walk'}
                                    // onValueChange={setValue}
                                    buttons={[
                                    {
                                        value: 'walk',
                                        label: 'Dine In',
                                    },
                                    {
                                        value: 'train',
                                        label: 'Take Away',
                                    },
                                    ]}
                                />
                            {/* Flat List */}
                                    {/* List iof selected items */}
                                    <Card style={{borderRadius: 0}} elevation={1}>
                                        <Card.Content>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                                <Text>Coca Cola</Text>
                                                <Text>R 16.50</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', gap: 10}}>
                                                <Text>x1</Text>
                                                <Text variant='bodySmall'>R16.50</Text>
                                            </View>
                                        </Card.Content>
                                    </Card>
                            {/* Flat List */}
                            </View>
                             <View style={styles.detailsBottom}>
                                <Card style={{borderRadius: 8}}>
                                    <Card.Content>
                                        <Text variant="bodyMedium" style={{ marginBottom: 5 }}>Total</Text>
                                        <Text variant="bodyMedium" style={{ marginBottom: 5 }}>R 0.00</Text>
                                    </Card.Content>
                                </Card>    
                                <Button mode="contained" style={{ marginBottom: 10 }}>Process Transaction</Button>         
                             </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        // flex: 1,
        // width: '100%',
        flexDirection: 'row'
    },
    categoryList: {
        flex:0.2,
        borderRightWidth: 1,
        borderRightColor: '#ccc',
        // backgroundColor: '#f0f0f0',
    },
    ItemsList : {
        flex:1,
        padding: 10,

        // backgroundColor: '#ffffff',
    },
    detailsList: {
        flex: 0.4,
        padding: 10,
        borderLeftWidth: 1,
        borderLeftColor: '#ccc',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // backgroundColor: '#f8f8f8',
    },
    detailsBottom: {
        bottom: 0,
        gap: 10,
    }
});

export default SaleProductScreen;