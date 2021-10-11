import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform, View, Text, Image, FlatList, ScrollView } from 'react-native';
import { COLORS, FONTS, GLOBALSTYLES, IMAGES } from '../../constants/theme';
import { Appbar } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const MyFamilyScreen = ({ navigation }) => {

    const itemData = [
        {
            id: 0,
            image: IMAGES.userProfileBig,
            title: "Test 0"
        },
        {
            id: 1,
            image: IMAGES.userProfileBig,
            title: "Test 1"
        },
        {
            id: 2,
            image: IMAGES.demoPhoto,
            title: "Test 2"
        },
        {
            id: 3,
            image: IMAGES.demoPhoto,
            title: "Test 3"
        },
        {
            id: 4,
            image: IMAGES.userProfileBig,
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
                <Appbar.Content title='My Family' titleStyle={{ ...FONTS.appFontBold, color: COLORS.primary, fontSize: 24 }} />
            </Appbar.Header>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>
                    <View style={styles.mainComponent}>
                        <View style={{ flex: 1, marginTop: 8 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: "1%" }}>
                                <Text style={styles.titleLabelStyles}>Family Members</Text>
                                <MaterialIcons name="person-add" size={24} color={COLORS.labelColor} onPress={() => console.log('Add Member Pressed')} />
                            </View>
                            {renderMembers()}
                        </View>
                    </View>
                    <View style={styles.mainComponent}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: "1%" }}>
                                <Text style={styles.titleLabelStyles}>Additional Details</Text>
                                <MaterialIcons name="edit" size={24} color={COLORS.labelColor} onPress={() => console.log('Edit Details Pressed')} />
                            </View>
                            <View style={styles.additionalDetailsComponentStyle}>
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
                                    <Text style={styles.contentStyle}>20B Seervai, 1st Floor, Sleater Road, Next to Girton High School, Grant Road West, Mumbai - 400007.</Text>
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
        </SafeAreaView>
    )
}

export default MyFamilyScreen;

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
    titleLabelStyles: {
        ...FONTS.appFontBold,
        color: COLORS.primary
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
    additionalDetailsComponentStyle: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.componentBackgroundColor,
        borderRadius: 8,
        shadowOpacity: 0,
        marginHorizontal: "1%",
        marginTop: 16,
        padding: 12
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
    }
})