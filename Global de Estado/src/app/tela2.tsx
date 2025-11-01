import { useThemeStore } from "@/store/themeStore";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Tela2() {
	const { theme } = useThemeStore();
	const isTrevas = theme === "trevas";

	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: isTrevas ? "#000" : "#fff" },
			]}
		>
			<Text style={[styles.title, { color: isTrevas ? "#fff" : "#000" }]}>
				{isTrevas
					? "ROCK N ROLL BABYYYYYYYYYYYYYYYYYYYYYYY"
					: "PRAISE THE SUN MOTHAFUCKA"}
			</Text>

			<Text style={[styles.subtitle, { color: isTrevas ? "#ccc" : "#333" }]}>
				Tema atual: {isTrevas ? "DARK LORD DAS TREVAS" : "LUZ HIPER OMEGA"}
			</Text>
			<Pressable
				onPress={() => {
					router.navigate("/home");
				}}
			>
				<Text>IR PRA TELA PRINCIPAL QUE É MAIS MANEIRA AINDA</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	title: {
		fontSize: 32,
		textAlign: "center",
		fontWeight: "bold",
		marginBottom: 20,
	},
	subtitle: {
		fontSize: 18,
	},
});
