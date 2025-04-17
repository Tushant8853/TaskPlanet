import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TaskFilters = () => {
  const [selectedTab, setSelectedTab] = useState('Available');

  const tabs = [
    { label: 'Available', count: 5 },
    { label: 'Ongoing', count: 0 },
    { label: 'History', count: 0 },
  ];

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Explore Tab</Text>
      </View>
      <View style={styles.topRow}>
        <View style={styles.box}>
          <Text style={styles.boxText}>Refer And Earn</Text>
          <Image
                source={{ uri: 'https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png' }}
                style={styles.boxIcon}
                resizeMode="contain"
            />
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>Install App</Text>
            <Image
                source={{ uri: 'https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png' }}
                style={styles.boxIcon}
                resizeMode="contain"
            />
        </View>
      </View>

      <View style={styles.tabRow}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tab,
              selectedTab === tab.label && styles.activeTab,
            ]}
            onPress={() => setSelectedTab(tab.label)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab.label && styles.activeTabText,
              ]}
            >
              {tab.label} ({tab.count})
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TaskFilters;
const styles = StyleSheet.create({
    container: {
      padding: 12,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 10,
    },	
    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    box: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#cceaff',
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 10,
      width: '48%',
      justifyContent: 'space-between',
    },
    boxIcon: {
        width: 16, 
        height: 16, 
        marginLeft: 8,
        resizeMode: 'contain', 
      },
    boxText: {
      flex: 1,
      fontSize: 14,
      color: '#000',
      fontWeight: '500',
    },
    tabRow: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    tab: {
      paddingVertical: 6,
      paddingHorizontal: 12,
      backgroundColor: '#f2f2f2',
      borderRadius: 20,
      marginRight: 8,
    },
    activeTab: {
      backgroundColor: '#cceaff',
    },
    tabText: {
      color: '#777',
      fontSize: 13,
      fontWeight: '500',
    },
    activeTabText: {
      color: '#000',
    },
  });
  