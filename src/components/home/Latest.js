import React, { Component } from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { primaryColor, secondaryColor, darkColor, darkText} from "../../constant";


class Latest extends Component {
    render() {
        const { categories, item } = this.props
        return (
            <View>
                <View style={{margin: 10}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: darkText}}>Terakhir Dibeli</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {item.map((val, id) => (
                            <View key={id}>
                                <View style={styles.cardContainer}>
                                    <ImageBackground source={val.url} style={{alignSelf: 'center', width: '90%', height: '80%'}}/>
                                    <View style={styles.headlineContainer}>
                                        <View>
                                            <View>
                                                <Text style={{fontWeight: 'bold'}}>
                                                    {val.name}
                                                </Text>
                                            </View>
                                            <View>
                                                <Text>
                                                    Rp {val.price}
                                                </Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Icon name={'heart-outline'} size={20} color={darkColor} />
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.increment}>
                                    <Text style={{fontSize: 20, color: secondaryColor}}>+</Text>
                                </TouchableOpacity>
                            </View>    
                        ))}
                </ScrollView>
            </View>
        )
    }
}

export default Latest


const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 15,
        elevation: 7,
        height: 250,
        padding: 30,
        width: 200,
        marginHorizontal: 10,
        marginBottom: 40,
        backgroundColor: secondaryColor,
        zIndex: 0,
    },
    headlineContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    increment: {
        backgroundColor: darkColor,
        justifyContent: 'center',
        elevation: 8,
        width: 40,
        height: 40,
        marginLeft: 140,
        marginTop: 220,
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 7,
        zIndex: 2,
    }
})