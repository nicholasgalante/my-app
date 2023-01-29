import React, {useState} from "react";

function EntryEditor({onAddEntry}) {
   const [formData, setFormData] = useState({
      title : "",
      content : "",
      date : "",
   })

   function handleChange(event){
      const date = new Date().toJSON().slice(0, 10);;
      setFormData({
         ...formData,
         [event.target.name]: event.target.value,
         date: date,
       });
      console.log(formData) //CONSOLE LOG DATA
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
         .then(newEntry => onAddEntry(newEntry))
       event.reset()
   }

   return (
      <div>
         EntryEditor
         <form id="entryEditor">
            <input
               type="text"
               name="title"
               onChange={handleChange}
               value={formData.title}
            />
            <textarea id="entryEditor"
               name="content"
               rows="15"
               cols="100"
               onChange={handleChange}
               value={formData.content}
               placeholder="Your text here ">
            </textarea>
            <button type="submit" onClick={handleSubmit}>Save Entry</button>
         </form>
      </div>
   )
}

export default EntryEditor;