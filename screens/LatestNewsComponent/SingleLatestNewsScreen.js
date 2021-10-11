import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { COLORS, FONTS, IMAGES } from '../../constants/theme';


const SingleLatestNewsScreen = ({ item }) => {
    return (
        <View style={styles.mainComponent}>
            <View style={styles.imageBgViewStyles}><Image source={item.image} style={styles.newsImageStyle} /></View>
            <View style={{ flex: 1, flexDirection: "column", marginHorizontal: 8, paddingBottom: 4 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.appFontSemiBold, color: COLORS.black }}>Avsaan Noondh</Text>
                    <Text style={{ ...FONTS.appFontOpenSansRegular, fontSize: 12, color: COLORS.labelColor }}>12 Hours Ago</Text>
                </View>
                <Text style={{ ...FONTS.appFontLight, color: COLORS.black }}>Lorem Ipsum is...........dummy</Text>
            </View>
        </View>
    )
}

export default SingleLatestNewsScreen;

const styles = StyleSheet.create({

    mainComponent: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: COLORS.white,
        marginBottom: 8,
        borderRadius: 8,
        padding: 8
    },

    titleLabelStyles: {

    },

    imageBgViewStyles: {
        borderColor: COLORS.borderColor,
        borderWidth: 0.1,
        borderRadius: 4,
        padding: 4,
        backgroundColor: COLORS.titleRed
    },
    newsImageStyle: {
        width: 44,
        height: 44,
        borderRadius: 8
    },

})