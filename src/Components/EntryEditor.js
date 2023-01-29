import React, {useState} from "react";

function EntryEditor() {
   const [formData, setFormData] = useState({
      title : "",
      content : "",
      date : "",
   })

   function handleChange(event){
      event.preventDefault();
      setFormData({
         ...formData,
         [event.target.name]: event.target.value,
       });
      console.log(formData)
   }

   function handleSubmit(){
      
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