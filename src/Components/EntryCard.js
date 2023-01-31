import React from "react";

function EntryCard({ entry }) {
  const { date, title } = entry;
  return (
    <div>
      {title}
      <br />
      {date}
    </div>
  );
}

export default EntryCard;
