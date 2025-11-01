import { useThemeStore } from "@/store/themeStore";
import { router } from "expo-router";
import {
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export default function Home() {
	const { theme, toggleTheme } = useThemeStore();

	const isTrevas = theme === "trevas";

	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: isTrevas ? "#000" : "#fff" },
			]}
		>
			<Text style={[styles.title, { color: isTrevas ? "#fff" : "#000" }]}>
				TELA PRINCIPAL RADICAL
			</Text>
			<TouchableOpacity
				onPress={toggleTheme}
				style={[
					styles.button,
					{ backgroundColor: isTrevas ? "#222" : "#ffe77cff" },
				]}
			>
				<Text style={{ color: isTrevas ? "#fff" : "#000" }}>
					TROCAR TEMA PRA{" "}
					{isTrevas
						? "LUZ HIPER OMEGA DO SOL SUPREMO"
						: "DARK LORD DAS TREVAS ROCK N ROLL"}
				</Text>
			</TouchableOpacity>
			<Pressable
				onPress={() => {
					router.navigate("/tela2");
				}}
			>
				<Text>IR PRA TELA 2 QUE É SUPER LEGAL</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 40,
	},
	button: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 8,
	},
});
