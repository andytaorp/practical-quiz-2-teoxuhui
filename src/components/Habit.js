import React from "react";

export default function Habit({ habit, onToggleHabit, onDeleteHabit }) {
  return (
    <div

    >
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => onToggleHabit(habit.id)} 
      />
      <span
       
      >
        {habit.name}
      </span>
      <button
        onClick={() => onDeleteHabit(habit.id)} 
      >
        Delete
      </button>
    </div>
  );
}
