// pages/login.js
"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "antd"; // Consider replacing with a Tailwind-friendly component if not using Ant Design elsewhere

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const form = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
      rememberMe: Yup.boolean(),
    }),
    onSubmit: async () => {
      await handleLogin();
    },
  });

  const handleLogin = async () => {
    const values = form.values;
    console.log(values); // Implement your login logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <h1 className="text-xl font-bold text-center">Login</h1>
        <form onSubmit={form.handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {form.touched.email && form.errors.email ? (
              <div className="text-sm text-red-600">{form.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              value={form.values.password}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {form.touched.password && form.errors.password ? (
              <div className="text-sm text-red-600">{form.errors.password}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
