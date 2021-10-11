import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform, ScrollView, View, FlatList, TouchableOpacity, Text } from 'react-native';
import { COLORS, FONTS, GLOBALSTYLES, IMAGES } from '../../constants/theme';
import { Appbar, Avatar } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function MyAccountScreen({ navigation }) {

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
            <Appbar.Header style={GLOBALSTYLES.appBarView}>
                <Appbar.Content title='My Account' titleStyle={{ ...FONTS.appFontBold, color: COLORS.secondary }} />
                <Appbar.Action icon='menu' color={COLORS.secondary} onPress={() => navigation.openDrawer()} />
            </Appbar.Header>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>
                    <View style={styles.mainComponent}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.titleStyle}>Family Members</Text>
                                <MaterialIcons name="person-add" size={24} onPress={() => console.log('Add Member Pressed')} />
                            </View>
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
                    <View style={{ ...styles.mainComponent, marginTop: 0 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.titleStyle}>Login Credentials</Text>
                            <View style={{ marginTop: 8, flex: 1, flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.labelStyle}>Mobile Number:</Text>
                                    <Text style={styles.contentStyle}>9820364627</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                    <TouchableOpacity activeOpacity={1} style={styles.buttonStyle} onPress={() => console.log('Change Password Clicked')}>
                                        <Text style={styles.buttonLabelStyle}>Change Password</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={1} onPress={() => console.log('Update Mobile Number Clicked')}>
                                        <Text style={styles.updateMobileNumberStyle}>Update Mobile Number</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ ...styles.mainComponent, marginTop: 0 }}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.titleStyle}>Additional Details</Text>
                                <MaterialIcons name="edit" size={24} onPress={() => console.log('Edit Details Pressed')} />
                            </View>
                            <View style={{ marginTop: 8, flex: 1, flexDirection: 'column' }}>
                                <View style={styles.singleRowView}>
                                    <Text style={styles.labelStyle}>Family Number:</Text>
                                    <Text style={styles.contentStyle}>98</Text>
                                </View>
                                <View style={styles.singleRowView}>
                                    <Text style={styles.labelStyle}>Last Name:</Text>
                                    <Text style={styles.contentStyle}>Gada</Text>
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
                                    <Text style={styles.labelStyle}>Residential Address:</Text>
                                    <Text style={{ ...styles.contentStyle }}>20B Seervai, 1st Floor, Sleater Road, Next to Girton High School, Grant Road West, Mumbai - 400007.</Text>
                                </View>
                                <View style={styles.singleRowView}>
                                    <Text style={styles.labelStyle}>Business Address:</Text>
                                    <Text style={styles.contentStyle}>20B Seervai, 1st Floor, Sleater Road, Next to Girton High School, Grant Road West, Mumbai - 400007.</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

export default MyAccountScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : null,
        flex: 1,
        backgroundColor: COLORS.appBackgroundColor
    },
    mainComponent: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.white,
        borderRadius: 8,
        margin: 16,
        marginTop: 24,
        padding: 16
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
    },
    buttonStyle: {
        borderRadius: 8,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 10,
        paddingVertical: 3
    },
    buttonLabelStyle: {
        ...FONTS.appFontOpenSansRegular,
        color: COLORS.white,
        fontSize: 12
    },
    updateMobileNumberStyle: {
        color: COLORS.secondary,
        textDecorationLine: 'underline',
        ...FONTS.appFontOpenSansRegular,
        fontSize: 12,
        padding: 4,
        paddingLeft: 8
    }
})