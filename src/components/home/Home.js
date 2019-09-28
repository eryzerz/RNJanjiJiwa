import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    CheckBox,
    TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


import ButtonComponent from '../apps/ButtonComponent'
import Promo from './Promo'
import ProductCard from './ProductCard'
import Latest from './Latest'
import Article from './Article'
import {primaryColor, secondaryColor, midColor, darkText, darkColor}  from '../../constant'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            promoImage: [
                require('../../assets/slideshow_janjijiwa_1.jpg'),
                require('../../assets/slideshow_janjijiwa_2.jpg'),
                require('../../assets/slideshow_janjijiwa_3.jpg'),
                require('../../assets/slideshow_janjijiwa_4.jpg')
            ],
            categories: [
                'Popular',
                'Untukmu',
                'Kopi',
                'Teh',
                'Snack',
            ],
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
                {
                    name: 'Es Cincau 2',
                    url: require('../../assets/janjijiwa_menu_5.jpg'),
                    price: 21000,
                    desc: 'Es dicampur dengan dua cincau'
                },
                {
                    name: 'Es Gatau',
                    url: require('../../assets/janjijiwa_menu_6.jpg'),
                    price: 21000,
                    desc: 'Es gatau apaan'
                },
                {
                    name: 'Es Kopi',
                    url: require('../../assets/janjijiwa_menu_7.jpg'),
                    price: 21000,
                    desc: 'Es dicampur dengan kopi'
                }
            ],
            article: [
                {
                    title: 'Berikut 5 khasiat kopi, yang ke 4 akan membuatmu terkejut',
                    url: require('../../assets/card_1.jpg'),
                    updatedAt: '1 hr ago'
                },
                {
                    title: 'Berikut 5 jenis kopi unik, yang ke 5 paling unik',
                    url: require('../../assets/card_1.jpg'),
                    updatedAt: '1 day ago'
                },
                {
                    title: 'Begini cara meracik kopi yang benar!',
                    url: require('../../assets/card_1.jpg'),
                    updatedAt: '2 days ago'
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

    checkHandler = (id) => {
        let index = this.state.topping[id]
        let status = index.checked
        this.setState({
            status: !status
        })
    }

    render() {
        const { promoImage, categories, item, article } = this.state
        return (
        
            <View style={styles.homeContainer}>
                <StatusBar backgroundColor={primaryColor} />
                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.avatar}></View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{color: darkText, alignSelf: 'center', marginLeft: 10}}>Halo</Text>
                                <Text style={{color: darkText, alignSelf: 'center', fontWeight: 'bold'}}>, Eryz!</Text>
                            </View>   
                        </View>
                        <View style={{marginRight: 15}}>
                            <Icon name={'bell-outline'} size={40} color={midColor} />
                        </View>
                    </View>
                    <View>
                        <Image style={styles.image} source={require('../../assets/header.pnd.png')} />
                    </View>
                </View>
                <View style={{alignItems: 'center'}}>
                    <ButtonComponent title='Pesan Sekarang!' styleBtn={{top:20, zIndex: 10}} onPress={() => this.props.navigation.navigate('Menu')}/>
                </View>
                <View style={styles.bodyContainer}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 20}}>
                        <Promo promoImage={promoImage} />
                        <ProductCard categories={categories} item={item} />
                        <Latest item={item}/>
                        <Article article={article} />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeContainer: {
        flex:1,
        backgroundColor: primaryColor,

    },
    headerContainer: {
        flex:1,
        backgroundColor: primaryColor
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


