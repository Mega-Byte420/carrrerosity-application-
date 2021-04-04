import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header_Find_Institute from './Header_Find_Institute';
import { Button } from 'react-native-paper';

export default class Comparision extends React.Component {
    render() {
        return (

            <View style={{ flex: 1, alignContent: 'center', backgroundColor: '#fff' }}>
                <Header_Find_Institute />
                <View style={{ marginTop: 50, borderWidth: 4, justifyContent: 'center', height: 50 }}>

                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Add Institutes To Compare</Text>

                </View>

                <View style={{ padding: 20 }}>

                    <View style={{ marginTop: 5, borderWidth: 2, borderRadius: 6, height: 60 }}>
                        <TouchableOpacity>
                            <Picker style={{ width: 320, height: 30, marginTop: 10, borderRadius: 6 }}>
                                <Picker.Item label="Select University" value="1" ></Picker.Item>
                            </Picker>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 5, borderWidth: 2, borderRadius: 6, height: 60 }}>
                        <TouchableOpacity>

                            <Picker style={{ width: 320, height: 30, marginTop: 10, borderRadius: 6 }}>
                                <Picker.Item label="Select Another University" Value="1" ></Picker.Item>

                            </Picker>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, borderWidth: 0, marginTop: 15 }}>
                        <Text style={{ fontWeight: 'bold' }}>Your Institutions</Text>
                    </View>
                    <View style={{ marginTop: 20, height: 100, borderWidth: 2 }}>
                        <Text>Hello</Text>
                    </View>

                    <View style={{
                        marginTop:10,
                        width: "100%",
                        fontWeight: 'bold',
                        alignItems: 'center',
                        borderWidth: 2,
                        marginLeft: 0.7,
                        
                        backgroundColor:'#48d1cc'
                    }}>
                        <TouchableOpacity>
                            <Button
                                textAlign='center'
                                color='black'
                                fontWeight='bold'
                                textAlign='center'

                            >
                                <Text >Compare Now</Text>
                            </Button>
                        </TouchableOpacity>
                    </View>



                </View>
            </View>



        );
    }
}