import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Platform, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, IMAGES } from '../../constants/theme';
import { Appbar, Divider, Avatar } from 'react-native-paper'

function SearchProfileScreen({ route, navigation }) {

    var mobileNumber = "9987458858"
    mobileNumber = mobileNumber.replace(/^.{6}/g, '******')
    const { item } = route.params;

    const listData = [
        {
            id: 1,
            image: IMAGES.demo_searchPhoto,
            title: 'Demo Search Photo'
        },
        {
            id: 2,
            image: IMAGES.demoPhoto,
            title: 'Demo Photo'
        },
        {
            id: 3,
            image: IMAGES.demoPhoto2,
            title: 'Demo Photo 2'
        },
        {
            id: 4,
            image: IMAGES.demo_searchPhoto,
            title: 'Demo Search Photo'
        },
        {
            id: 5,
            image: IMAGES.demoPhoto,
            title: 'Demo Photo'
        },
        {
            id: 6,
            image: IMAGES.demoPhoto2,
            title: 'Demo Photo 2'
        },
        {
            id: 7,
            image: IMAGES.demoPhoto2,
            title: 'Demo Photo 2'
        },
        {
            id: 8,
            image: IMAGES.demoPhoto2,
            title: 'Demo Photo 2'
        }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header style={{ backgroundColor: COLORS.white, height: 40 }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} color={COLORS.secondary} />
                <Appbar.Content title='Directory' titleStyle={{ ...FONTS.appFontBold, color: COLORS.secondary }} />
            </Appbar.Header>
            <ScrollView >
                <View style={{ flex: 1 }}>
                    <View style={{ ...styles.mainComponent }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.circularView}>
                                <Image source={item.image} style={styles.profileImageStyle}></Image>
                            </View>
                            <View style={{ flexDirection: 'column', paddingLeft: 8 }}>
                                <Text style={{ ...styles.titleStyle, textDecorationLine: 'underline' }}>{item.title}</Text>
                                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                    <Text style={styles.labelStyle}>Area:</Text>
                                    <Text style={styles.contentStyle}>Grant Road</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.labelStyle}>Age:</Text>
                                    <Text style={styles.contentStyle}>21 Years</Text>
                                </View>
                            </View>
                        </View>
                        <Divider style={{ backgroundColor: COLORS.labelColor, marginTop: 16, height: 1.2 }}></Divider>
                        <View style={{ marginTop: 12 }}>
                            <View style={styles.singleRowView}>
                                <Text style={styles.labelStyle}>Native Place:</Text>
                                <Text style={styles.contentStyle}>Samkhiyali</Text>
                            </View>
                            <View style={styles.singleRowView}>
                                <Text style={styles.labelStyle}>Devsthan:</Text>
                                <Text style={styles.contentStyle}>Bhuj</Text>
                            </View>
                            <View style={styles.singleRowView}>
                                <Text style={styles.labelStyle}>Kuldevi:</Text>
                                <Text style={styles.contentStyle}>Vishohast Mata</Text>
                            </View>
                            <View style={styles.singleRowView}>
                                <Text style={styles.labelStyle}>Marital Status:</Text>
                                <Text style={styles.contentStyle}>Vishohast Mata</Text>
                            </View>
                            <View style={styles.singleRowView}>
                                <Text style={styles.labelStyle}>Mobile Number:</Text>
                                <Text style={styles.contentStyle}>{mobileNumber}</Text>
                            </View>
                            <View style={styles.singleRowView}>
                                <Text style={styles.labelStyle}>Place of Birth:</Text>
                                <Text style={styles.contentStyle}>Mumbai</Text>
                            </View>
                            <View style={styles.singleRowView}>
                                <Text style={styles.labelStyle}>Education:</Text>
                                <Text style={styles.contentStyle}>S.S.C</Text>
                            </View>
                            <View style={styles.singleRowView}>
                                <Text style={styles.labelStyle}>Occupation:</Text>
                                <Text style={styles.contentStyle}>Self Employed</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ ...styles.mainComponent, marginTop: 0 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.titleStyle}>Family Members</Text>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={listData}
                                renderItem={({ item, index }) =>
                                    <View style={{ marginTop: 4 }}>
                                        <TouchableOpacity activeOpacity={1} style={styles.flatListStyle} onPress={() => {
                                            console.log(item.id);
                                            navigation.navigate('SearchedProfile')
                                        }}>
                                            <Avatar.Image source={item.image} size={64} style={styles.avatarImage} />
                                            <Text style={styles.title}>{item.title}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                            ></FlatList>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SearchProfileScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: COLORS.appBackgroundColor
    },
    mainComponent: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.white,
        borderRadius: 8,
        margin: 16,
        marginTop: 24,
        padding: 16,
        paddingBottom: 20
    },
    circularView: {
        width: 80,
        height: 80,
        borderColor: COLORS.borderColor,
        borderWidth: 1,
        borderRadius: 40
    },
    profileImageStyle: {
        width: 70,
        height: 70,
        alignSelf: 'center'
    },
    titleStyle: {
        ...FONTS.appFontMedium,
        color: COLORS.primary
    },
    singleRowView: {
        flexDirection: 'row',
        borderColor: COLORS.labelColor,
        borderBottomWidth: 0.5,
        paddingBottom: 4,
        paddingTop: 4
    },
    labelStyle: {
        ...FONTS.appFontOpenSansRegular,
        color: COLORS.labelColor
    },
    contentStyle: {
        ...FONTS.appFontSemiBold,
        color: COLORS.black,
        paddingLeft: 8,
        flex: 1
    },
    avatarImage: {
        backgroundColor: COLORS.appBackgroundColor,
        borderColor: COLORS.appBackgroundColor,
        alignSelf: 'center'
    },
    title: {
        ...FONTS.appFontOpenSansRegular,
        color: COLORS.black,
        padding: 6,
        paddingBottom: 0,
        alignSelf: 'center'
    }
})