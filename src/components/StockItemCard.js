import { StyleSheet, View } from "react-native";
import { Card, Icon, Text } from "react-native-paper";

export const StockItemCard = () => {
    return (
        <Card style={styles.container} elevation={1}>
            <Card.Cover source={{ uri: 'https://www.pngarts.com/files/4/Coca-Cola-Can-PNG-Picture.png' }} style={styles.image}/>
            <Card.Content style={{gap: 10, paddingVertical: 10}}>
                <Text>Coca Cola</Text>
                <Text variant="bodySmall" style={{color: '#888'}}>Price: $1.50</Text>
            </Card.Content>
            <View style={styles.active}></View>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderRadius: 8,
    },
    image: {
        height: 100,
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    }
})