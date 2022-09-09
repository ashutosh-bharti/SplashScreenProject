import React from 'react';  
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FirstPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
            <Text>First Page Screen</Text>
            <Button
                title="Go to Second Page"
                onPress={() =>
                navigation.navigate('Second', { name: 'Testing' })
                }
            />
      </View>  
    );
};

export default FirstPage;