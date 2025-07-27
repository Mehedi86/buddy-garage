"use client";
import RegisterForm from "@/components/RegisterForm";
import SocialSignin from "@/components/SocialSignin";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
// import { BsGithub, BsGoogle } from "react-icons/bs";

const SignUpPage = () => {



  return (
    <div className="container px-4 md:px-12 lg:px-24 mx-auto py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            height="540"
            width="540"
            alt="login image"
            className="w-full h-auto"
          />
        </div>
        <div className="border-2 p-6 md:p-12">
          <h6 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-6 md:mb-12">
            Register
          </h6>
          <RegisterForm />
          <div>
            <h6 className="my-6 md:my-12 text-center">or sign in with</h6>
            <SocialSignin />
            <h6 className="my-6 md:my-12 text-center">
              Already have an account?{" "}
              <Link className="text-primary font-semibold" href={"/login"}>
                Sign In
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SignUpPage;
