import { TextInput } from 'react-native'
import { styles } from './styles'

export function Input(props) {
	return (
		<TextInput
			style={styles.container}
			placeholderTextColor='#74798b'
			{...props}
		/>
	)
}
