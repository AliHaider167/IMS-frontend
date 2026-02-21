import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addEmployee } from "../../../services/api";
import Loader from "../../../components/Loader";

const roles = ["seller", "purchaser"];

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  name: Yup.string().required("Name is required"),
  role: Yup.string().oneOf(roles).required("Role is required"),
});

export default function AddEmployeeForm({ onSuccess }) {
  return (
    <Formik
      initialValues={{ username: "", password: "", role: "seller", name: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
        setStatus({ error: "", success: "" });
        try {
          await addEmployee(values);
          setStatus({ success: "Employee added successfully!", error: "" });
          resetForm();
          if (onSuccess) onSuccess();
        } catch (err) {
          setStatus({
            error: err.response?.data?.message || "Failed to add employee.",
            success: "",
          });
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, status }) => (
        <Form className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 max-w-md mx-auto">
          <h2 className="text-lg font-semibold mb-2">Add Employee</h2>
          <Field className="input" name="username" placeholder="Username" />
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-600 text-sm"
          />

          <Field
            className="input"
            name="password"
            type="password"
            placeholder="Password"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-600 text-sm"
          />

          <Field className="input" name="name" placeholder="Name" />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-600 text-sm"
          />

          <Field as="select" className="input" name="role">
            {roles.map((role) => (
              <option key={role} value={role}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="role"
            component="div"
            className="text-red-600 text-sm"
          />

          {isSubmitting && <Loader size={24} />}
          {status?.error && (
            <div className="text-red-600 text-sm">{status.error}</div>
          )}
          {status?.success && (
            <div className="text-green-600 text-sm">{status.success}</div>
          )}

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold mt-2"
            type="submit"
            disabled={isSubmitting}
          >
            Add Employee
          </button>
        </Form>
      )}
    </Formik>
  );
}
