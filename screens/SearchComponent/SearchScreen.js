import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, IMAGES } from '../../constants/theme'
import { Avatar, Searchbar } from 'react-native-paper'

function SearchScreen({ navigation }) {

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
        },
        {
            id: 9,
            image: IMAGES.demoPhoto2,
            title: 'Demo Photo 2'
        },
        {
            id: 10,
            image: IMAGES.demoPhoto2,
            title: 'Demo Photo 2'
        },
        {
            id: 11,
            image: IMAGES.demoPhoto2,
            title: 'Demo Photo 2'
        },
        {
            id: 12,
            image: IMAGES.demoPhoto2,
            title: 'Demo Photo 2'
        },

        {
            id: 13,
            image: IMAGES.demoPhoto2,
            title: 'Demo Photo 2'
        }, {
            id: 14,
            image: IMAGES.demoPhoto2,
            title: 'Demo Photo 2'
        },
    ]

    const [dataValue, setDataValue] = useState([])
    var searchText = ''
    const Filter = (textForSearch) => {
        if (textForSearch.length >= 3) {
            searchText = textForSearch.toLowerCase();
            let AllData = listData
            let filterData = AllData.filter((data) => {
                return data.title.toLowerCase().match(searchText);
            })
            if (searchText == '') {
                setDataValue([]);
            }
            else {
                setDataValue(filterData);
            }
        } else {
            setDataValue([])
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, padding: 12 }}>
                <Searchbar placeholder="Search Vastipatrak..."
                    inputStyle={COLORS.black}
                    style={styles.searchBarStyles}
                    iconColor={COLORS.black}
                    onChangeText={text => Filter(text)}
                // value={searchQuery}
                ></Searchbar>
                <View style={{ flex: 1, marginHorizontal: "1%" }}>
                    <View style={styles.mainComponent}>
                        {dataValue.length > 0 ?
                            <FlatList
                                data={dataValue}
                                keyExtractor={(id) => id.id}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) =>
                                    <View>
                                        <TouchableOpacity activeOpacity={1} style={styles.flatListStyle} onPress={() => {
                                            console.log(item.id);
                                            navigation.navigate('SingleMemberDetails', {
                                                item: item
                                            })
                                        }}>
                                            <Avatar.Image source={item.image} size={48} style={styles.avatarImage} />
                                            <Text style={styles.title}>{item.title}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                            >
                            </FlatList>
                            : <View>
                                <Text style={{ ...FONTS.appFontMedium, color: COLORS.secondary, padding: 8, alignSelf: 'center' }}>
                                    No Data Found
                                </Text>
                            </View>
                        }
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: COLORS.white
    },
    mainComponent: {
        backgroundColor: COLORS.componentBackgroundColor,
        borderColor: COLORS.white,
        borderRadius: 10,
        marginTop: 24,
    },
    searchBarStyles: {
        backgroundColor: COLORS.componentBackgroundColor,
        borderRadius: 12,
        shadowOpacity: 0,
        marginHorizontal: "1%",
    },
    flatListStyle: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        marginTop: 8,
        // backgroundColor: COLORS.componentBackgroundColor,
        marginLeft: 14
    },
    avatarImage: {
        backgroundColor: COLORS.appBackgroundColor,
        borderColor: COLORS.appBackgroundColor,
    },
    title: {
        ...FONTS.appFontOpenSansRegular,
        color: COLORS.black,
        padding: 8,
        alignSelf: 'center'
    }
})