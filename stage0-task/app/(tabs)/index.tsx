import { Link } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Link
				style={styles.link}
				href={"https://github.com/belloshehu/Repository-Configuration"}
			>
				Project's GitHub Repository
			</Link>

			<Link
				style={{ ...styles.link, backgroundColor: "black" }}
				href={"https://hng.tech/hire/flutter-developers"}
			>
				Hire Flutter Developer Talent
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		gap: 32,
		flex: 1,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
	link: {
		padding: 10,
		paddingHorizontal: 20,
		backgroundColor: "green",
		color: "white",
		borderRadius: 5,
	},
});
