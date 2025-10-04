import { StyleSheet } from 'react-native'
import { fontFamily } from '../../styles/font-family'

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 7,
	},
	description: {
		flex: 1,
		font: fontFamily.textMedium,
	},
})
