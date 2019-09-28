import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Modal,
    Alert,
    ScrollView,
    Dimensions,
    CheckBox,
    TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Product from '../products/Product'
import { primaryColor, secondaryColor, darkColor, midColor, darkText } from '../../constant'


class MenuItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            item: [
                {
                    name: 'Es Cocopresso',
                    url: require('../../assets/janjijiwa_menu_2.jpg'),
                    price: 21000,
                    desc: 'Cocoa dengan Expresso'
                },
                {
                    name: 'Es Kopi Jelly',
                    url: require('../../assets/janjijiwa_menu_3.jpg'),
                    price: 21000,
                    desc: 'Kopi campur jelly kenyal'
                },
                {
                    name: 'Es Mangga',
                    url: require('../../assets/janjijiwa_menu_4.jpg'),
                    price: 21000,
                    desc: 'Es dicampur dengan Mangga'
                },
            ],
            topping: [
                {
                    name: 'cincau',
                    price: '+3000',
                    checked: false
                },
                {
                    name: 'Coffe Jelly',
                    price: '+3000',
                    checked: false
                },
                {
                    name: 'Extra Expresson',
                    price: '+3000',
                    checked: false
                },
                {
                    name: 'Vanilla Ice Cream',
                    price: '+8000',
                    checked: false
                },
                {
                    name: 'Matcha Ice Cream',
                    price: '+8000',
                    checked: false
                },
            ],
            level: [
                'Normal',
                'Half',
                'Less'
            ]
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        const { item, topping, level } = this.state
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <ScrollView>
                        <View style={{flex:1, alignItems: 'center', backgroundColor: secondaryColor}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', margin: 30, marginBottom:10, height: 100}}>
                                <ImageBackground source={require('../../assets/janjijiwa_menu_7.jpg')} style={{flex: 1, width: '90%', height: '100%'}} />
                                <View style={{flex: 3, alignSelf: 'center'}}>
                                    <Text style={{fontWeight:'bold'}}>Es Cocopresso</Text>
                                    <Text>Rp 21.000</Text>
                                    <Text style={{fontSize: 10}}>Cocoa campur Expresso</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style={{color: midColor, fontSize: 16}} onPress={() => this.setModalVisible(false)}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: Dimensions.get('window').width * 0.8, borderBottomWidth: 1}}></View>
                            <View style={{alignSelf: 'flex-start', paddingHorizontal: 40, marginTop: 10}}>
                                <Text style={{fontWeight: 'bold', fontSize: 17}}>Additional Topping:</Text>
                            </View>
                            <View style={{justifyContent: 'flex-start', marginTop: 10}}>
                                {topping.map((val, id) => (
                                    <View key={id} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <View style={{flexDirection: 'row', marginLeft: 10}}>
                                            <CheckBox
                                                value={this.state.checked}
                                                onValueChange={() => this.checkHandler(id)}
                                            />
                                            <Text>{val.name}</Text>
                                        </View>
                                        <View style={{marginLeft: 150}}>
                                            <Text>{val.price}</Text>
                                        </View>
                                        
                                    </View>
                                ))}
                            </View>
                            <View style={{alignSelf: 'flex-start', paddingHorizontal: 40, marginTop: 10}}>
                                <Text style={{fontWeight: 'bold', fontSize: 17}}>Sugar Level:</Text>
                            </View>
                            <View style={{marginTop: 10}}>
                                {level.map((val, id) => (
                                    <View key={id} style={{flexDirection: 'row', marginLeft: -162}}>
                                        <View style={{flexDirection: 'row'}}>
                                            <CheckBox
                                                value={this.state.checked}
                                                onValueChange={() => this.checkHandler(id)}
                                            />
                                            <Text style={{alignSelf: 'center'}}>{val}</Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                            <View style={{alignSelf: 'flex-start', paddingHorizontal: 40, marginTop: 10}}>
                                <Text style={{fontWeight: 'bold', fontSize: 17}}>Ice Level:</Text>
                            </View>
                            <View style={{marginTop: 10}}>
                                {level.map((val, id) => (
                                    <View key={id} style={{flexDirection: 'row', marginLeft: -162}}>
                                        <View style={{flexDirection: 'row'}}>
                                            <CheckBox
                                                value={this.state.checked}
                                                onValueChange={() => this.checkHandler(id)}
                                            />
                                            <Text style={{alignSelf: 'center'}}>{val}</Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                            <View style={{alignSelf: 'flex-start', paddingHorizontal: 40, marginTop: 10}}>
                                <Text style={{fontWeight: 'bold', fontSize: 17}}>Special Instructions:</Text>
                            </View>
                            <TextInput placeholder='Add Instructions' style={{width: Dimensions.get('window').width * 0.8, height: Dimensions.get('window').height * 0.05, borderWidth: 1, borderColor: midColor, borderRadius: 6}}/>
                            <View style={{alignSelf: 'flex-start', paddingHorizontal: 40, marginTop: 10}}>
                                <Text style={{fontWeight: 'bold', fontSize: 17}}>Qty:</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 30, marginTop: 10}}>
                                <TouchableOpacity 
                                    style={{marginHorizontal: 7, backgroundColor: darkColor, justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 10, elevation: 10, marginBottom: 10, height: 40, width: 40}} 
                                    >
                                    <Text style={{textAlign: 'center', color: secondaryColor, fontWeight: 'bold', fontSize: 17}}>-</Text>
                                </TouchableOpacity>
                                <View style={{backgroundColor: 'white',justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 10, elevation: 10, marginBottom: 10, height: 40, width: 40}}>
                                    <Text>1</Text>
                                </View>
                                <TouchableOpacity 
                                    style={{marginHorizontal: 7, backgroundColor: darkColor,justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 10, elevation: 10, marginBottom: 10, height: 40, width: 40}} 
                                    >
                                    <Text style={{color: secondaryColor}}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </Modal>
                {item.map((val, id) => (
                    <View key={id} style={{flexDirection: 'row', paddingHorizontal: 10, marginHorizontal: 10, marginBottom: 10}}>
                        <ImageBackground source={val.url} style={{flex: 1, width: '60%', height: '100%'}} />
                        <View style={{flex: 3}}>
                            <Text style={{fontWeight:'bold'}}>{val.name}</Text>
                            <Text>Rp {val.price}</Text>
                            <Text style={{fontSize: 10}}>{val.desc}</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Icon name={'heart-outline'} size={30} color={darkColor} style={{flex:1}} />
                            <View style={{flex:1}}>
                                <TouchableOpacity 
                                    style={styles.increment}
                                    onPress={() => this.setModalVisible(true)}
                                    >
                                    <Text style={{ color: secondaryColor}}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </View>    
        )
    }
}

export default MenuItem

const styles = StyleSheet.create({
    increment: {
        backgroundColor: darkColor,
        justifyContent: 'center',
        elevation: 2,
        width: 30,
        height: 30,
        borderRadius:6,
        alignItems: 'center',
    }
})