import React, { useState, useRef, useImperativeHandle } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    Text,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { colors } from '../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import normalize from 'react-native-normalize';
import { getWidth} from '../utils/functions'

const PhoneNumberInput = React.forwardRef((props, ref) => {
    const [value, setValue] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [formattedValue, setFormattedValue] = useState('');
    const [valid, setValid] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const phoneInput = useRef(null);

    useImperativeHandle(ref, () => ({
        getPhoneValue: () => {
            return value;
        },
        setPhoneValue: (value) => {
            setValue(value);
        },
    }));

    return (
        <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="CA"
            placeholder="Mobile Number"
            layout="first"
            containerStyle={[styles.container, { width: '100%', backgroundColor: colors.BACKGROUND }]}
            textContainerStyle={[styles.textContainerStyle]}
            textInputProps={{ fontSize: normalize(16) }}
            onChangeText={(text) => {
                setValue(text);
            }}
            onChangeFormattedText={(text) => {
                setFormattedValue(text);
                setCountryCode(phoneInput.current?.getCountryCode() || '');
            }}
            countryPickerButtonStyle={[styles.countryPickerStyle, { backgroundColor: colors.BACKGROUND }]}
            countryPickerProps={{ withAlphaFilter: true }}
            disabled={disabled}
            textInputStyle={{ height: normalize(40), fontSize: 20 }}
            withDarkTheme
            withShadow
        />

    )
})

const styles = StyleSheet.create({
    container: {
        marginVertical: normalize(20),
        height: normalize(50),
        borderRadius: getWidth(2),
        fontSize: normalize(14),
        borderColor: 'white',
        borderWidth: 0
    },
    textContainerStyle: {
        borderWidth: 0.2,
        borderLeftWidth: 0,
        borderColor: colors.GREY,
        backgroundColor: 'white',
        borderTopRightRadius: getWidth(2),
        borderBottomRightRadius: getWidth(2),
    },
    countryPickerStyle: {
        borderRightWidth: 0,
        borderWidth: 0.2,
        borderColor: colors.GREY,
        borderRadius: 0,
        elevation: 0,
        borderTopLeftRadius: getWidth(2),
        borderBottomLeftRadius: getWidth(2),
        shadowOpacity: 0
    }
});

export default PhoneNumberInput;