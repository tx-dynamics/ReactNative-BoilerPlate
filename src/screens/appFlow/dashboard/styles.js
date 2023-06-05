import { StyleSheet } from 'react-native';
import { colors, wp } from '../../../services';





export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemBox: {
        height: 120,
        width: wp(42),
        borderRadius: 12,
        backgroundColor: colors.theme,
        margin: 12,
        justifyContent: "center",
        alignItems: "center",
        padding: 12
    }
})