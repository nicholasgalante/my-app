import React from "react";

function EntryCard({ entry }) {
  const { date, title, id } = entry;
  console.log(entry)
  return (
    <div>
      {id}
      {title}
      <br />
      {date}
    </div>
  );
}

export default EntryCard;
