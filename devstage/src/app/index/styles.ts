import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imgBackground: {
		flex: 1,
		width: '100%',
	},
	header: {
		paddingTop: 32,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 40,
	},
	logo: {
		width: 87,
		height: 24,
	},
	headerContent: {
		paddingTop: 20,
	},
	title: {
		fontSize: 36,
		fontWeight: '600',
		color: colors.blue[300],
	},
	subtitle: {
		fontSize: 32,
		fontWeight: '400',
		color: colors.gray[100],
	},
	card: {
		marginHorizontal: 16,
		padding: 24,
		flexDirection: 'column',
		gap: 24,
		backgroundColor: colors.gray[700],
		borderWidth: 1,
		borderColor: colors.gray[600],
		borderRadius: 16,
	},
	aboutHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	aboutTitle: {
		fontSize: 20,
		fontWeight: '600',
		color: colors.gray[200],
	},
	aboutStatus: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	aboutSubTitle: {
		fontSize: 12,
		fontWeight: '600',
		color: colors.purple[300],
		textTransform: 'uppercase',
	},
	description: {
		fontSize: 14,
		fontWeight: '400',
		color: colors.gray[300],
	},
});
