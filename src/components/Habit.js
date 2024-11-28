import React from "react";

export default function Habit({ habit, onToggleHabit, onDeleteHabit }) {
    return (
      <div>
        <input
          type="checkbox"
          checked={habit.completed} // Checked based on habit's state
          onChange={() => onToggleHabit(habit.id)} // Toggle the completion
        />
        <span style={{ textDecoration: habit.completed ? "line-through" : "none" }}>
          {habit.name}
        </span>
        <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
      </div>
    );
  }
  