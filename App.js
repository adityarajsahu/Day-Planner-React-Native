import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    const startAddGoalHandler = () => {
        setModalIsVisible(true);
    };

    const addGoalHandler = (enteredGoal) => {
        setCourseGoals((currentGoals) => [...currentGoals, { text: enteredGoal, id: Math.random().toString() }]);
    };

    const deleteGoalHandler = (id) => {
        setCourseGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== id);
        });
    };

    return (
        <View style={styles.appContainer}>
            <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler} />
            <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                id={itemData.item.id}
                                onDeleteItem={deleteGoalHandler}
                            />
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                />
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
    goalsContainer: {
        flex: 4,
    },
});
