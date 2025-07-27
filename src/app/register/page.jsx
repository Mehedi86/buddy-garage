"use client";
import RegisterForm from "@/components/RegisterForm";
// import SocialSignin from "@/components/shared/SocialSignin";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
// import { BsGithub, BsGoogle } from "react-icons/bs";

const SignUpPage = () => {

  

  return (
    <div className="container px-24 mx-auto py-24">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            height="540"
            width="540"
            alt="login image"
          />
        </div>
        <div className="border-2 p-12">
          <h6 className="text-3xl font-semibold text-primary text-center mb-12">
            Register
          </h6>
          
          <RegisterForm/>
          <div>
            <h6 className="my-12 text-center">or sign in with</h6>
            {/* <SocialSignin /> */}
            <h6 className="my-12 text-center">
              Already have account ?{" "}
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
