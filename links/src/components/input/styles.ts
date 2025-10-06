import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 52,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: colors.gray[800],
		backgroundColor: colors.gray[900],
		padding: 10,
		color: colors.gray[100],
		fontSize: 16,
	},
});
