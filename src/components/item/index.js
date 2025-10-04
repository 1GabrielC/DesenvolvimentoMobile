import { Trash2 } from 'lucide-react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../styles/colors'
import { StatusIcon } from '../status-icon'
import { styles } from './styles'

export function Item({ data, onStatus, onRemove }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity activeOpacity={0.8} onPress={onStatus}>
				<StatusIcon status={data.status} />
			</TouchableOpacity>

			<Text style={styles.description}>{data.description}</Text>

			<TouchableOpacity onPress={onRemove}>
				<Trash2 size={18} color={colors.text.muted} />
			</TouchableOpacity>
		</View>
	)
}
