import { StyleSheet, View } from "react-native";
import { Card, Icon, Text } from "react-native-paper";

export const StockCategoryCard = () => {
    return (
        <Card style={styles.container} elevation={1}>
            <View style={styles.active}></View>
            <Card.Content style={{alignItems: 'center', gap: 10}}>
                <Icon source={'food'} size={28}/>
                <Text>All Menu</Text>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderRadius: 8,
    },
    active: {
        width: 8,
        height: 50,
        backgroundColor: '#6200ee',
        borderRadius: 4,
        position: 'absolute',
        left: 0,
        top: 10,
    }
})