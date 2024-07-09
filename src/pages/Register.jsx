import { Form, Link, useActionData } from "react-router-dom";
import { useEffect } from "react";

//components
import { FormInput } from "../components";

//Action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let photoURL = formData.get("photoURL");
  let email = formData.get("email");
  let password = formData.get("password");
  console.log({ displayName, photoURL, email, password }); // Konsolda tekshirish uchun
  return { displayName, photoURL, email, password };
};

//custom hooks
import { useRegister } from "../hooks/useRegister";

function Register() {
  const user = useActionData();
  const { isPanding, registerWithGoogle, registerEmailAndPassword } =
    useRegister();

  useEffect(() => {
    if (user) {
      console.log("Registering user:", user);
      registerEmailAndPassword(
        user.email,
        user.password,
        user.displayName,
        user.photoURL
      );
    }
  }, [user]);

  return (
    <div className="">
      <div className="">
        <img className="auth-container" src="" />
      </div>
      <div className="auth-right">
        <Form
          method="post"
          className="flex flex-col gap-3 w-[340px] shadow-2xl p-7 rounded-xl bg-[rgba(255,255,255,0.5)]"
        >
          <h1 className="text-4xl font-semibold text-center">Register</h1>
          <FormInput
            label="Your Name :"
            type="text"
            name="displayName"
            placeholder="Your Name"
          />
          <FormInput
            label="photo image URL :"
            type="url"
            name="photoURL"
            placeholder="Photo Image URL"
          />
          <FormInput
            label="Email :"
            type="email"
            name="email"
            placeholder="Email"
          />
          <FormInput
            label="Password :"
            type="password"
            name="password"
            placeholder="Password"
          />
          <div className="mt-6">
            {isPanding && (
              <button
                disabled
                className="btn bg-slate-700  border-red-400 btn-block font-bold"
              >
                Loading...
              </button>
            )}
            {!isPanding && (
              <button className="btn bg-slate-700  border-red-400 btn-block font-bold">
                Register
              </button>
            )}
          </div>
          <div>
            {isPanding && (
              <button
                disabled
                type="button"
                className="btn bg-slate-700 border-red-400 btn-block font-bold"
              >
                Loading...
              </button>
            )}
            {!isPanding && (
              <button
                onClick={registerWithGoogle}
                type="button"
                className="btn bg-slate-700 border-red-400 btn-block font-bold"
              >
                Google
              </button>
            )}
          </div>
          <div className="text-center">
            <p className="text-black font-medium lg:text-slate-400">
              If you have account,{" "}
              <Link className="link link-primary" to="/login">
                Login
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
