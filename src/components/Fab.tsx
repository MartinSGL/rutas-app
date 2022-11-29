import React from 'react'
import { StyleProp, View, ViewStyle, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import BlackButton from './BlackButton';

interface Props {
    iconName: string;
    onPress: () => void
    style?: StyleProp<ViewStyle>
}

const Fab = ({iconName,onPress,style}:Props) => {
  return (
    <View style={{...style as ViewStyle}}>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.BlackButton}
        >
            <Icon name={iconName} color={'white'} size={35} />
        </TouchableOpacity>
    </View>
  )
}

export default Fab

const styles = StyleSheet.create({
    BlackButton:{
        zIndex:999,
        height:50,
        width:50,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:3
        },
        shadowOpacity:0.27,
        shadowRadius:4.65,
        elevation:6
    }
});