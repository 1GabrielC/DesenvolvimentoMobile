import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
	},
	title: {
		fontSize: 12,
		fontWeight: 600,
	},
	activeTitle: {
		color: colors.text.muted,
	},
})
