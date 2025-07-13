import React from 'react';
import { View, StyleSheet, ScrollView, FlatList, Dimensions } from 'react-native';
import { Badge, Button, Card, Chip, useTheme } from 'react-native-paper';

const SaleProductScreen = () => {
    const { width } = Dimensions.get('window');
    const theme = useTheme();
    return (
        <ScrollView contentContainerStyle={{gap: 10, padding: 10}}>
            {/* Categories List */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10}}>
                <Chip icon="information" onPress={() => console.log('Pressed')}>All </Chip>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Sweets</Chip>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Drinks</Chip>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Food</Chip>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Snacks</Chip>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Fruits</Chip>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Vegetables</Chip>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Meat</Chip>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Fish</Chip>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Dairy</Chip>
            </ScrollView>
            {/* Categories List */}
            <View style={styles.container}>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    numColumns={width >= 1280 ? 4 : 2}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({ item }) => (
                        <Card style={{flex: width >= 1280 ? 0.25 : 1, margin: 5 }} elevation={2}>
                            <Card.Cover source={{ uri: 'https://via.placeholder.com/150' }} />
                            <Card.Title title={`Product ${item}`} subtitle="Category" />
                            <Card.Actions>
                                <Badge style={{ backgroundColor: 'green' }}>In Stock</Badge>
                                {/* <Badge style={{ backgroundColor: 'grey' }}>Out Of Stock</Badge> */}
                                <Badge style={{ backgroundColor:  theme.colors.secondary}}>5 In Cart</Badge>
                                <Button mode="contained" onPress={() => console.log('Add to Cart')} compact>Add</Button>
                            </Card.Actions>
                        </Card>
                    )}
                    // style={{ flexGrow: 0 }}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
});

export default SaleProductScreen;