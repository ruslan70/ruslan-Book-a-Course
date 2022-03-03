function myFunction() {
    /* Datenvalidierung*/
   
    
    if (!validateRequiredList(["firstName", "lastName", "age", "address", "zip","city","email","phone"])) return false;
    if(!validateAgb()) return false;
    

    /*
        selectedOptions enthält eine Liste aller ausgewählten Optionen - 
        normalerweise nur genau eine Option. 
    */
    let valSelect = document.getElementById("kurs").selectedOptions[0].value;
    if (valSelect === "default") {
        alert("Bitte wähle eine Option aus.");
        return false;
    }
  
  }
  
  function validateRequiredList(inputIDs) {
    for (let i = 0; i < inputIDs.length; i++) {
      let inputID = inputIDs[i];
      
      if (!validateRequired(inputID)) return false;
      sessionStorage.setItem(inputID, document.getElementById(inputID).value);
    }
  
    return true;
  }
  
  function validateRequired(inputID) {
    let value = document.getElementById(inputID).value;
  
    if(!value) {
      alert(`Bitte fülle das Feld "${inputID}" aus.`);
      return false;
    }
  
    return true;
  }
  
  function validateAgb() {
    if (document.getElementById("agb").checked == false) 
    {alert(`Bitte wähle das Feld "AGB" aus.`);
        return false;
    }
    
  return true;



  }

