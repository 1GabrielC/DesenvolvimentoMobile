import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
import { fontFamily } from '../../styles/font-family'

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.accent.brand,
		height: 48,
		width: '100%',
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: colors.background.elevated,
		font: fontFamily.textMedium,
	},
})
