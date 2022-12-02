import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { colors } from '../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { getWidth } from '../utils/functions';

import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import normalize from 'react-native-normalize';

const CELL_COUNT = 4;

const UnderlineExample = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue
    });

    return (
        <SafeAreaView >
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <View
                        // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        style={[styles.cellRoot, isFocused && styles.focusCell, { borderBottomColor: '#5E5E5E' }]}
                    >
                        <Text style={[styles.cellText, { color: '#000' }]}>{symbol || (isFocused ? <Cursor /> : null)}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {padding: 20, minHeight: 300},
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: {
        marginTop: 20,
        width: '82%',
        alignSelf: 'center'
    },
    cellRoot: {
        width: getWidth(14),
        height: getWidth(14),
        marginVertical: normalize(2),
        marginHorizontal: getWidth(2),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: normalize(30),
        borderColor: colors.LIGHT_GREY,
        borderWidth: 1
    },
    cellText: {
        color: '#000',
        fontSize: normalize(20),
        textAlign: 'center'
    },
    focusCell: {
        borderColor: colors.DARK_BROWN,
        borderWidth: 1
    }
});

export default UnderlineExample;