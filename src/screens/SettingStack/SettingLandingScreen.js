import React from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, Card, Button, Icon, Title } from 'react-native-paper'; // Importing Button as it was in the original snippet, though not used in the final UI
import ThemeSelector from '../../components/ThemeSelector';

const SettingLandingScreen = ({ navigation, route }) => {
  // The 'logout' prop from route.params was in your original snippet but not used for UI,
  // so it's omitted here for simplicity as the focus is on the visual layout.
  // const { logout } = route.params;

  // Define the items for the settings cards, using string icons for emoji mapping
  const items = [
    {
      name: 'Printer configuration',
      icon: 'printer', // String icon name for emoji mapping
      description: 'Configure your printer settings for order printing.',
      onPress: () => navigation.navigate('PrinterConfigScreen') // Placeholder for navigation
    },
    {
      name: 'Prep stations configuration',
      icon: 'kitchen', // String icon name for emoji mapping
        description: 'Set up your prep stations for efficient order management.',
      onPress: () => console.log('PrepStationConfigScreen') // Placeholder for navigation
    },
    {
      name: 'Company configuration',
      icon: 'company', // Using 'company' for the emoji mapping, as 'tv' was in original but 'Building2' was in web version
        description: 'Manage your company settings and information.',
      onPress: () => console.log('CompanyConfigScreen') // Placeholder for navigation
    }
  ];

  // SettingCard component to render individual setting items, styled like the original
const SettingCard = ({ item }) => (
    <Pressable onPress={item.onPress} style={{ flex: 1 }}>
    <View style={styles.settingCard}>
        <View style={styles.settingCardTitle}>
            <Icon source={item.icon} size={18}/>
            <Text style={styles.settingCardText}>{item.name}</Text>
            {/* Description is optional; remove if not needed */}
            
        </View>
        <View style={{
            paddingTop: 0,
            padding: 16, // Padding inside the card content
        }}>
        {item.description ? (
                <Text style={styles.settingCardDescription}>{item.description}</Text>
            ) : null}
        </View>
    </View>
    </Pressable>
);

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <ThemeSelector/>
      <View style={styles.cardsContainer}>
        {items.map((item, idx) => (
          <SettingCard key={idx} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    padding: 16, // Padding around the content
  },
  cardsContainer: {
    flex:3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Distribute cards evenly
    gap: 12, // Gap between cards (React Native equivalent of Tailwind gap)
  },
  settingCard: {
    flex:1, // Approximately half width for two columns, accounting for gap
    marginBottom: 12, // Margin at the bottom of each card
    borderRadius: 8, // Rounded corners
    elevation: 1, // Shadow for Android
    backgroundColor: '#FFFFFF', // White background for cards
  },
  settingCardTitle: {
    flexDirection: 'row',
    alignItems: 'center', // Align items in a row
    justifyContent: 'flex-start', // Align items to the start (left)
    gap: 10,
    padding: 16, // Padding inside the card content
  },
  settingCardIcon: {
    fontSize: 28, // Icon size
    marginBottom: 8, // Space below the icon
    color: '#4B5563', // Gray color for icons
  },
  settingCardText: {
    fontSize: 16, // Title font size
    fontWeight: '500', // Medium font weight
    color: '#1F2937', // Darker text color
    marginBottom: 4, // Space below the title
    textAlign: 'left', // Align text to the left
  },
  settingCardDescription: {
    fontSize: 12, // Description font size
    color: '#6B7280', // Lighter text color for description
    lineHeight: 18, // Line height for readability
    textAlign: 'left', // Align text to the left
  },
});

export default SettingLandingScreen;
