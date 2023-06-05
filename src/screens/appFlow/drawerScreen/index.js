import React, { useContext } from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { DrawerActions } from '@react-navigation/native'
import { EventRegister } from 'react-native-event-listeners';
import { useDispatch } from 'react-redux';

import { appIcons, colors, hp, routes, wp } from '../../../services';
import { userSave } from '../../../redux/Slices/splashSlice';
import themeContext from '../../../services/config/themeContext';


const DrawerScreen = ({ navigation }) => {
    const theme = useContext(themeContext)

    const dispatch = useDispatch()

    const handleLogout = async () => {
        dispatch(userSave(null))
        navigation.replace(routes.auth)
    }
    let dark = {
        theme: 'red',
        themeSecondary: '#0081FF',
        statusBarLight: '#FDF9F2',
        lightBackground: '#f5f5f5',
        lightText: '#666666',
        white: '#FFFFFF',
        black: '#000000',
        lightBlack: '#333333',
        grey: '#D9D9D9',
        dividerColor: '#DADADA',
        dividerColor2: '#C7C7C7',
        green: '#4CC26C',
        greyLight: '#E9E9E9',
        errorColor: '#FF0000',
        textRed: "#DA2828",
        placeholderColor: '#cccccc',
    }

    let light = {
        theme: 'blue',
        themeSecondary: '#0081FF',
        statusBarLight: '#FDF9F2',
        lightBackground: '#f5f5f5',
        lightText: '#666666',
        white: '#FFFFFF',
        black: '#000000',
        lightBlack: '#333333',
        grey: '#D9D9D9',
        dividerColor: '#DADADA',
        dividerColor2: '#C7C7C7',
        green: '#4CC26C',
        greyLight: '#E9E9E9',
        errorColor: '#FF0000',
        textRed: "#DA2828",
        placeholderColor: '#cccccc',
    }


    const handleChatPress = async () => {
        let data = {
            _id: "473298749324",
            name: "Partner name",
            image: "",
            email: "partner@gmail.com",
            isGroup: false
        }
        navigation.navigate(routes.chat, {
            chatPartner: data
        })

    }

    const handleGroupPress = async () => {
        let data = {
            _id: "4732987sdsd49324",
            name: "Group name",
            image: "",
            email: "Group@gmail.com",
            isGroup: true
        }
        navigation.navigate(routes.chat, {
            chatPartner: data
        })

    }


    return (
        <View style={{ flex: 1, backgroundColor: theme.background }}>
            <View style={{ flex: 1, backgroundColor: theme.background, padding: wp(5) }}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <Image source={appIcons.cross} style={{ height: 19, width: 19, tintColor: theme.theme === 'dark' ? colors.white : colors.black }} resizeMode={"contain"} />
                </TouchableOpacity>
                <View style={{ paddingTop: hp(10), flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: theme.text, fontSize: 16 }}>Dark Mode</Text>
                    <ToggleSwitch
                        isOn={theme.theme === 'dark' ? true : false}
                        onColor={colors.green}
                        offColor={colors.lightBlack}
                        labelStyle={{ display: 'none' }}
                        size='small'
                        onToggle={(value) => {
                            EventRegister.emit("changeTheme", value)

                        }
                        }
                    />
                </View>
                <TouchableOpacity onPress={() => handleChatPress()} style={{ paddingTop: hp(5) }}>
                    <Text style={{ color: theme.text, fontSize: 16 }}>Private Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleGroupPress()} style={{ paddingTop: hp(5) }}>
                    <Text style={{ color: theme.text, fontSize: 16 }}>Group Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(routes.pagination)} style={{ paddingTop: hp(5) }}>
                    <Text style={{ color: theme.text, fontSize: 16 }}>Paginated List</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(routes.mapExample)} style={{ paddingTop: hp(5) }}>
                    <Text style={{ color: theme.text, fontSize: 16 }}>Map View</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleLogout()} style={{ paddingTop: hp(5) }}>
                    <Text style={{ color: theme.text, fontSize: 16 }}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default DrawerScreen;


