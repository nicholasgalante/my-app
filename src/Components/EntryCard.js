import React from "react";

function EntryCard({ entry }) {
  const { date, title, id } = entry;
  return (
    <div>
      {title}
      <br />
      {date}
    </div>
  );
}

export default EntryCard;
