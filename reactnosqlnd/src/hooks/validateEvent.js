export default function validateComment(values) {
  console.log("enter input word validation is running");
  console.log(values);
  let errors = {};
  if (!values.event) {
    errors.event = "message cannot be empty";
  } else if (values.event.length > 12) {
    console.log("AAAAA");
    errors.event = "event cannot be longer than 12 letters";
  }

  return errors;
}
