import BottomSheet from 'reanimated-bottom-sheet'
import React from 'react'
import {
    View,
    Text
} from 'react-native'

class Product extends React.Component {
    renderInner = () => (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>This is the inner</Text>
        </View>
    )

    renderHeader = () => (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>This is the header</Text>
        </View>
    )

    render() {
        return (
        <View style={{flex:1}}>
            <BottomSheet
            snapPoints = {[450, 300, 100]}
            renderContent = {this.renderInner}
            renderHeader = {this.renderHeader}
            />
        </View>)
    }
}

export default Product