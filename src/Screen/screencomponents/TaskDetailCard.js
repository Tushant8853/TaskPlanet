import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskDetailCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Text style={[styles.tab, styles.activeTab]}>Details</Text>
        <Text style={styles.tab}>Earnings</Text>
        <Text style={styles.tab}>Disclaimer</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Task Description</Text>
        <Text style={styles.description}>
          Hello Friend, Are you in urgent need of money? Quick loan for you in minutes from True Balance! https://kjf18.app.goo.gl/un6cMazx1k894fb6
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Task Actions</Text>
        <View style={styles.actionRow}>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#2ecc71' }]}>
            <Text style={styles.actionText}>🔗 Start Task</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#3498db' }]}>
            <Text style={styles.actionText}>🔄 Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionRow}>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#8e44ad' }]}>
            <Text style={styles.actionText}>📷 Choose File</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#bdc3c7' }]}>
            <Text style={styles.actionText}>Submit Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 12,
    borderRadius: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#eee',
    fontSize: 13,
  },
  activeTab: {
    backgroundColor: '#2c3e50',
    color: '#fff',
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#333',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  actionButton: {
    flex: 0.48,
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TaskDetailCard;
