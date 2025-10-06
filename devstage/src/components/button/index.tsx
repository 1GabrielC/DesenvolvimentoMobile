import { colors } from '@/styles/colors'
import { ArrowRight } from 'lucide-react-native'
import {
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from 'react-native'
import { styles } from './styles'

type ButtonProps = TouchableOpacityProps & {
	title: string
}

export function Button({ title, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity {...rest} style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<ArrowRight size={24} color={colors.blue[300]} />
		</TouchableOpacity>
	)
}
