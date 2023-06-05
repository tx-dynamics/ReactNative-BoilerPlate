import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { colors, hp, loaderStyles, wp } from '../../services';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';



export const Loader = (props) => {

    const renderContent = () => {
        if (props.type == "dashboard") {
            return (
                <View>
                    <SkeletonPlaceholder >
                        <SkeletonPlaceholder.Item margin={12} width={wp(90)} height={160} borderRadius={12} />
                    </SkeletonPlaceholder>
                    {renderGrid()}
                </View>
            )
        }
        if (props.type == "profile") {
            return (
                <View>
                    <SkeletonPlaceholder >
                        <SkeletonPlaceholder.Item alignSelf="center" margin={12} width={wp(40)} height={wp(40)} borderRadius={100} />
                        <SkeletonPlaceholder.Item alignSelf="center" margin={12} width={wp(90)} height={wp(10)} borderRadius={12} />
                    </SkeletonPlaceholder>
                    {renderGrid()}
                </View>
            )
        }
    }

    const renderGrid = () => {
        return (
            <FlatList
                numColumns={2}
                data={new Array(6)}
                renderItem={() => {
                    return (
                        <SkeletonPlaceholder >
                            <SkeletonPlaceholder.Item margin={12} width={wp(42)} height={120} borderRadius={12} />
                        </SkeletonPlaceholder>
                    )
                }}
                showsVerticalScrollIndicator={false}

            />
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {renderContent()}
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        height: hp(100),
        width: wp(100),
        position: 'absolute',
        zIndex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'

    },
    spinerStyle: {
        marginBottom: hp(0)
    },
})