import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, ScrollView, Dimensions, FlatList, Image } from 'react-native';
import { COLORS, FONTS, GLOBALSTYLES, IMAGES } from '../../constants/theme';
import { Appbar } from 'react-native-paper';

const EventDetailsScreen = ({ route, navigation }) => {

    const { item } = route.params;

    const eventData = [
        {
            id: 1,
            image: IMAGES.natya_utsav,
        },
        {
            id: 2,
            image: IMAGES.rass_garba,
        },
        {
            id: 3,
            image: IMAGES.agm,
        },
        {
            id: 4,
            image: IMAGES.natya_utsav,
        },
        {
            id: 5,
            image: IMAGES.rass_garba,
        },
        {
            id: 6,
            image: IMAGES.agm,
        },
        {
            id: 7,
            image: IMAGES.natya_utsav,
        },
        {
            id: 8,
            image: IMAGES.rass_garba,
        },
        {
            id: 9,
            image: IMAGES.rass_garba,
        },
        {
            id: 10,
            image: IMAGES.agm,
        },
        {
            id: 11,
            image: IMAGES.natya_utsav,
        },
        {
            id: 12,
            image: IMAGES.rass_garba,
        }
    ]

    function renderEventPhotos() {

        const renderHeaderComponent = () => {
            return (
                <View style={styles.eventDescStyles}>
                    <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </View>
            )
        }

        // const numColumns = 3

        // const formatData = (eventData, numColumns) => {
        //     const totalRows = Math.floor(eventData.length / numColumns)
        //     let totalLastRow = eventData.length - (totalRows * numColumns)
        //     while (totalLastRow !== 0 && totalLastRow !== 2) {
        //         eventData.push({ 'empty': true })
        //         totalLastRow++
        //     }
        //     return eventData
        // }

        const renderItem = ({ item }) => {
            return (
                <Image source={item.image} style={styles.eventImageStyle} />
            )
        }

        return (
            <FlatList
                data={eventData}
                numColumns={3}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                ListHeaderComponent={renderHeaderComponent}
                ListHeaderComponentStyle={styles.eventDescStyles}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header style={GLOBALSTYLES.appBarView}>
                <Appbar.Action icon="chevron-left" onPress={() => navigation.goBack()} color={COLORS.primary} size={30} />
                <Appbar.Content title={item.title} titleStyle={{ ...FONTS.appFontBold, color: COLORS.primary, fontSize: 24, }} />
            </Appbar.Header>
            <View style={styles.mainComponent}>
                <View style={styles.eventImageComponentStyles}>
                    {renderEventPhotos()}
                </View>
            </View>
        </SafeAreaView>
    );
}

export default EventDetailsScreen;

const width = Dimensions.get('window').width - 20;

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
    },
    eventDescStyles: {
        flex: 1,
        backgroundColor: COLORS.componentBackgroundColor,
        borderRadius: 8,
        shadowOpacity: 0,
        marginBottom: 16
    },
    content: {
        ...FONTS.appFontLatoRegular,
        padding: 12,
        lineHeight: 22
    },
    eventImageComponentStyles: {
        flex: 1,
        // marginHorizontal: "1%",
    },
    eventImageStyle: {
        flex: 1,
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
        marginRight: 8
    },
})