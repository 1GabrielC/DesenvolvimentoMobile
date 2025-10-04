import { Text, TouchableOpacity } from 'react-native'
import { colors } from '../../styles/colors'
import { FilterStatus } from '../../types/filter-status'
import { StatusIcon } from '../status-icon'
import { styles } from './styles'

export function Filter({ status, isActive, ...rest }) {
	const color = isActive ? colors.text.content : colors.text.muted

	return (
		<TouchableOpacity {...rest} style={styles.container}>
			<StatusIcon status={status} color={color} />
			<Text style={[styles.title, { color }]}>
				{status === FilterStatus.DONE ? 'Pendentes' : 'Comprados'}
			</Text>
		</TouchableOpacity>
	)
}
