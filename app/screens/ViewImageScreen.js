import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>

            <View style={styles.navbar}>
                <View style={[styles.delete, {backgroundColor:"dodgerblue"}]}>
                <Feather name="x" size={24} color="#fff" />
                </View>
            <AppText/>
                <View style={styles.delete}>
                    <MaterialCommunityIcons name="delete" size={24} color="#fff" />
                </View>
            </View>

            <Image
            style={{ width: "100%", height:600 }}
            source={require("../assets/chair.jpg")}
            />
            <AppButton title="login"/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        marginTop: 30,
        display: "flex",
        justifyContent: "flex-start", 

    },
    navbar: {
        width: "100%",
        display:'flex',
        justifyContent: "space-between",
        flexDirection: "row", 
        paddingHorizontal: 15, 
        paddingVertical: 10
    },
    delete: {
        width: 40,
        height: 40,
        backgroundColor: "tomato",
        alignItems:"center",
        justifyContent:"center", 
        borderRadius: 4, 
    }
})
export default ViewImageScreen;

