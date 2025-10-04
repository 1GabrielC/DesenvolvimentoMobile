import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.background.elevated,
		paddingHorizontal: 16,
		height: 48,
		width: '100%',
		borderRadius: 8,
		borderWidth: 1,
		borderColor: colors.border.secondary,
	},
})
