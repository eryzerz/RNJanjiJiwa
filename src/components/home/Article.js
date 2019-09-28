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

import { primaryColor, secondaryColor, darkColor, darkText, midColor} from "../../constant";


class Article extends Component {
    render() {
        const { article} = this.props
        return (
            <View>
                <View style={{margin: 10}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: darkText}}>Artikel Untukmu</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {article.map((val, id) => (
                                <View key={id} style={styles.cardContainer}>
                                    <ImageBackground source={val.url} imageStyle={{borderTopLeftRadius: 15, borderTopRightRadius: 15}} style={{width: '100%', height: '80%'}}/>
                                    <View style={styles.headlineContainer}>
                                            <Text style={{fontWeight: 'bold', color: darkText}}>
                                                {val.title}
                                            </Text>
                                            <Text style={{color: midColor}}>
                                                <Icon name={'history'} size={14} color={midColor} />
                                                {val.updatedAt}
                                            </Text>
                                    </View>
                                </View>
                        ))}
                </ScrollView>
            </View>
        )
    }
}

export default Article


const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 15,
        elevation: 5,
        height: 300,
        width: 200,
        marginHorizontal: 10,
        marginBottom: 40,
        backgroundColor: secondaryColor,
        zIndex: 0,
    },
    headlineContainer: {
        paddingHorizontal: 15,
        marginTop: -25,
    },
})