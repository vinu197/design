import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform, ScrollView, View, Text, Image, FlatList, Dimensions } from 'react-native';
import { COLORS, FONTS, GLOBALSTYLES, IMAGES } from '../../constants/theme';
import { Appbar, Searchbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SingleLatestNewsScreen from '../LatestNewsComponent/SingleLatestNewsScreen';

const HomeScreen = ({ navigation }) => {

    const eventData = [
        {
            id: 1,
            image: IMAGES.newsHand,
            title: 'Natya utsav'
        },
        {
            id: 2,
            image: IMAGES.newsHand,
            title: 'Rass Garba'
        },
        {
            id: 3,
            image: IMAGES.newsHand,
            title: 'AGM'
        },
        {
            id: 4,
            image: IMAGES.newsHand,
            title: 'Natya utsav'
        },
        {
            id: 5,
            image: IMAGES.newsHand,
            title: 'Rass Garba'
        },
        {
            id: 6,
            image: IMAGES.newsHand,
            title: 'AGM'
        }
    ]

    const tempData = []

    function renderEventsList() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity style={{ marginRight: 8 }} activeOpacity={0.5} onPress={() => {
                    console.log(item.id);
                    navigation.navigate('EventDetails', {
                        item: item
                    })
                }}>
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <Image source={item.image} style={styles.eventImageStyle} />
                        <Text style={{ ...FONTS.appFontSemiBold, marginTop: 4 }}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={eventData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ marginTop: 8 }}
                />
            </View>
        )
    }


    function renderLatestNewsList() {
        return (
            <View style={{ flex: 1 }}>
                {eventData.length > 0 ?
                    <View style={{ flex: 1, height: Dimensions.get('window').height * 0.5 }}>
                        <FlatList
                            data={eventData}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            nestedScrollEnabled={true}
                            keyExtractor={item => `${item.id}`}
                            renderItem={({ item }) => (
                                <SingleLatestNewsScreen item={item} />
                            )}
                            contentContainerStyle={{ marginTop: 8 }}
                        />
                    </View> : <View><Text style={{
                        ...FONTS.appFontMedium,
                        color: COLORS.secondary,
                        padding: 8,
                        alignSelf: 'center'
                    }}>No Latest News There</Text></View>}
            </View>
        )
    }

    const list = () => {
        return <ScrollView style={{
            flex: 1, height: Dimensions.get('window').height * 0.5,
            marginTop: 8
        }} alwaysBounceVertical={true} nestedScrollEnabled={true} >
            {eventData.map((element) => {
                return <SingleLatestNewsScreen item={element} key={element.id} />
            })}
        </ScrollView >
    }

    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header style={GLOBALSTYLES.appBarView}>
                <Appbar.Content title='Home' titleStyle={{ ...FONTS.appFontBold, color: COLORS.primary, fontSize: 24 }} />
                <Appbar.Action icon='menu' color={COLORS.primary} onPress={() => navigation.openDrawer()} />
            </Appbar.Header>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>
                    <View style={styles.mainComponent}>
                        <View style={styles.latestUpdateViewStyles}>
                            <Text style={styles.titleLabelStyles}>Latest Updates</Text>
                            {list()}
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 16 }}>
                            <View style={styles.pageComponentStyles}>
                                <TouchableOpacity activeOpacity={1} style={{ flex: 1 }} onPress={() => {
                                    navigation.navigate('ContactUs')
                                }}>
                                    <View style={{ flexDirection: 'column', flex: 1 }}>
                                        <Text style={styles.titleLabelStyles}>Contact us</Text>
                                        <Image source={IMAGES.contactUs_Home} style={styles.imageStyle} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.pageComponentStyles}>
                                <TouchableOpacity activeOpacity={1} onPress={() => {
                                    navigation.navigate('EventList')
                                }}>
                                    <View style={{ flexDirection: 'column', flex: 1 }}>
                                        <Text style={styles.titleLabelStyles}>Events</Text>
                                        <Image source={IMAGES.myFamily_Home} style={styles.imageStyle} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.formComponentStyle}>
                            <Text style={{ ...styles.titleLabelStyles, paddingTop: 4 }}>Forms</Text>
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
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

export default HomeScreen;

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
    searchBarStyles: {
        backgroundColor: COLORS.componentBackgroundColor,
        borderRadius: 12,
        shadowOpacity: 0,
        marginHorizontal: "1%",
    },
    titleLabelStyles: {
        color: COLORS.primary,
        ...FONTS.appFontBold,
    },
    latestUpdateViewStyles: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.componentBackgroundColor,
        borderRadius: 8,
        shadowOpacity: 0,
        marginHorizontal: "1%",
        padding: 12
    },
    pageComponentStyles: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 8,
        backgroundColor: COLORS.componentBackgroundColor,
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        minWidth: "48%",
        textAlign: "center",
    },
    formComponentStyle: {
        backgroundColor: COLORS.componentBackgroundColor,
        borderRadius: 8,
        shadowOpacity: 0,
        marginHorizontal: "1%",
        marginTop: 16,
        padding: 16
    },
    imageStyle: {
        alignSelf: 'center',
        marginVertical: 8,
        width: "80%",
        height: 140,
    },
    formScrollStyle: {
        marginTop: 8,
    },
    formItemView: {
        width: 90,
        height: 90,
        borderRadius: 8,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formImageStyle: {
        width: 48,
        height: 48
    },
    formTitleStyle: {
        ...FONTS.appFontOpenSansRegular,
        color: COLORS.black,
        marginTop: 4
    }
})