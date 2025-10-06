import { colors } from '@/styles/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: colors.gray[600],
		borderRadius: 10,
		paddingVertical: 11,
		paddingHorizontal: 16,
		backgroundColor: colors.gray[800],
		gap: 8,
	},
	input: {
		flex: 1,
		fontSize: 16,
		color: colors.gray[100],
	},
})
