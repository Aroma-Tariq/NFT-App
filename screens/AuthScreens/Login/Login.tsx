import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import normalize from 'react-native-normalize';
import { StyleSheet,} from 'react-native';
import * as Animatable from 'react-native-animatable';
// import { Text, Button, InputField, Container, PhoneNumberInput } from '../../../components';
import {PhoneNumberInput, Button, Text} from '../../../components'
// import styles from './styles';
import { colors } from '../../../utils/constants';
// import { validateForm } from '../../../utils/functions';
//....image import ...///
// import { loginRequest } from '@redux/actions/AuthActions';

const Login = (props: any): React.ReactElement<any> | any => {
	let dropdownAlert = useRef(null);
	return (
		<SafeAreaView style={styles.mainView}>
			<StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' />
			<View style={styles.cardView}>
				<View style={styles.topView}>
					<Text style={styles.headingText}>Welcome back</Text>
					<Text style={styles.description}>Login to your account</Text>
				</View>
				<PhoneNumberInput />
				<Text style={styles.bottomDescription}>You will recieve an SMS verification that may apply message and data rates</Text>
				<Button style={styles.button} title={'Log In'} onPress={() => props.navigation.navigate('Verification')} />
			</View>
		</SafeAreaView>
	);
};


const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.WHITE
	},
	headingText: {
		fontSize: normalize(25),
		// fontFamily: 'Nunito-ExtraBold',
		color: colors.BLACK
	},
	cardView: {
		marginHorizontal: normalize(30)
	},
	description: {
		marginVertical: normalize(5),
		// fontFamily: 'Nunito-Regular',
		color: colors.BLACK
	},
	bottomDescription: {
		fontSize: normalize(12),
		marginVertical: normalize(10),
		// fontFamily: 'Nunito-Regular',
		color: colors.GREY
	},
	button: {
		backgroundColor: colors.DARK_BROWN,
		marginVertical: normalize(20),
		height: normalize(45),
		borderRadius: normalize(40)
	},
	topView: {
		marginVertical: normalize(5)
	}
});

export default Login;