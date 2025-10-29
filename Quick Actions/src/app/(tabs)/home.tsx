import * as QuickActions from "expo-quick-actions";
import { useQuickActionCallback } from "expo-quick-actions/hooks";
import { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function Home() {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useQuickActionCallback((action) => {
		console.log("Ação rápida recebida:", action);

		if (action.id === "toggle-theme") {
			setTheme((prev) => (prev === "light" ? "dark" : "light"));
		}
	});

	useEffect(() => {
		QuickActions.setItems([
			{
				id: "toggle-theme",
				title: "Trocar tema",
				subtitle: "Alternar entre claro e escuro",
				icon: Platform.OS === "ios" ? "symbol:moon.circle" : "theme_icon",
			},
		]);
	}, []);

	const isDark = theme === "dark";
	const backgroundColor = isDark ? "#121212" : "#f4f4f4";
	const textColor = isDark ? "#fff" : "#000";

	return (
		<View style={[styles.container, { backgroundColor }]}>
			<Text style={styles.title}>HOME</Text>
			<Text style={[styles.text, { color: textColor }]}>
				Tema atual: {theme === "light" ? "🌞 Claro" : "🌙 Escuro"}
			</Text>
			<Text style={[styles.hint, { color: textColor }]}>
				Use o atalho "Trocar tema" pressionando o ícone do app!
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 26,
		fontWeight: "bold",
		marginBottom: 10,
	},
	title: {
		fontSize: 50,
		fontWeight: "bold",
        color: '#0059ffff'
	},
	hint: {
		fontSize: 16,
		opacity: 0.7,
	},
});