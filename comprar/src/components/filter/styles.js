import { StyleSheet } from 'react-native'
import { fontFamily } from '../../styles/font-family'

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
	},
	title: {
		font: fontFamily.textSmall,
	},
})
