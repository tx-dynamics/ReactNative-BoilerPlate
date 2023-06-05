import React, { useContext, useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { DrawerActions } from '@react-navigation/native';

import { appIcons } from '../../../services'
import { Header, Loader } from '../../../components';
import { styles } from './styles';
import themeContext from '../../../services/config/themeContext';

const Profile = ({ navigation }) => {
    const theme = useContext(themeContext)
    const [loading, setLoading] = useState(true)

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]} >
            <StatusBar backgroundColor={theme.background} barStyle={theme.theme === 'dark' ? 'light-content' : 'dark-content'} />
            <Header leftIcon={appIcons.drawer} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} title={'Profile'} />
            <View style={[styles.wrapper, { backgroundColor: theme.background }]}>
                {
                    loading ?
                        <Loader type={"profile"} />
                        :
                        <Text style={{ color: theme.color, fontSize: 20 }}>Profile Screen</Text>
                }
            </View>
        </View>
    )
}

export default Profile