const validate = (person) => {
    let errors = {};
    if (!person.contactName.trim()) {
      errors.contactName = "Name is required";
    } else if (!person.contactName.match(/^[a-zA-Z]+$/)) {
      errors.contactName = "Name must not contain number";
    }
  
    if (!person.contactEmail.trim()) {
      errors.contactEmail = "Email is required";
    } else if (
      !person.contactEmail.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      errors.contactEmail = "Email is not valid";
    }
  
    if(!person.contactPhone) {
      errors.contactPhone = "Phone is required"
    } else if (!person.contactPhone.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g)) {
       errors.contactPhone = "Phone must not contain Alphabet"
    }
  
    if(!person.contactSubject) {
      errors.contactSubject = "Subject is required"
    }

    if(!person.contactMessage) {
      errors.contactMessage = "Message is required"
    }
  
    return errors;
  };
  
  export default validate;
  