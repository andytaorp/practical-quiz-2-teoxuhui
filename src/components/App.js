import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";
//hi
function App() {
  const [habits, setHabits] = useState([]);

 
  const handleAddHabit = (habitName) => {
    const newHabit = {
      id: Date.now(), 
      name: habitName,
      completed: false, 
    };
    setHabits((prevHabits) => [...prevHabits, newHabit]); 
  };


  const handleToggleHabit = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };


  const handleDeleteHabit = (id) => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id)); 
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Habit Tracker</h1>
      <AddHabitForm onAddHabit={handleAddHabit} /> 
      <HabitList
        habits={habits} 
        onToggleHabit={handleToggleHabit} 
        onDeleteHabit={handleDeleteHabit} 
      />
    </div>
  );
}

export default App;
