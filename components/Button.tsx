import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, ActivityIndicator, } from 'react-native';
import normalize from 'react-native-normalize';
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';
//////////////////////////////////////////////////////
import { colors } from '../utils/constants';
import Text from './Text';
//////////////////////////////////////////////////////

const Button = (props) => {
	// const appState = useSelector((state) => state.app);

	const { onPress, style, isLoading, loadingColor, title, titleText, icon } = props;
	return (
		<TouchableOpacity
			style={[
				styles.mainContainer,
				// {
				// 	backgroundColor: appState.isDarkMode ? colors.DARK_MODE : colors.THEME
				// },
				style
			]}
			onPress={onPress}
		>
			{isLoading ? (
				<ActivityIndicator size="small" color={'white'} />
			) : (
				<Animatable.View animation="bounceInRight" style={styles.buttonInner}>
					{icon && (
						<View style={styles.marginRight}>
							<Image style={styles.iconStyle} source={icon} />
						</View>
					)}
					<View style={{}}>
						<Text style={[styles.titleText, titleText]}>{title}</Text>
					</View>
				</Animatable.View>
			)}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		height: normalize(45, 'height'),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.THEME,
		borderRadius: normalize(5, 'height'),
		marginVertical: normalize(3, 'height')
	},
	marginRight: {
		marginRight: 10
	},
	titleText: {
		fontSize: normalize(18),
		// fontFamily: 'Nunito-Black',
		color: 'white'
	},
	buttonInner: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	iconStyle: {
		marginRight: '2%',
		width: normalize(20),
		height: normalize(20)
	}
});

export default Button;