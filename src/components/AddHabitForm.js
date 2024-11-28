import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      onAddHabit(habitName); 
      setHabitName(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new habit"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <button
        type="submit"
      >
        Add Habit
      </button>
    </form>
  );
}
