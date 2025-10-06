import { colors } from '@/styles/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		backgroundColor: colors.gray[500],
		paddingVertical: 11,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 16,
		fontWeight: '600',
		color: colors.blue[300],
	},
})
