import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Button({ title }) {
	return (
		<TouchableOpacity style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	)
}
