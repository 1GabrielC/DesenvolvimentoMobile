import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStore = {
	theme: "luz" | "trevas";
	toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>()(
	persist(
		(set) => ({
			theme: "luz",
			toggleTheme: () =>
				set((state) => ({
					theme: state.theme === "luz" ? "trevas" : "luz",
				})),
		}),
		{
			name: "tema-radical-storage",
			storage: {
				getItem: async (name) => {
					const value = await AsyncStorage.getItem(name);
					return value ? JSON.parse(value) : null;
				},
				setItem: async (name, value) => {
					await AsyncStorage.setItem(name, JSON.stringify(value));
				},
				removeItem: async (name) => {
					await AsyncStorage.removeItem(name);
				},
			},
		},
	),
);
