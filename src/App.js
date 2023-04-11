import "./App.css";
import { Formik, Form, Field } from "formik";
function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          name: " ",
          phone: "enter your phone",
          password: "",
          gender: "",
          date: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label>name: </label>
          <Field name="name" type="text" placeholder="enter your name" />
          <br />

          <label>number: </label>
          <Field name="phone" type="number" placeholder="enter your number" />
          <br />
          <label>password: </label>
          <Field name="password" type="password" />
          <br />
          <br />
          <label>Gender: </label>
          <br />
          <label>Male: </label>
          <Field name="gender" type="radio" value="male" />
          <label>Female: </label>
          <Field name="gender" type="radio" value="Female" />
          <label>Date: </label>
          <Field name="date" type="date" />
          <br />
          <label>standard: </label>

          <Field name="std" as="select">
            <option>6 th</option>
            <option>7 th</option>
            <option>8 th</option>
          </Field>
          <br />
          <button type="submit">submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
