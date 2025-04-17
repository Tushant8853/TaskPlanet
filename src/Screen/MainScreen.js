import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Screen1 from '../Screen/Components/Screen1';
import Screen2 from '../Screen/Components/Screen2';
import Screen3 from '../Screen/Components/Screen3';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const focused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconSource, label;
        if (route.name === 'Screen1') {
          iconSource = require('../Img/home.png');
          label = 'Home';
        } else if (route.name === 'Screen2') {
          iconSource = require('../Img/task.png');
          label = 'Tasks';
        } else if (route.name === 'Screen3') {
          iconSource = require('../Img/leaderboard.png');
          label = 'Rank';
        }

        if (route.name === 'Screen2') {
          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.centerButtonWrapper}
              activeOpacity={0.8}
            >
              <View style={styles.centerCircle}>
                <Image source={iconSource} style={styles.centerIcon} />
              </View>
              <Text style={styles.centerLabel}>{label}</Text>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tabButton}
            activeOpacity={0.8}
          >
            <Image
              source={iconSource}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#fff' : '#cbd5e1',
              }}
            />
            <Text style={{ color: focused ? '#fff' : '#cbd5e1', fontSize: 12 }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Screen2"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Screen1" component={Screen1} />
      <Tab.Screen name="Screen2" component={Screen2} />
      <Tab.Screen name="Screen3" component={Screen3} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#1E90FF',
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 0,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerButtonWrapper: {
    position: 'absolute',
    top: -30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  centerIcon: {
    width: 30,
    height: 30,
    tintColor: '#1E90FF',
  },
  centerLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#fff',
  },
});

export default Main;
