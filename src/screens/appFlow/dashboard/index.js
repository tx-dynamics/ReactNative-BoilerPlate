import React, { useContext, useState, useEffect } from 'react'
import { View, Text, StatusBar, FlatList } from 'react-native'
import { DrawerActions } from '@react-navigation/native';

import { HelpingMethods, appIcons, colors } from '../../../services'
import { Header, Loader } from '../../../components';
import { styles } from './styles';
import themeContext from '../../../services/config/themeContext';
import { GeneralFetch, callApi } from '../../../network/apiCaller';
import messaging from '@react-native-firebase/messaging';
import { FlashAlert } from '../../../components/FlashMessage';
import { Method } from '../../../network/NetworkManger';


const Dashboard = ({ navigation }) => {
  const theme = useContext(themeContext)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])


  useEffect(() => {

    //Notification On Background
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage,
      );
    });

    //Notification On Quit
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
            remoteMessage.data,
          );
        }
      });

    //Notification On Foreground
    messaging().onMessage(async remoteMessage => {
      console.log('Notification On Foreground', remoteMessage);
      FlashAlert("S", "Notification", remoteMessage.notification.body, () => { notificationClicked(remoteMessage) })
    });
  }, [])


  const notificationClicked = (data) => {
    console.log(data)
  }




  useEffect(() => {
    getData()
  }, [])



  const getData = async () => {
    try {
      const endPoint = '';
      await callApi(Method.GET, endPoint, null,
        res => {
          if (res?.status === 200) {
            setData(res)
          }
          else {
            console.log('Error')
          }
        },
        err => {
          console.log(err.message)

        });
    } catch (error) {
      console.log(error);
    }
  }

  const renderDashboardList = () => {
    return (
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.itemBox}>
              <Text style={{ color: colors.white }}>{item.movie}</Text>
            </View>
          )
        }}
        showsVerticalScrollIndicator={false}

      />
    )
  }


  return (
    <View style={[styles.container, { backgroundColor: theme.background }]} >
      <StatusBar backgroundColor={theme.background} barStyle={theme.theme === 'dark' ? 'light-content' : 'dark-content'} />
      <Header leftIcon={appIcons.drawer} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} title={'Dashboard'} />
      <View style={[styles.wrapper, { backgroundColor: theme.background }]}>
        {
          loading ?
            <Loader type={"dashboard"} />
            :
            renderDashboardList()
        }
      </View>
    </View>
  )
}

export default Dashboard