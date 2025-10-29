import { StyleSheet } from 'react-native';

const PRIMARY_BLUE = '#0073e6';
const ACCENT_COLOR = '#EC1164';
const LIGHT_BACKGROUND = '#f5f8fa';
const WHITE_COLOR = '#ffffff';
const GREY_TEXT = '#333333';

export const styles = StyleSheet.create({

    containerHome: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: LIGHT_BACKGROUND,
    },
    containerResult: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: WHITE_COLOR,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 25,
        color: PRIMARY_BLUE,
        textAlign: "center",
    },
    resultado: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: GREY_TEXT,
        textAlign: 'center',
    },
    result: {
        fontSize: 30,
        fontWeight: 'bold',
        color: ACCENT_COLOR,
        marginTop: 20,
        marginBottom: 10,
    },
    error: {
        marginTop: 20,
        color: 'red',
        fontWeight: '600',
    },

    inputProfile: {
        width: '80%',
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: WHITE_COLOR,
        marginBottom: 10,
        padding: 10,
        borderRadius: 8,
        fontSize: 16,
        color: GREY_TEXT,
        textAlign: 'center',
    },

    inputBlue: {
        width: '90%',
        height: 55,
        borderWidth: 1,
        borderColor: PRIMARY_BLUE,
        backgroundColor: WHITE_COLOR,
        marginBottom: 15,
        padding: 15,
        borderRadius: 10,
        fontSize: 16,
        color: GREY_TEXT,
        elevation: 2,
    },
    inputFocused: {
        borderColor: ACCENT_COLOR,
        backgroundColor: '#fff7f7',
    },
    pickerContainer: {
        width: '90%',
        borderColor: PRIMARY_BLUE,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: WHITE_COLOR,
        marginBottom: 20,
        overflow: 'hidden',
        elevation: 2,
    },
    picker: {
        height: 55,
        width: '100%',
        color: PRIMARY_BLUE,
    },


    buttonSum: {
        marginTop: 15,
        backgroundColor: PRIMARY_BLUE,
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 10,
        elevation: 3,
    },
    buttonBack: {
        marginTop: 20,
        backgroundColor: ACCENT_COLOR,
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 10,
        elevation: 3,
    },
    buttonText: {
        color: WHITE_COLOR,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },


    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 30,
        borderWidth: 4,
        borderColor: ACCENT_COLOR,
    },
    logoFono: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBlock: 25,
        borderRadius: 20,

    },
    perfilInfo: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        marginBottom: 5,
    },
    perfilLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GREY_TEXT,
    },
    perfilValue: {
        fontSize: 16,
        color: PRIMARY_BLUE,
        fontWeight: '600',
    },
});
