import { Text, StyleSheet, View } from 'react-native'

type Props = {
	time: number
}

export function TimerDisplay({ time }: Props) {
	const minutes = Math.floor(time / 60)
	const seconds = time % 60

	const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

	return (
		<View style={styles.container}>
			<Text style={styles.time}>{formatted}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},
	time: {
		fontSize: 64,
		fontWeight: 'bold',
	},
})
