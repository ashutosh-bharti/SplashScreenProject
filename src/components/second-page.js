import React from 'react';  
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SecondPage = ({ navigation, route }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
            <Text>Second Page Screen</Text>
            <Text>This is {route.params.name}'s profile</Text>
            <Button
                title="Go to First Page"
                onPress={() =>
                navigation.goBack()
                }
            />
      </View>  
    );
};

export default SecondPage;