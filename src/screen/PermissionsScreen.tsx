import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import BlackButton from '../components/BlackButton'
import { PermissionsContext } from '../context/PermissionsContext'

//platform :ios, '12.4'

const PermissionsScreen = () => {

    const {permissions, askLocationPermission} = useContext(PermissionsContext)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Es necesario utiliza el GPS para esta aplicacion</Text>
            <BlackButton title="Permiso" onPress={askLocationPermission}/>
            <Text
                style={{
                    marginTop:20
                }}
            >{JSON.stringify(permissions,null,5)}</Text>
        </View>
    )
}

export default PermissionsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        width:250,
        fontSize:18,
        textAlign:'center',
        marginBottom:20
    }
});