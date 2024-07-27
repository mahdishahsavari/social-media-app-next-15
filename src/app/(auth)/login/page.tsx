import React from "react";
import { Metadata } from "next";
import LoginForm from "./LoginForm";
import Link from "next/link";
import Image from "next/image";
import loginImage from "@/assets/login-image.jpg";
import { Spotlight } from "@/components/ui/Spotlight";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <div className="relative flex h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased bg-grid-white/[0.02] md:items-center md:justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <main className="relative flex h-screen items-center justify-center p-5">
        <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
          <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
            <h1 className="text-center text-3xl font-bold">
              Login to{" "}
              <span className="font-bold italic text-teal-500 underline">
                ShahLand
              </span>
            </h1>
            <div className="space-y-5">
              <LoginForm />
              <Link
                href="/signup"
                className="block text-center hover:underline"
              >
                Don&apos;t have an Account? SignUp
              </Link>
            </div>
          </div>
          <Image
            src={loginImage}
            alt="login image"
            className="hidden w-1/2 object-cover md:block"
          />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
