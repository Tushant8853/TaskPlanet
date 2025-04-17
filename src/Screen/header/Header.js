import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Home</Text>

      <View style={styles.rightSection}>
        <View style={styles.badge}>
          <Text style={styles.redText}>121880.35</Text>
          <Icon name="star" size={12} color="#FFC107" style={{ marginLeft: 5 }} />
        </View>

        <View style={styles.badgeGreen}>
          <Text style={styles.greenText}>₹2043.00</Text>
        </View>

        <TouchableOpacity style={styles.notificationContainer}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3119/3119338.png' }}
            style={{ width: 18, height: 18 }}
            resizeMode="contain"
          />
          <View style={styles.redDot}>
            <Text style={styles.dotText}>1</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.circleWrapper}>
          <View style={styles.greenTopDot} />
          <View style={styles.circle}>
            <Image
              source={{ uri: 'https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png' }}
              style={{ width: 18, height: 18 }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    elevation: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 4,
    elevation: 1,
  },
  redText: {
    color: 'red',
    fontWeight: '600',
    fontSize: 10,
  },
  badgeGreen: {
    backgroundColor: '#e0f6e9',
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 15,
    marginHorizontal: 4,
    elevation: 1,
  },
  greenText: {
    color: '#1e8f4e',
    fontWeight: '600',
    fontSize: 10,
  },
  notificationContainer: {
    marginHorizontal: 4,
  },
  redDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: 'red',
    borderRadius: 8,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
  },
  circleWrapper: {
    marginLeft: 6,
    position: 'relative',
  },
  greenTopDot: {
    position: 'absolute',
    top: -4,
    left: 12,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#3cce5e',
    zIndex: 2,
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#3cce5e',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Header;
