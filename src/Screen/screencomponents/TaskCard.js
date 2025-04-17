import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList,
} from 'react-native';

const TaskDetailCard = ({route}) => {
    const { logo } = route.params;
    const imageData = [
        { uri: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/201909/bank_660x450_092319072500.jpg?size=948:533' },
        { uri: 'https://cm-cdn.creditmantri.com/community/article/mobile_looking-for-a-business-loan-know-the-best-banks-in-india.jpg' },
        { uri: 'https://bankofindia.co.in/documents/20121/24946494/personal-loans.webp/e8cce4b3-eda3-3587-26c6-651d752603d9?t=1723636958333' },
        { uri: 'https://carajput.com/blog/wp-content/uploads/2023/08/When-Approaching-Business-Loan.jpg' },
        { uri: 'https://www.financialexpress.com/wp-content/uploads/2019/11/HOME-LOAN-HIKE.jpg' },
        { uri: 'https://www.aavas.in/uploads/images/blog/nbfc-or-bank-blog-2120864946.png' },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Image
                        source={{ uri: logo }}
                        style={styles.logo}
                    />
                    <View>
                        <Text style={styles.title}>Install True Balance and get points</Text>
                        <Text style={styles.taskId}>Task ID · SM0973</Text>
                    </View>
                </View>

                <View style={styles.statsRow}>
                    <Stat icon="⭐" label="100 Points" />
                    <Stat icon="⏱️" label="1 min" />
                    <Stat icon="👥" label="26/100" />
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.startButton}>
                        <Text style={styles.buttonText}>Start Task</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareButton}>
                        <Text style={styles.shareText}>Share</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.tabRow}>
                    <TouchableOpacity style={styles.tabButton}>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25666.png' }}
                            style={styles.tabIcon}
                        />
                        <Text style={styles.tabText}>Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabButton}>
                        <Image
                            source={{ uri: 'https://static-00.iconduck.com/assets.00/world-icon-2048x2048-rw4dcfh2.png' }}
                            style={styles.tabIcon}
                        />
                        <Text style={styles.tabText}>Website Link</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.imagesLabel}>Images</Text>
                <FlatList
                    data={imageData}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item.uri }} style={styles.carouselImage} />
                    )}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                />
            </View>

            <View style={styles.card}>
                <Text style={styles.sectionHeader}>About This Task</Text>
                <Text style={styles.aboutText}>
                    Hello Friend, Are you in urgent need of money? Quick loan for you in minutes from True Balance!
                </Text>
                <Text style={styles.linkText}>https://r4R.app.goo.gl/unc6Msa493r8ds</Text>
            </View>

            <Text style={styles.sectionHeader}>Earnings</Text>
            <View style={styles.card}>

                {[
                    { label: 'Free User', points: 100 },
                    { label: 'Premium User (+5 Extra Points)', points: 105 },
                    { label: 'Premium Plus User (+10 Extra Points)', points: 110 },
                ].map((item, i) => (
                    <View style={styles.earningRow} key={i}>
                        <Text style={styles.earningLabel}>{item.label}</Text>
                        <Text style={styles.earningPoints}>{item.points}</Text>
                    </View>
                ))}
            </View>

            <Text style={styles.sectionHeader}>Important Information</Text>
            <View style={styles.infoBox}>

                {[
                    'Fraudulent activity may result in account suspension.',
                    'Maintain task actions for at least 30 days to avoid penalties.',
                    'Rewards credited after verification (24–48 hours).',
                ].map((item, index) => (
                    <View style={styles.infoRow} key={index}>
                        <Text style={styles.infoIcon}>⚠️</Text>
                        <Text style={styles.infoText}>{item}</Text>
                    </View>
                ))}
            </View>


            <View style={styles.card}>
                <TouchableOpacity style={styles.fileButton}>
                    <Text style={styles.fileButtonText}>📷 Choose File</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Submit Task</Text>
                </TouchableOpacity>
            </View>

            <View style={{ height: 100 }} />
        </ScrollView>
    );
};

const Stat = ({ icon, label }) => (
    <View style={styles.statItem}>
        <Text style={styles.statIcon}>{icon}</Text>
        <Text style={styles.statText}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 10,
        borderRadius: 12,
        marginHorizontal: 10,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginRight: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000',
    },
    taskId: {
        fontSize: 13,
        color: '#007bff',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    statItem: {
        alignItems: 'center',
        flex: 1,
    },
    statIcon: {
        fontSize: 18,
    },
    statText: {
        fontSize: 13,
        color: '#333',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    startButton: {
        backgroundColor: '#4CAF50',
        flex: 1,
        marginRight: 10,
        paddingVertical: 12,
        borderRadius: 20,
    },
    shareButton: {
        borderColor: '#007bff',
        borderWidth: 1,
        flex: 1,
        paddingVertical: 12,
        borderRadius: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '600',
    },
    shareText: {
        textAlign: 'center',
        color: '#007bff',
        fontWeight: '600',
    },
    tabRow: {
        flexDirection: 'row',

        marginVertical: 10,
    },
    tabButton: {
        backgroundColor: '#f5f5f5',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 10,
    },
    tabIcon: {
        width: 18,
        height: 18,
        marginRight: 6,
        tintColor: '#444',
    },
    tabText: {
        fontSize: 13,
        color: '#444',
    },
    imagesLabel: {
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 6,
        marginLeft: 10,
        color: '#000',
    },
    carouselImage: {
        width: 150,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    sectionHeader: {
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 8,
        color: '#000',
    },
    aboutText: {
        fontSize: 14,
        marginBottom: 6,
        color: '#333',
    },
    linkText: {
        color: '#007bff',
        textDecorationLine: 'underline',
    },
    earningRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 6,
    },
    earningLabel: {
        fontSize: 14,
        color: 'red',
    },
    earningPoints: {
        fontSize: 14,
        fontWeight: '600',
        color: '#f9a825',
    },
    infoBox: {
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: 10,
        borderRadius: 12,
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    infoIcon: {
        marginRight: 8,
        fontSize: 16,
    },
    infoText: {
        fontSize: 13,
        color: '#444',
        flex: 1,
    },
    fileButton: {
        backgroundColor: '#9c27b0',
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
    },
    fileButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
    },
    submitButton: {
        backgroundColor: '#d3d3d3',
        padding: 12,
        borderRadius: 8,
    },
    submitButtonText: {
        textAlign: 'center',
        fontWeight: '600',
        color: '#666',
    },
});

export default TaskDetailCard;
