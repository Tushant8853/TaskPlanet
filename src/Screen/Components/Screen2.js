import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Header from '../header/Header';
import TaskFilters from '../screencomponents/taskfilter';
import TaskDetailCard from '../screencomponents/TaskDetailCard';
import { useNavigation } from '@react-navigation/native';

const taskData = [
  {
    id: 'SM0793',
    title: 'Install True Balance and get points',
    logo: 'https://icon2.cleanpng.com/20240216/gkb/transparent-google-logo-iconic-google-logo-with-blue-green-and-1710875585209.webp',
    users: '21/100 Users',
  },
  {
    id: 'SM0791',
    title: 'Install Paytm and earn points',
    logo: 'https://images.icon-icons.com/730/PNG/512/paytm_icon-icons.com_62778.png',
    users: '22/100 Users',
  },
  {
    id: 'SM0792',
    title: 'Install Cred and earn rewards',
    logo: 'https://static-00.iconduck.com/assets.00/cred-icon-1740x2048-q1yyh1es.png',
    users: '22/100 Users',
  },
  {
    id: 'SM0794',
    title: 'Install Paytm and get cashback',
    logo: 'https://img.icons8.com/?size=512&id=OYtBxIlJwMGA&format=png',
    users: '22/100 Users',
  },
  {
    id: 'SM0795',
    title: 'Install App Y and get cashback',
    logo: 'https://cdn-icons-png.flaticon.com/512/12440/12440921.png',
    users: '22/100 Users',
  },
  {
    id: 'SM0796',
    title: 'Master Card and earn points',
    logo: 'https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png',
    users: '22/100 Users',
  },
];

const Screen2 = () => {
  const navigation = useNavigation();

  const [expandedTaskId, setExpandedTaskId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedTaskId(prev => (prev === id ? null : id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <View style={styles.filterContainer}>
        <TaskFilters />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {taskData.map(task => (
          <View key={task.id}>
            <View style={styles.card}>
              <View style={styles.cardRow}>
                <TouchableOpacity onPress={() => navigation.navigate('TaskCard', { logo: task.logo })}>
                  <Image source={{ uri: task.logo }} style={styles.logo} />
                </TouchableOpacity>
                <View style={styles.cardContent}>
                  <Text style={styles.title}>{task.title}</Text>
                  <Text style={styles.taskId}>Task ID : {task.id}</Text>
                  <View style={styles.infoRow}>
                    <InfoItem icon="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" text="100 Points" />
                    <InfoItem icon="https://cdn-icons-png.flaticon.com/512/1828/1828961.png" text="1 Task" />
                    <InfoItem icon="https://cdn-icons-png.flaticon.com/512/2088/2088617.png" text="1 min" />
                    <InfoItem icon="https://cdn-icons-png.flaticon.com/512/747/747376.png" text={task.users} />
                  </View>
                </View>
                <TouchableOpacity onPress={() => toggleExpand(task.id)}>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271210.png' }}
                    style={styles.dropdownIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {expandedTaskId === task.id && <TaskDetailCard />}
          </View>
        ))}
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

const InfoItem = ({ icon, text }) => (
  <View style={styles.infoItem}>
    <Image source={{ uri: icon }} style={styles.icon} />
    <Text style={styles.infoText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  filterContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollContent: {
    paddingTop: 200,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    elevation: 2,
  },
  cardRow: {
    flexDirection: 'row',

  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  taskId: {
    fontSize: 12,
    color: '#555',
    marginBottom: 4,
  },
  infoRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 4,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#333',
  },
  dropdownIcon: {
    width: 20,
    height: 20,
    tintColor: '#333',
    marginLeft: 10,
  },
});

export default Screen2;
