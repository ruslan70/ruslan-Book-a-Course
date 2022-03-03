function validate() {
    /*
        selectedOptions enthält eine Liste aller ausgewählten Optionen - 
        normalerweise nur genau eine Option. 
    */
    let valSelect = document.getElementById("my-selection").selectedOptions[0].value;
    if (valSelect === "default") {
        alert("Bitte wähle eine Option aus.");
        return false;
    }

    /*
        Checkbox: Mit "checked" wird ein Boolean Wert (true|false) ausgegeben.
    */
    let valCheckbox = document.getElementById("my-checkbox").checked;
    if (!valCheckbox) {
        alert("Bitte wähle die Checkbox aus.");
        return false;
    }
}