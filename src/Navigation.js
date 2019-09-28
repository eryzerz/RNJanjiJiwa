import React from 'react'
import {View} from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from './components/home/Home'
import Menu from './components/menu/Menu'
import Activity from './components/activity/Activity'
import {primaryColor, secondaryColor, darkColor, midColor} from './constant'
import Product from './components/products/Product'

const RootStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: null
            }
        },
        Menu: {
            screen: Menu,
            navigationOptions: {
                header: null
            }
        },
        Activity: {
            screen: Activity,
            navigationOptions: {
                header: null
            }
        },
        Product: {
            screen: Product,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
)

const BottomNav = createBottomTabNavigator(
    {
        Home: {
            screen: RootStack,
            navigationOptions: {
                tabBarLabel: ' ',
                tabBarIcon: () => (
                    <View>
                        <Icon name={'home-outline'} size={30} color={midColor} />
                    </View>
                )
            }
        },
        Menu: {
            screen: Menu,
            navigationOptions: {
                tabBarLabel: ' ',
                tabBarIcon: () => (
                    <View>
                        <Icon name={'cup'} size={30} color={midColor} />
                    </View>
                )
            }
        },
        Activity: {
            screen: Activity,
            navigationOptions: {
                tabBarLabel: ' ',
                tabBarIcon: () => (
                    <View>
                        <Icon name={'history'} size={30} color={midColor} />
                    </View>
                )
            }
        },
    },
    {
        tabBarOptions: {
            style: {
                paddingTop: 15,
                borderColor: secondaryColor,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: secondaryColor,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 7,
                },
                shadowOpacity: 0.41,
                shadowRadius: 9.11,

                elevation: 14,
            }       
        }
    }
)

export default createAppContainer(BottomNav)