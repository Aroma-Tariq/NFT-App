import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
// import { Text, Button, InputField, Container, CodeVerification } from '../../../components';
import { Text, Button, CodeVerification } from '../../../components';
// import styles from './styles';
import { colors } from '../../../utils/constants';
// import { validateForm } from '../../../utils/functions';
//....image import ...///
// import { signUpRequest } from '@redux/actions/AuthActions';

const Verification = (props) => {

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' />
			<View style={styles.cardView}>
				<View style={styles.topView}>
					<Text style={styles.headingText}>Enter authentication code</Text>
					<Text style={styles.description}>Enter the 4-digit that we have sent via the phone number
			<Text style={styles.numberText}>  +62-813-8172-5977</Text>
					</Text>
				</View>
				<CodeVerification />
				<View style={styles.bottomView}>
					<Button style={styles.button} title={'Continue'} onPress={() => props.navigation.navigate('Verification')} />
					<Text style={styles.resendText}>Resend code</Text>
				</View>
			</View>

		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.WHITE
	},
	cardView: {
		marginHorizontal: normalize(20),
		marginVertical: normalize(20),
	},
	headingText: {
		fontSize: normalize(20),
		// fontFamily: 'Nunito-Black',
		textAlign: 'center',
		color: colors.BLACK
	},
	numberText: {
		fontSize: normalize(16),
		// fontFamily: 'Nunito-Black',
		color: colors.BLACK
	},
	description: {
		marginVertical: normalize(5),
		fontSize: normalize(14),
		marginHorizontal: normalize(20),
		textAlign: 'center',
		fontFamily: 'Nunito-Regular',
		color: colors.BLACK
	},
	button: {
		backgroundColor: colors.DARK_BROWN,
		marginVertical: normalize(20),
		height: normalize(45),
		borderRadius: normalize(40)
	},
	resendText: {
		fontSize: normalize(16),
		// fontFamily: 'Nunito-Black',
		color: colors.DARK_BROWN,
		alignSelf: 'center',
	},
	bottomView: {
		marginVertical: normalize(50)
	},
    topView: {
		marginVertical: normalize(5)
	}
});

export default Verification;