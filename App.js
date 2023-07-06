import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState("");
    const [courseGoals, setCourseGoals] = useState([]);

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your Course Goal!" onChangeText={goalInputHandler} />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.goalsContainer}>
                {courseGoals.map((goal) => (
                    <Text key={goal}>{goal}</Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
    goalsContainer: {
        flex: 4,
    },
});
