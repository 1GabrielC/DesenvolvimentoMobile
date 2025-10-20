import { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { TimerDisplay } from '@/components/TimerDisplay'
import { Controls } from '@/components/Controls'

export default function Index() {
	const [time, setTime] = useState(25 * 60)
	const [isRunning, setIsRunning] = useState(false)
	const [cycles, setCycles] = useState(0)

	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

	useEffect(() => {
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				setTime((prev) => {
					if (prev <= 0) {
						if (intervalRef.current) clearInterval(intervalRef.current)
						setIsRunning(false)
						setCycles((c) => c + 1)
						Alert.alert('Ciclo concluído!')
						return 25 * 60
					}
					return prev - 1
				})
			}, 1000)
		} else {
			if (intervalRef.current) clearInterval(intervalRef.current)
		}

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current)
		}
	}, [isRunning])

	const handleStartPause = () => setIsRunning((prev) => !prev)
	const handleReset = () => {
		setIsRunning(false)
		setTime(25 * 60)
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>POMODORO</Text>
			<TimerDisplay time={time} />
			<Controls
				isRunning={isRunning}
				onStartPause={handleStartPause}
				onReset={handleReset}
			/>
			<Text style={styles.cycles}>Ciclos completos: {cycles}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
	cycles: { marginTop: 40, fontSize: 18 },
})
