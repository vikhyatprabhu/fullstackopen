import React from "react";


const PersonForm=({newName,newPhoneNumber,handleNameChange,handleNumberChange,handleSubmit})=>{
   return ( 
   <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          number: <input value={newPhoneNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
   )
}

export default PersonForm;