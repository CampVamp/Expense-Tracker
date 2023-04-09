import { Field, Form, Formik } from "formik";

const FieldClass =
  "border-b-2 border-white bg-transparent text-white placeholder-gray-500 md:text-right font-normal focus:outline-none xl:w-96 p-3 font-subHeading focus:border-green-500 focus:bg-black-100 bg-gray-900 bg-opacity-10 w-full";
const FieldClassDropDown =
  "basis-3/4 w-full text-white border-b-2 border-white bg-transparent placeholder-gray-500 md:text-right font-normal focus:outline-none p-3 font-subHeading focus:border-green-500 focus:bg-black-100 bg-gray-900 bg-opacity-10 w-full";

type formData = {
  paidfor: string;
  paidother?: string;
  amt: string;
};

const payment = () => {
  let initialValues: formData = {
    paidfor: "",
    paidother: "",
    amt: "",
  };

  const onSubmit = (values: formData) => {
    console.log("Hello Ajay, the form was submitted!");
    console.log(values);
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values }) => {
            return (
              <Form className="flex flex-col justify-center gap-4 w-80">
                <Field
                  component="select"
                  name="paidfor"
                  className={FieldClassDropDown}
                >
                  <option value="" disabled hidden>
                    Paid for
                  </option>
                  <option value="Petrol">Petrol</option>
                  <option value="Parking">Parking</option>
                  <option value="Snacks">Snacks</option>
                  <option value="other">Other</option>
                </Field>
                {values.paidfor == "other" ? (
                  <Field
                    className={FieldClass}
                    placeholder="Paid for?"
                    name="paidother"
                    type="text"
                  ></Field>
                ) : null}
                <Field
                  className={FieldClass}
                  placeholder="How much did you pay?"
                  name="amt"
                  type="text"
                ></Field>
                <button className=" bg-green-600 py-3 rounded-lg" type="submit">
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default payment;
