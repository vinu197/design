import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Platform, ScrollView, View, Text, Image, FlatList } from 'react-native';
import { COLORS, FONTS, GLOBALSTYLES, IMAGES } from '../../constants/theme';
import { Appbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SingleMemberScreen = ({ route, navigation }) => {

    const { item } = route.params;
    var mobileNumber = "9987458858"
    mobileNumber = mobileNumber.replace(/^.{6}/g, '******')

    const itemData = [
        {
            id: 0,
            image: IMAGES.userProfileBig,
            title: "Test 0"
        },
        {
            id: 1,
            image: IMAGES.demoPhoto2,
            title: "Test 1"
        },
        {
            id: 2,
            image: IMAGES.userProfileBig,
            title: "Test 2"
        },
        {
            id: 3,
            image: IMAGES.userProfileBig,
            title: "Test 3"
        },
        {
            id: 4,
            image: IMAGES.demoPhoto,
            title: "Test 4"
        },
    ]

    function renderMembers() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity style={{ marginRight: 8 }} activeOpacity={0.5} onPress={() => {
                    console.log(item.id);
                    navigation.navigate('SingleMemberDetails', {
                        item: item
                    })
                }}>
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <View style={styles.imageViewStyles}><Image source={item.image} style={styles.memberImageStyles} /></View>
                        <Text style={{ ...FONTS.appFontSemiBold, marginTop: 4, color: COLORS.labelColor }}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1, marginHorizontal: "1%" }}>
                <FlatList
                    data={itemData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ marginTop: 8 }}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header style={GLOBALSTYLES.appBarView}>
                <Appbar.Action icon="chevron-left" onPress={() => navigation.goBack()} color={COLORS.primary} size={30} />
                <Appbar.Content title={item.title} titleStyle={{ ...FONTS.appFontBold, color: COLORS.primary, fontSize: 24 }} />
            </Appbar.Header>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>
                    <View style={styles.mainComponent}>
                        <View style={styles.additionalDetailsComponentStyle}>
                            <Image source={item.image} style={styles.profileImageStyle} />
                            <View style={{ ...styles.singleRowView, marginTop: 8 }}>
                                <Text style={styles.labelStyle}>Age:</Text>
                                <Text style={styles.contentStyle}>21 Years</Text>
                            </View>
                            <View style={styles.singleRowView}>
                                <Text style={styles.labelStyle}>Area:</Text>
                                <Text style={styles.contentStyle}>Grant Road</Text>
                            </View>
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
                                <Text style={styles.contentStyle}>Gada</Text>
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
                        <View style={styles.membersComponentStyle}>
                            <Text style={styles.titleLabelStyles}>Family Members</Text>
                            {renderMembers()}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SingleMemberScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : null,
        flex: 1,
        backgroundColor: COLORS.white
    },
    mainComponent: {
        backgroundColor: COLORS.white,
        padding: 12,
    },
    additionalDetailsComponentStyle: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.componentBackgroundColor,
        borderRadius: 8,
        shadowOpacity: 0,
        marginHorizontal: "1%",
        // marginTop: 16,
        padding: 12
    },
    profileImageStyle: {
        flex: 1,
        width: "100%",
        alignSelf: 'center',
        // margin: 8,
        height: 300,
        borderRadius: 12,
        resizeMode: 'contain',
        // aspectRatio: 1
    },
    singleRowView: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 4,
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
    titleLabelStyles: {
        ...FONTS.appFontBold,
        color: COLORS.primary
    },
    membersComponentStyle: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.componentBackgroundColor,
        borderRadius: 8,
        shadowOpacity: 0,
        marginHorizontal: "1%",
        marginTop: 16,
        padding: 16
    },
    imageViewStyles: {
        borderColor: COLORS.borderColor,
        borderWidth: 0.1,
        borderRadius: 2,
    },
    memberImageStyles: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
})