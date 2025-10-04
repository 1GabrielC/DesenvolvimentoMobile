import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
import { fontFamily } from '../../styles/font-family'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: colors.background.primary,
		paddingTop: 62,
	},
	logo: {
		width: 134,
		height: 34,
	},
	form: {
		width: '100%',
		paddingHorizontal: 24,
		gap: 7,
		marginTop: 42,
	},
	content: {
		flex: 1,
		width: '100%',
		backgroundColor: colors.background.elevated,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
		padding: 24,
		paddingTop: 32,
		marginTop: 24,
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		gap: 12,
		borderBottomWidth: 1,
		borderBottomColor: colors.border.primary,
		paddingBottom: 16,
	},
	clearButton: {
		marginLeft: 'auto',
	},
	clearText: {
		font: fontFamily.textSmall,
		color: colors.text.muted,
	},
	separator: {
		width: '100%',
		height: 1,
		backgroundColor: colors.border.primary,
		marginVertical: 16,
	},
	listContent: {
		paddingTop: 16,
		paddingBottom: 62,
	},
	empty: {
		fontSize: 14,
		textAlign: 'center',
		color: colors.text.muted,
	},
})
