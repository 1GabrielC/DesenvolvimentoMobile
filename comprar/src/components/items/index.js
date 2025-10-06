import { TrashIcon } from 'phosphor-react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import { StatusIcon } from '../status-icon'

export function Item({ status, description }) {
	return (
		<View>
			<StatusIcon status={status} />
			<Text>{description}</Text>
			<TouchableOpacity>
				<TrashIcon size={16} />
			</TouchableOpacity>
		</View>
	)
}
