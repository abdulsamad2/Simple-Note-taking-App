import React, {useRef, useState} from "react";
import {signIn} from "next-auth/react";

import {Card, Input, Checkbox, Button, Typography} from "@material-tailwind/react";

export default function Loginform() {
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      passowrd: passowrd
    });
    alert("Processing your credetails");
  }
  return (
    <Card
      color='transparent'
      shadow={false}>
      <Typography
        className='text-center'
        variant='h4'
        color='blue-gray'>
        Sign in
      </Typography>
      <Typography
        color='gray'
        className='mt-1 text-center font-normal'>
        Enter your details to Login.
      </Typography>
      <form className='mt-8 mb-2 w-80 mx-auto max-w-screen-lg sm:w-96'>
        <div className='mb-4 flex flex-col gap-6'>
          <Input
            color='green'
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size='lg'
            label='Email'
          />
          <Input
            color='green'
            name='passowrd'
            value={passowrd}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            size='lg'
            label='Password'
          />
        </div>

        <Button
          color='green'
          onClick={handleSubmit}
          className='mt-6'
          fullWidth>
          Login
        </Button>
        <Typography
          color='gray'
          className='mt-4 text-center font-normal'>
          dont' have an account?{" "}
          <a
            href='#'
            className='font-medium text-blue-500 transition-colors hover:text-blue-700'>
            register{" "}
          </a>
        </Typography>
      </form>
    </Card>
  );
}
