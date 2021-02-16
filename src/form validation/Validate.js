const validate = (person) => {
  let errors = {};
  if (!person.firstName.trim()) {
    errors.firstName = "Name is required";
  } else if (person.firstName.length < 3) {
    errors.firstName = "Name must be at least 3 characters";
  } else if (!person.firstName.match(/^[a-zA-Z]+$/)) {
    errors.firstName = "Name must not contain number";
  }

  if (!person.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !person.email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    errors.email = "Email is not valid";
  }

  if (!person.password.trim()) {
    errors.password = "Password is required";
  } else if (person.password.length < 5) {
    errors.password = "Password must be at least 3 characters";
  }

  if (!person.password2.trim()) {
    errors.password2 = "Password is required";
  } else if (person.password2.length < 5) {
    errors.password2 = "Password must be at least 3 characters";
  } else if (person.password2 !== person.password) {
    errors.password2 = "Password must match";
  }

  return errors;
};

export default validate;
