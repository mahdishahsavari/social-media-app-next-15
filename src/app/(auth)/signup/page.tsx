import React from "react";
import { Metadata } from "next";
import signupImage from "@/assets/signup-image.jpg";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignupPage = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-gray-900 bg-dot-white/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
      <main className="flex h-screen items-center justify-center p-5">
        <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
          <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
            <div className="space-y-1 text-center">
              <h1 className="text-3xl font-bold">
                SignUp to{" "}
                <span className="font-bold italic text-teal-500 underline">
                  ShahLand
                </span>
              </h1>
              <p className="text-muted-foreground">
                A place where <span className="italic">you</span> can find a
                friend.
              </p>
            </div>
            <div className="space-y-5">
              <SignUpForm />
            </div>
            <Link href="/login" className="block text-center hover:underline">
              Already have an Account? Login
            </Link>
          </div>
          <Image
            src={signupImage}
            alt="signup image"
            className="hidden w-1/2 object-cover md:block"
          />
        </div>
      </main>
    </div>
  );
};

export default SignupPage;
