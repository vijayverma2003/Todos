import React, { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>

      <input
        className="form-control"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        value={title}
      />

      <button type="submit" className="btn btn-primary rounded-pill my-3">
        Add
      </button>
    </form>
  );
}

export default NewReminder;
