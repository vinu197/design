import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, Image } from 'react-native';
import { COLORS, FONTS, GLOBALSTYLES, IMAGES } from '../../constants/theme';
import { Appbar } from 'react-native-paper'
import IonIcons from 'react-native-vector-icons/Ionicons'

function ContactUsScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header style={GLOBALSTYLES.appBarView}>
                <Appbar.Action icon="chevron-left" onPress={() => navigation.goBack()} color={COLORS.primary} size={30} />
                <Appbar.Content title='Contact Us' titleStyle={{ ...FONTS.appFontBold, color: COLORS.primary, fontSize: 24 }} />
            </Appbar.Header>
            <View style={{ flex: 1, padding: 16 }}>
                <View style={styles.mainComponent}>
                    <Text style={styles.title}>Contact Details</Text>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.contentView}>
                            <IonIcons name="md-location-outline" size={24} style={{ color: COLORS.labelColor }}></IonIcons>
                            <Text style={styles.contentTitleStyle}>
                                15, Laxmi Narayan Lane, Matunga (C. R.), Mumbai, Maharashtra – 400019.
                            </Text>
                        </View>
                        <View style={styles.contentView}>
                            <IonIcons name="md-call-outline" size={24} style={{ color: COLORS.labelColor }}></IonIcons>
                            <Text style={styles.contentTitleStyle}>+91 9820364627</Text>
                        </View>
                        <View style={styles.contentView}>
                            <IonIcons name="md-mail-open-outline" size={24} style={{ color: COLORS.labelColor }}></IonIcons>
                            <Text style={styles.contentTitleStyle}>info@mumbaikutchilohar.com</Text>
                        </View>
                    </View>
                </View>
                <View style={{ ...styles.mainComponent, marginTop: 16 }}>
                    <Text style={styles.title}>Forms</Text>
                    <ScrollView style={styles.formScrollStyle}
                        horizontal={true}
                        alwaysBounceHorizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{ ...styles.formItemView, backgroundColor: COLORS.cyan }}>
                            <Image source={IMAGES.arthik_form} style={styles.formImageStyle} />
                            <Text style={styles.formTitleStyle}>Aarthik</Text>
                        </View>
                        <View style={{ ...styles.formItemView, backgroundColor: COLORS.lightYellow }}>
                            <Image source={IMAGES.medical_form} style={styles.formImageStyle} />
                            <Text style={styles.formTitleStyle}>Medical</Text>
                        </View>
                        <View style={{ ...styles.formItemView, backgroundColor: COLORS.cyan }}>
                            <Image source={IMAGES.education_form} style={styles.formImageStyle} />
                            <Text style={styles.formTitleStyle}>Education</Text>
                        </View>
                        <View style={{ ...styles.formItemView, backgroundColor: COLORS.lightYellow }}>
                            <Image source={IMAGES.membership_form} style={styles.formImageStyle} />
                            <Text style={styles.formTitleStyle}>Membership</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ContactUsScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: COLORS.white
    },
    mainComponent: {
        backgroundColor: COLORS.componentBackgroundColor,
        borderColor: COLORS.white,
        borderRadius: 8,
        padding: 16,
    },
    title: {
        ...FONTS.appFontBold,
        color: COLORS.primary
    },
    contentView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    contentTitleStyle: {
        ...FONTS.appFontSemiBold,
        color: COLORS.black,
        marginLeft: 8,
        flex: 1
    },
    formScrollStyle: {
        marginTop: 8,
    },
    formItemView: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formImageStyle: {
        width: 60,
        height: 60
    },
    formTitleStyle: {
        ...FONTS.appFontOpenSansRegular,
        color: COLORS.black,
        marginTop: 4
    }
})