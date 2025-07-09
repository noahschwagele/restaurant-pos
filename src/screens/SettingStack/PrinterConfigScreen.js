import React from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, Icon, IconButton, Modal, Portal, Subheading, TextInput, Title, useTheme } from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native';

const PrinterConfigScreen = ({ navigation }) => {
    const theme = useTheme();
    const [modalVisible, setModalVisible] = React.useState(false);

    const showModal = () => {setModalVisible(true);}
    const hideModal = () => {setModalVisible(false);}

    const NewStationModal = () => {
        const [openItems, setOpenItems] = React.useState(false);
        const [valueItems, setValueItems] = React.useState(null);
        const [openStatus, setOpenStatus] = React.useState(false);
        const [valueStatus, setValueStatus] = React.useState(null);
        const [items, setItems] = React.useState([
            {label: 'Kitech printer', value: 'Kitech printer'},
            {label: 'Grill printer', value: 'Grill printer'},
            {label: 'Thermal printer Ds092', value: 'Thermal printer Ds092'},
            {label: 'Xerox Phaser 6510', value: 'Xerox Phaser 6510'}
        ]);
        const [status, setStatus] = React.useState([
            {label: 'Active', value: 'active'},
            {label: 'Offline', value: 'offline'}
        ]);
        return (
            <Portal>
                <Modal 
                    visible={modalVisible} 
                    onDismiss={hideModal}
                    style={{alignItems: 'center'}}
                    >
                    <View
                        style={{
                            backgroundColor: 'white',
                            padding: 20,
                            borderRadius: 10,
                            margin: 20,
                            maxHeight: '90%',
                            maxWidth: 600,
                            gap: 16,
                            flex:1,
                        }}
                    >
                            <View style={{flex: 1}}>
                        <View style={[styles.row, {width: '100%'}]}>
                            <View>
                                <Title style={{fontSize: 16, fontWeight: 800}}>Add new prep station</Title>
                                <Subheading style={{fontSize: 12}}>Complete the following information to add prep station</Subheading>
                            </View>
                            <IconButton icon={'close'} onPress={hideModal}/>
                        </View>
                        <TextInput
                            // label="Station name"
                            placeholder="Enter station name"
                            mode="outlined"
                            style={{marginBottom: 16}}
                        />
                        <TextInput
                            // label="Description"
                            placeholder="Enter station description"
                            mode="outlined"
                            style={{marginBottom: 16}}
                        />
                            <View style={styles.row}>
                                <View style={{flex:1}}>
                                <DropDownPicker
                                    open={openItems}
                                    value={valueItems}
                                    items={items}
                                    setOpen={setOpenItems}
                                    setValue={setValueItems}
                                    setItems={setItems}
                                    />
                                </View>
                                <View style={{flex:1}}>
                                <DropDownPicker
                                    open={openStatus}
                                    value={valueStatus}
                                    items={status}
                                    setOpen={setOpenStatus}
                                    setValue={setValueStatus}
                                    setItems={setStatus}
                                    />
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{flex:1}}>
                                    <ToggleSwitch
                                        isOn={false}
                                        onColor={theme.colors.purple500}
                                        offColor={theme.colors.natural500}
                                        label="Send to expediter"
                                        size="small"
                                        onToggle={isOn => console.log("changed to : ", isOn)}
                                        />
                                </View>
                                <View style={{flex:1}}>
                                    <ToggleSwitch
                                        isOn={true}
                                        onColor={theme.colors.purple500}
                                        offColor={theme.colors.natural500}
                                        label="Print all tickets"
                                        size="small"
                                        onToggle={isOn => console.log("changed to : ", isOn)}
                                        />
                                </View>
                            </View>
                            </View>
                        <View style={[styles.row]}>
                            <Button mode="text" onPress={hideModal} style={{flex:1}}>Cancel</Button>
                            <Button mode="contained" onPress={hideModal} style={{flex:1, backgroundColor: theme.colors.purple500}}>Save</Button>
                        </View>
                    </View>
                </Modal>
            </Portal>
        )
    }

    return (
        <>
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.row}>
                     <IconButton icon={'keyboard-backspace'} onPress={() => navigation.pop()}/>
                     <Title style={styles.title}>Printer Stations configuration</Title>
                </View>
                 <View style={styles.row}>
                    <Button>Configure printers</Button>
                    <Button icon={'plus'} mode='contained' onPress={showModal}>Add new station</Button>
                 </View>
            </View>
           
           <View style={{
            padding: 16,
            backgroundColor: 'white',
            borderRadius: 30,
           }}>
            {/* Headers */}

            <View style={[styles.row, {justifyContent: 'space-around', marginBottom: 16, backgroundColor: '#f0f0f0', padding: 8, borderRadius: 8}]}>
                <View style={{flex:0.5}}><Text>Station name</Text></View>
                <View style={{flex:0.5}}><Text>Description</Text></View>
                <View style={{flex:0.5}}><Text>Ticket printer</Text></View>
                <View style={{flex:0.5}}><Text>Always print tickets</Text></View>
                <View style={{flex:0.5}}><Text>Status</Text></View>
                <View style={{flex:0.1}}><Text></Text></View>
            </View>
            {/* HEaders End */}
            {/* Content */}
             <View style={[styles.row, {justifyContent: 'space-around', marginBottom: 16, padding: 8, borderRadius: 8}]}>
                 <View style={{flex:0.5}}><Text>Station name</Text></View>
                <View style={{flex:0.5}}><Text>Description</Text></View>
                <View style={{flex:0.5}}><Text>Ticket printer</Text></View>
                <View style={{flex:0.5}}><Icon source={'close'}/></View>
                <View style={{flex:0.5}}><Icon source={'check'}/></View>
                <View style={{flex:0.1}}><IconButton icon={'dots-horizontal'}/></View>
            </View>
            {/* Content */}
           </View>
        </View>
        <NewStationModal/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 16,
        gap: 16,
    },
    title: {
        // fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 32,
    },
});

export default PrinterConfigScreen;