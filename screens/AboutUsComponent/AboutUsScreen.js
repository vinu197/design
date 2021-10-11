import React from 'react';
import{ View, Text, SafeAreaView, StyleSheet, StatusBar, Platform, ScrollView, Dimensions } from 'react-native';
import { COLORS, FONTS, GLOBALSTYLES } from '../../constants/theme';
import { Appbar } from 'react-native-paper'

const { width, height } = Dimensions.get('screen')

function AboutUsScreen({ navigation }) {
    return(
        <SafeAreaView style={styles.container}>
        <Appbar.Header style={GLOBALSTYLES.appBarView}>
            <Appbar.Action icon="chevron-left" onPress={() => navigation.goBack()} color={COLORS.primary} size={30} />
            <Appbar.Content title='About Us' titleStyle={{ ...FONTS.appFontBold, color: COLORS.primary, fontSize: 24 }} />
        </Appbar.Header>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.mainComponent}>
                <Text style={styles.title}>Shree Mumbai Kutchi Lohar Gnati Mandal</Text>
                <Text style={styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Ullamcorper sit amet risus nullam eget felis. Imperdiet dui accumsan sit amet. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. In est ante in nibh mauris cursus. Eu augue ut lectus arcu bibendum at. Lorem donec massa sapien faucibus et molestie ac feugiat. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Volutpat sed cras ornare arcu dui vivamus arcu felis. Sit amet aliquam id diam. Laoreet id donec ultrices tincidunt arcu non sodales neque. Montes nascetur ridiculus mus mauris vitae. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Tortor pretium viverra suspendisse potenti. Amet nulla facilisi morbi tempus iaculis. Nunc consequat interdum varius sit amet. In dictum non consectetur a erat nam at. Est sit amet facilisis magna etiam tempor orci eu. A lacus vestibulum sed arcu non odio euismod lacinia at. Bibendum ut tristique et egestas quis. Tincidunt arcu non sodales neque sodales ut.
                </Text>
                <View style={{ flexDirection: 'row', padding: 16 }}>
                    <View>
                        <View style={styles.leftView}></View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.rightView}></View>
                        <View style={{ ...styles.rightView, marginTop: 10 }}></View>
                    </View>
                </View>
            </View>

        </ScrollView>
    </SafeAreaView>
    );
}

export default AboutUsScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: COLORS.white
    },
    mainComponent: {
        backgroundColor: COLORS.componentBackgroundColor,
        borderColor: COLORS.white,
        borderRadius: 8,
        margin: 16,
    },
    title: {
        ...FONTS.appFontMedium,
        padding: 16,
        textAlign: 'center'
    },
    content: {
        ...FONTS.appFontSemiBold,
        padding: 16,
        paddingTop: 8
    },
    leftView: {
        width: width * 0.55,
        marginRight: 8,
        borderColor: COLORS.borderColor,
        borderWidth: 1,
        borderRadius: 8,
        height: 200
    },
    rightView: {
        width: width * 0.25,
        borderColor: COLORS.borderColor,
        borderWidth: 1,
        borderRadius: 8,
        height: 95
    },
})
 