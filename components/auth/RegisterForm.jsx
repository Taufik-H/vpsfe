"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { useRegister } from "./hooks/useRegister";

const RegisterForm = () => {
  const { handleRegister, registerData, isLoading, handleChange } =
    useRegister();
  const { email, password, name } = registerData;
  return (
    <div className="m-4 flex items-center justify-center">
      <Card className="w-full max-w-lg dark:bg-slate-900">
        <CardHeader className="text-center">
          <CardTitle className="py-2">Sign In to your account</CardTitle>
          <CardDescription>
            Access the full potential of GPU rentals on our website by logging
            in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              placeholder="Input your name"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="name@example.com"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember-me" />
              <label
                htmlFor="remember-me"
                className="text-sm text-muted-foreground"
              >
                I accept the{" "}
                <Link href="/register" className="text-primary">
                  Terms and Conditions
                </Link>
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm text-primary">
              Forgot Password
            </Link>
          </div>
          <Button onClick={handleRegister}>
            {isLoading ? "Loading..." : "Sign Up"}
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary">
              Sign In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterForm;
