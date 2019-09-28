import React, { Component } from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    TouchableOpacity,
    ImageBackground,
    StatusBar
} from "react-native";

import MenuItem from './MenuItem'
import AnotherMenuItem from './AnotherMenuItem'
import ButtonComponent from '../apps/ButtonComponent'
import { primaryColor, midColor, secondaryColor, darkText } from '../../constant'


class Menu extends Component {

    render() {
        return (
            <View style={styles.homeContainer}>
                <StatusBar backgroundColor={primaryColor} />
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: darkText}}>Pilih Menu</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <ButtonComponent 
                        title='Delivery' 
                        styleBtn={{top:20, zIndex: 10, width: '40%', elevation: 5}} />
                    <ButtonComponent 
                        title='Pickup' 
                        styleBtn={{top:20, zIndex: 10, width: '40%', backgroundColor: secondaryColor, elevation: 5}} 
                        styleTxt={{color: darkText}} />
                </View>
                <View style={styles.bodyContainer}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 30, marginLeft: 25}}>
                        <Text style={{fontSize:17, fontWeight: 'bold'}}>Your Favorite</Text>
                        <MenuItem />
                        <Text style={{fontSize:17, fontWeight: 'bold'}}>Iced Coffee</Text>
                        <AnotherMenuItem />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default Menu


const styles = StyleSheet.create({
    homeContainer: {
        flex:1,
        backgroundColor: primaryColor,

    },
    headerContainer: {
        flex:1,
        backgroundColor: primaryColor,
        justifyContent:'center',
        alignItems: 'flex-start',
        marginHorizontal: 30,  
        marginTop: 40,
        marginBottom: -30
    },
    header: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },  
    bodyContainer: {
        flex:3,
        backgroundColor: secondaryColor,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    image: {
        right: 15,
        bottom: 50
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 17,
        backgroundColor: midColor,
        margin: 6,
        marginLeft: 20,
        marginTop: 7
    }
})