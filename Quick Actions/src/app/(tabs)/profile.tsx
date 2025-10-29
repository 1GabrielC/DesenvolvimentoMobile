import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>PROFILE</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignItems: "center" },
	title: {
		fontSize: 50,
		fontWeight: "bold",
		color: "#0059ffff",
	},
});