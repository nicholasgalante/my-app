import React, {useState} from "react";

function EntryEditor() {
   const [formData, setFormData] = useState({
      title : "",
      content : "",
      date : "",
   })

   function handleChange(event){
      setFormData({
         ...formData,
         [event.target.name]: event.target.value,
       });
      console.log(formData)
   }

   function handleSubmit(event){
      event.preventDefault();
      fetch("http://localhost:3000/entries", {
         method: "POST",
         headers: { "Content-Type": "application/json", },
         body: JSON.stringify({
           "title": formData.title,
           "content": formData.content,
           "date": formData.date
         })
       })
         .then(res => res.json())
         .then(newEntry => console.log(newEntry))
   }

   return (
      <div>
         EntryEditor
         <form id="entryEditor">
            <input
               type="text"
               name="title"
               onChange={handleChange}
            />
            <textarea id="entryEditor"
               name="content"
               rows="15"
               cols="100"
               onChange={handleChange}
               placeholder="Your text here ">
            </textarea>
            <button type="submit" onClick={handleSubmit}>Save Entry</button>
         </form>
      </div>
   )
}

export default EntryEditor;