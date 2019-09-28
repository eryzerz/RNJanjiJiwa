import React, { Component } from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    TouchableOpacity
} from "react-native";
import { Card } from "react-native-elements";

import { primaryColor, secondaryColor } from "../../constant";

class Promo extends Component {
    scrollX = new Animated.Value(0);

    render() {
        let position = Animated.divide(this.scrollX, 300);
        const { promoImage } = this.props;
        return (
        <View style={styles.parentContainer}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                style={styles.scrollContainer}
                horizontal={true}
                pagingEnabled={true}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: this.scrollX } } }
                ])}
                scrollEventThrottle={16}
            >
                {promoImage.map((val, id) => (
                    <TouchableOpacity key={id}>
                        <Card containerStyle={styles.container}>
                            <Image
                                style={styles.image}
                                source={val}
                            />
                        </Card>
                    </TouchableOpacity>
                    
                ))}
            </ScrollView>
            <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                {promoImage.map((val, id) => {
                    let opacity = position.interpolate({
                        inputRange: [id - 1, id, id + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    });
                return (
                    <Animated.View
                        key={id}
                        style={{
                            opacity,
                            height: 10,
                            width: 10,
                            backgroundColor: primaryColor,
                            marginTop: 2,
                            marginHorizontal: 8,
                            borderRadius: 20,
                        }}
                    />
                );
            })}
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    parentContainer: {
        marginHorizontal: 20,
        marginTop: 10
    },
    container: {
        marginBottom: 10,
        padding: 0, 
        borderRadius: 10, 
        elevation: 7,
    },
    scrollContainer: {
        paddingTop: 15
    },
    image: {
        height: 130,
        width: 310,
        borderRadius: 10,
    },
});

export default Promo;