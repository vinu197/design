import { Dimensions , StyleSheet } from "react-native";
const { width, height} = Dimensions.get('window')

export const COLORS = {

    primary: "#393185", //mainBlue color
    secondary: "#E31E24", // main red color

    lightBlue: "#393185B3",

    black: "#000000",
    white: "#FFFFFF",
    appBackgroundColor: "#F7F7F9",
    componentBackgroundColor: "#F6F9FF",
    borderColor: "#707070",
    labelColor: "#455A64",

    // Contact Us Page Color
    cyan: "#BAE1FF",
    lightYellow: "#FFFFBA",
    flourescent: '#5CFADF',
    titleRed: '#FF7A57',
    titleCirculars: "#00E2F2"
}

export const FONTS = {
    appFontBold: { fontFamily: 'Lato-Bold', fontSize: 20, },
    appFontLight: { fontFamily: 'Lato-Light', fontSize: 14, },
    appFontSemiBold: { fontFamily: 'OpenSans-SemiBold', fontSize: 14, },
    appFontLatoRegular: { fontFamily: 'Lato-Regular', fontSize: 14 },
    appFontOpenSansRegular: { fontFamily: 'OpenSans-Regular', fontSize: 14 },
    appFontMedium: { fontFamily: 'Lato-Bold', fontSize: 18 }
}

const demo_searchPhoto = require("../assets/images/demo_searchPhoto.jpg")
const logo_panchang = require("../assets/images/logo_panchang.png")
const demoPhoto = require("../assets/images/demoPhoto.jpg")
const demoPhoto2 = require("../assets/images/demoPhoto2.jpg")
const arthik_form = require("../assets/images/arthik_form.png")
const medical_form = require("../assets/images/medical_form.png")
const membership_form = require("../assets/images/membership_form.png")
const education_form = require("../assets/images/education_form.png")
const myFamily_Home = require("../assets/images/myFamilyHome.png")
const latest_news = require("../assets/images/latestNews.png")
const contactUs_Home = require("../assets/images/contactUsHome.png")
const natya_utsav = require("../assets/images/natyaUtsav.png")
const rass_garba = require("../assets/images/RassGarba.png")
const agm = require("../assets/images/agm.png")
const userProfileBig = require("../assets/images/userProfileBig.png")
const circularsImage = require("../assets/images/circular.png")
const newsHand = require("../assets/images/newsHand.png")


export const IMAGES = {
    demo_searchPhoto,
    logo_panchang,
    demoPhoto,
    demoPhoto2,
    arthik_form,
    education_form,
    medical_form,
    membership_form,
    myFamily_Home,
    latest_news,
    contactUs_Home,
    agm,
    natya_utsav,
    rass_garba,
    userProfileBig,
    circularsImage,
    newsHand
}

export const GLOBALSTYLES = StyleSheet.create({
    appBarView: {
        backgroundColor: COLORS.white,
        elevation: 0,
        height: 42,
        borderBottomColor: COLORS.componentBackgroundColor,
        borderBottomWidth: 2
    }
})