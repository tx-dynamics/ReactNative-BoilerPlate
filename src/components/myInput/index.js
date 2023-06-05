import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { colors, hp, wp } from '../../services';


export const MyInput = (props) => {
    return (
        <TextInput
            value={props.value}
            placeholder={props.placeholder}
            onChangeText={(text) => { props.setValue(text) }}
            style={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        height: hp(6),
        width: wp(90),
        marginTop: hp(2),
        alignSelf: "center",
        borderColor: colors.theme,
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: wp(2)


    },

})