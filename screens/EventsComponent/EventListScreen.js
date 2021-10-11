import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Platform, View, Text, Image, FlatList } from 'react-native';
import { COLORS, FONTS, GLOBALSTYLES, IMAGES } from '../../constants/theme';
import { Appbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EventListScreen = ({ navigation }) => {

    const eventData = [
        {
            id: 1,
            title: 'Natya utsav',
            date: '15th October, 2021',
            description: 'sweet and small description',
        },
        {
            id: 2,
            title: 'Rass Garba',
            date: '17th October, 2021',
            description: 'sweet and small description',
        },
        {
            id: 3,
            title: 'AGM',
            date: '19th October, 2021',
            description: 'sweet and small description',
        },
        {
            id: 4,
            title: 'Natya utsav',
            date: '23rd October, 2021',
            description: 'sweet and small description',
        },
        {
            id: 5,
            title: 'Rass Garba',
            date: '25th October, 2021',
            description: 'sweet and small description',
        },
        {
            id: 6,
            title: 'AGM',
            date: '30th October, 2021',
            description: 'sweet and small description',
        }
    ]

    function renderEvents() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity style={{ marginRight: 8 }} activeOpacity={0.5} onPress={() => {
                    console.log(item.id);
                    navigation.navigate('EventDetails', {
                        item: item
                    })
                }}>
                    <View style={{ flex: 1, flexDirection: "column", backgroundColor: COLORS.componentBackgroundColor, marginVertical: 6, borderRadius: 8, padding: 12 }}>
                        <Text style={{ ...FONTS.appFontSemiBold, fontSize: 16 }}>{item.title}</Text>
                        <View style={{ ...styles.singleRowView }}>
                            <Text style={styles.labelStyle}>Date:</Text>
                            <Text style={styles.contentStyle}>{item.date}</Text>
                        </View>
                        <Text style={styles.eventDescStyles}>{item.description}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {eventData.length > 0 ?
                    <FlatList
                        data={eventData}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        keyExtractor={item => `${item.id}`}
                        renderItem={renderItem}
                        contentContainerStyle={{ marginTop: 8 }}
                    />
                    : <View style={{ flex: 1, backgroundColor: COLORS.componentBackgroundColor, justifyContent: 'center' }}><Text style={{
                        ...FONTS.appFontMedium,
                        color: COLORS.secondary,
                        padding: 8,
                        alignSelf: 'center',
                    }}>No Events There</Text></View>}
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header style={GLOBALSTYLES.appBarView}>
                <Appbar.Action icon="chevron-left" onPress={() => navigation.goBack()} color={COLORS.primary} size={30} />
                <Appbar.Content title='Events' titleStyle={{ ...FONTS.appFontBold, color: COLORS.primary, fontSize: 24 }} />
            </Appbar.Header>
            <View style={styles.mainComponent}>
                {renderEvents()}
            </View>
        </SafeAreaView>
    )
}

export default EventListScreen;


const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : null,
        flex: 1,
        backgroundColor: COLORS.white
    },
    mainComponent: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 16,
        paddingTop: 10,
    },
    singleRowView: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 4,
    },
    labelStyle: {
        ...FONTS.appFontOpenSansRegular,
        color: COLORS.borderColor,
        fontSize: 12,
        lineHeight: 20
    },
    contentStyle: {
        ...FONTS.appFontOpenSansRegular,
        color: COLORS.black,
        paddingLeft: 8,
        flex: 1
    },
    eventDescStyles: {
        flex: 1,
        ...FONTS.appFontLight,
        color: COLORS.black,
    },
})