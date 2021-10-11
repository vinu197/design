import React from 'react';
import { Dimensions  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomBottomNavigation from './screens/StaticComponent/CustomBottomNavigation';
import CustomDrawer from './screens/StaticComponent/CustomDrawer';
import AboutUsScreen from './screens/AboutUsComponent/AboutUsScreen';
import ContactUsScreen from './screens/ContactComponent/ContactUsScreen';
import SearchProfileScreen from './screens/SearchComponent/SearchProfileScreen';
import EventDetailsScreen from './screens/EventsComponent/EventDetailsScreen';
import SingleMemberScreen from './screens/MyFamilyComponent/SingleMemberScreen';
import  LatestNewsScreen from './screens/LatestNewsComponent/LatestNewsScreen';
import EventListScreen from './screens/EventsComponent/EventListScreen';

const HomeStack = createStackNavigator()
const Drawer = createDrawerNavigator()
const { width } = Dimensions.get('screen')

function Stack() {
    return(

  <HomeStack.Navigator headerMode='none'>
      <HomeStack.Screen name="Home" component={CustomBottomNavigation} />
      <HomeStack.Screen name="SearchedProfile" component={SearchProfileScreen} />
      <HomeStack.Screen name="EventDetails" component={EventDetailsScreen} />
      <HomeStack.Screen name="SingleMemberDetails" component={SingleMemberScreen} />
      <HomeStack.Screen name="EventList" component={EventListScreen} />
      <HomeStack.Screen name="ContactUs" component={ContactUsScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}

function App() {

    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} drawerPosition='right'>
          <Drawer.Screen name="HomeDrawer" component={Stack}></Drawer.Screen>
          <Drawer.Screen name="AboutUs" component={AboutUsScreen}></Drawer.Screen>
          <Drawer.Screen name="ContactUs" component={ContactUsScreen}></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  
export default App;
  