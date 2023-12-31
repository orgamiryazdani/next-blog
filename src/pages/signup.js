import Layout from "@/containers/Layout";
import Link from "next/link";
import Input from "@/components/FormInput"
import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth, useAuthActions } from "@/context/AuthContext";

const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
};

//  validation schema
const validationSchema = Yup.object({
    name: Yup.string()
        .required("نام و نام خانوادگی را وارد کنید")
        .min(6, "نام و نام خانوادگی باید حداقل شامل 6 کاراکتر باشد"),
    email: Yup.string().required("ایمیل را وارد کنید").email("ایمیل نامعتبر است"),
    phoneNumber: Yup.string()
        .required("شماره موبایل را وارد کنید")
        .matches(/^[0-9]{11}$/, "شماره موبایل باید 11 رقم باشد")
        .nullable(),
    password: Yup.string()
        .required("رمز عبور را وارد کنید")
        .min(8, "رمز عبور باید حداقل شامل 8 کارارکتر باشد"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "رمز عبور را مجددا وارد کنید")
        .required("رمز عبور هم خوانی ندارد"),
});

const RegisterForm = () => {
    const dispatch = useAuthActions()
    const router = useRouter()
    const { user } = useAuth()

    useEffect(() => {
        if (user) {
            router.push('/')
        }
    }, [user])

    const onSubmit = (values) => {
        const { name, email, phoneNumber, password } = values;
        dispatch({ type: "SIGNUP", payload: { name, email, phoneNumber, password } })
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    });

    return (
        <Layout>
            <Head>
                <title>front hooks- Signup</title>
            </Head>
            <div className="md:max-w-md px-4 md:px-4  container mx-auto">
                <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
                    <h1 className="font-black text-2xl text-violet-700 mb-4">ثبت نام</h1>
                    <Input label="نام و نام خانوادگی" name="name" formik={formik} />
                    <Input label="ایمیل" name="email" formik={formik} />
                    <Input label="شماره موبایل" name="phoneNumber" type="tel" formik={formik} placeholder="09174510960" />
                    <Input label="رمز عبور" name="password" type="password" formik={formik} />
                    <Input label="تکرار رمز عبور" name="confirmPassword" type="password" formik={formik} />
                    <button type="submit" disabled={!formik.isValid} className="w-full py-2 rounded-lg bg-violet-800 text-white">
                        ثبت نام
                    </button>
                    <Link legacyBehavior href='/signin'>
                        <p className="mt-4 py-4 cursor-pointer">قبلا ثبت نام کردی ؟ لاگین کنید</p>
                    </Link>
                </form>
            </div>
        </Layout>
    );
}

export default RegisterForm;