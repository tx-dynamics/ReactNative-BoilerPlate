// Import React
import React, { useState, useRef } from 'react';
// Import required components
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

// Import Map and Marker
import MapView, { Marker, Polyline } from 'react-native-maps';
import { appIcons, colors, wp } from '../../../services';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';




const MapExample = () => {
    const currentLocation = {
        latitude: 31.449590774585772,
        longitude: 74.28036404773593,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    const [current, setCurrent] = useState(currentLocation)
    const mapRef = useRef();

    const recenterClicked = () => {
        mapRef.current?.animateToRegion({
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
        });
        setCurrent({
            latitude: 31.449590774585772,
            longitude: 74.28036404773593,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    styles={{
                        container: { zIndex: 1, justifyContent: "center", width: wp(100), position: "absolute" },
                        listView: { position: "absolute", top: 50, width: "100%", height: 130, alignSelf: "center" },
                        poweredContainer: { display: "none" },
                        textInput: {
                            height: 45,
                            color: 'black',
                            backgroundColor: colors.grey,
                        },
                        predefinedPlacesDescription: {
                            color: 'red',
                        },
                    }}
                    placeholder='Search Place'
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        mapRef.current?.animateToRegion({
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                            latitudeDelta: 0.02,
                            longitudeDelta: 0.02,
                        });
                        setCurrent({
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                            latitudeDelta: 0.02,
                            longitudeDelta: 0.02,
                        })

                    }}
                    query={{
                        key: 'AIzaSyDeCOtnYSOwBTdTwYHl1h1QkuEqsg5yvHY',
                        language: 'en',
                    }}
                />
                <MapView
                    ref={mapRef}
                    style={styles.mapStyle}
                    initialRegion={currentLocation}
                >
                    <Polyline
                        coordinates={[
                            { "longitude": 74.27628424018621, "latitude": 31.442034764842926 },
                            { "longitude": 74.27859127521515, "latitude": 31.455809488434063 }
                        ]}
                        strokeColor={colors.theme} // fallback for when `strokeColors` is not supported by the map-provider
                        strokeWidth={4}
                    />
                    <Marker
                        draggable

                        coordinate={{
                            latitude: current.latitude,
                            longitude: current.longitude,
                        }}
                        onDragEnd={
                            (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                        }
                        title={'Test Marker'}
                        description={'This is a description of the marker'}
                    />
                </MapView>
                <TouchableOpacity onPress={() => { recenterClicked() }} style={styles.recenterBox}>
                    <Image style={styles.recenterIcon} source={appIcons.profileTab} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default MapExample;


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    recenterBox: {

        backgroundColor: colors.theme,
        borderRadius: 100,
        padding: 8,
        bottom: 0,
        right: 0,
        position: "absolute",

        alignSelf: "flex-end",
        margin: 16
    },
    recenterIcon: {
        height: 26,
        width: 26,
        tintColor: colors.white,
        resizeMode: "contain"
    }
});