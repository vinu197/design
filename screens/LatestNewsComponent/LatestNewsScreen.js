import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Platform, View, Text, Image, FlatList } from 'react-native';
import { COLORS, FONTS, GLOBALSTYLES, IMAGES } from '../../constants/theme';
import { Appbar } from 'react-native-paper';

const LatestNewsScreen = ({ navigation }) => {

    const itemData = [
        {
            id: 1,
            type: 0,
            image: IMAGES.userProfileBig
        },
        {
            id: 2,
            type: 1,
            image: IMAGES.demoPhoto
        },
        {
            id: 3,
            type: 1,
            image: IMAGES.demoPhoto
        },
        {
            id: 4,
            type: 0,
            image: IMAGES.userProfileBig
        },
    ]

    const circularData = [
        {
            id: 1,
            image: IMAGES.circularsImage,
        },
        {
            id: 2,
            image: IMAGES.circularsImage,
        },
        {
            id: 3,
            image: IMAGES.circularsImage,
        },
        {
            id: 4,
            image: IMAGES.circularsImage,
        },
        {
            id: 5,
            image: IMAGES.circularsImage,
        }
    ]

    function renderCirculars() {

        const renderItem = ({ item }) => {
            return (
                <Image source={item.image} style={styles.circularImageStyle} />
            )
        }

        return (
            <View style={{ flex: 1, marginHorizontal: "1%" }}>
                <FlatList
                    data={circularData}
                    horizontal
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }

    function renderNews() {
        const renderItem = ({ item }) => {
            if (item.type == 0) {
                return (
                    <View style={styles.flatListComponentStyles}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 8 }}>
                            <Text style={{ ...FONTS.appFontBold, fontSize: 14, color: COLORS.titleRed }}>Avsaan Noondh</Text>
                            <Text style={{ ...FONTS.appFontOpenSansRegular, fontSize: 12, color: COLORS.labelColor }}>12 hrs</Text>
                        </View>
                        <Text style={{ flex: 1, paddingHorizontal: 8, ...FONTS.appFontSemiBold }}>FIRST_NAME MIDDLE_NAME LAST_NAME</Text>
                        <View style={styles.singleRowView}>
                            <Text style={styles.labelStyle}>Age:</Text>
                            <Text style={styles.contentStyle}>75 Years</Text>
                            <Text style={styles.labelStyle}>Area:</Text>
                            <Text style={styles.contentStyle}>Grant Road</Text>
                        </View>
                        <Text style={styles.descStyles}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                        <Image source={item.image} style={styles.profileImageStyle} />
                    </View>
                )
            } else {
                return (
                    <View style={styles.flatListComponentStyles}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 8 }}>
                            <Text style={{ ...FONTS.appFontBold, fontSize: 14, color: COLORS.titleCirculars }}>Circulars</Text>
                            <Text style={{ ...FONTS.appFontOpenSansRegular, fontSize: 12, color: COLORS.labelColor }}>12 hrs</Text>
                        </View>
                        <Text style={{ flex: 1, paddingHorizontal: 8, ...FONTS.appFontSemiBold, fontSize: 16, paddingBottom: 4 }}>SUBJECT LINE</Text>
                        <Text style={styles.descStyles}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                        {renderCirculars()}
                    </View>
                )
            }
        }

        return (
            <FlatList
                data={itemData}
                ItemSeparatorComponent={
                    () => <View style={{ height: 12 }} />
                }
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header style={GLOBALSTYLES.appBarView}>
                <Appbar.Content title='News Feed' titleStyle={{ ...FONTS.appFontBold, color: COLORS.primary, fontSize: 24 }} />
            </Appbar.Header>
            <View style={styles.mainComponent}>
                {renderNews()}
            </View>
        </SafeAreaView>
    )
}

export default LatestNewsScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : null,
        flex: 1,
        backgroundColor: COLORS.white
    },
    mainComponent: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12,
    },
    flatListComponentStyles: {
        flex: 1,
        padding: 8,
        backgroundColor: COLORS.componentBackgroundColor,
        borderRadius: 8,
        flexDirection: 'column',
    },
    singleRowView: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 8,
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
    descStyles: {
        ...FONTS.appFontSemiBold,
        color: COLORS.black,
        paddingHorizontal: 8,
        lineHeight: 20,
        marginBottom: 4
    },
    profileImageStyle: {
        flex: 1,
        width: "100%",
        alignSelf: 'center',
        margin: 8,
        height: 250,
        borderRadius: 8,
        resizeMode: 'contain'
    },
    circularImageStyle: {
        width: 100,
        height: 100,
        borderRadius: 4,
        marginRight: 8
    }
})