import React from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import { Drawer, Text } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { COLORS, FONTS, IMAGES } from '../../constants/theme';

function CustomDrawer(props) {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                translucent
                backgroundColor={COLORS.white} // For StatusBarColor
                barStyle='dark-content'
            />
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View>
                            <Image source={IMAGES.logo_panchang} style={styles.imageStyle}></Image>
                        </View>
                        <View style={{ marginTop: 8 }}>
                            <Text style={{ ...FONTS.appFontMedium }}>App Name</Text>
                        </View>
                        <View style={{ marginTop: 8, marginBottom: 12 }}>
                            <Text style={{ ...FONTS.appFontLight, color: COLORS.black }}>v1.0.0</Text>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={() =>
                                <MaterialIcons name="info" size={24} color={COLORS.secondary}>

                                </MaterialIcons>
                            }
                            label="About Us"
                            labelStyle={{ ...FONTS.appFontSemiBold, color: COLORS.secondary }}
                            onPress={() => { props.navigation.navigate('AboutUs') }}
                        />
                        <DrawerItem
                            icon={() =>
                                <MaterialIcons name="contact-mail" size={24}>
                                </MaterialIcons>
                            }
                            label="Contact Us"
                            labelStyle={styles.labelStyle}
                            onPress={() => { props.navigation.navigate('ContactUs') }}
                        />
                        <DrawerItem
                            icon={() =>
                                <MaterialIcons name="settings" size={24}>
                                </MaterialIcons>
                            }
                            label="Settings"
                            labelStyle={styles.labelStyle}
                        // onPress={() => { props.navigation.navigate('Settings') }}
                        />
                        <DrawerItem
                            icon={() =>
                                <MaterialIcons name="help" size={24}>
                                </MaterialIcons>
                            }
                            label="Support & Feedback"
                            labelStyle={styles.labelStyle}
                        // onPress={() => { props.navigation.navigate('Support&Feedback') }}
                        />
                        <DrawerItem
                            icon={() =>
                                <MaterialIcons name="gavel" size={24}>
                                </MaterialIcons>
                            }
                            label="Terms Of Use"
                            labelStyle={styles.labelStyle}
                        // onPress={() => { props.navigation.navigate('TermsOfUse') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={() =>
                        <MaterialIcons name="exit-to-app" size={24}>
                        </MaterialIcons>
                    }
                    label="Sign Out"
                    labelStyle={styles.labelStyle}
                    onPress={() => { props.navigation.navigate('HomeDrawer') }}
                />
            </Drawer.Section>
        </View>
    );
}

export default CustomDrawer
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.appBackgroundColor
    },
    imageStyle: {
        width: 120,
        height: 120,
    },
    labelStyle: {
        ...FONTS.appFontSemiBold,
        color: COLORS.black
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    drawerSection: {
        marginTop: 8,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
});