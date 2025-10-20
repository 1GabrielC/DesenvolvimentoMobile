import { View, Button, StyleSheet } from 'react-native'

type Props = {
	isRunning: boolean
	onStartPause: () => void
	onReset: () => void
}

export function Controls({ isRunning, onStartPause, onReset }: Props) {
	return (
		<View style={styles.container}>
			<Button title={isRunning ? 'Pause' : 'Start'} onPress={onStartPause} />
			<View style={styles.space} />
			<Button title="Reset" onPress={onReset} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginTop: 20,
	},
	space: {
		width: 10,
	},
})
