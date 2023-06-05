import React, { useContext } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { DrawerActions } from '@react-navigation/native';

import { appIcons } from '../../../services'
import { Header } from '../../../components';
import { styles } from './styles';
import themeContext from '../../../services/config/themeContext';

const Favorite = ({ navigation }) => {
    const theme = useContext(themeContext)

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]} >
            <StatusBar backgroundColor={theme.background} barStyle={theme.theme === 'dark' ? 'light-content' : 'dark-content'} />
            <Header leftIcon={appIcons.drawer} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} title={'Favorite'} />
            <View style={[styles.wrapper, { backgroundColor: theme.background }]}>
                <Text style={{ color: theme.color, fontSize: 20 }}>Favorite Screen</Text>
            </View>
        </View>
    )
}

export default Favorite