import React, {useState} from "react";

import {Card, Input, Button, Typography} from "@material-tailwind/react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/registeruser", {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {
        "Content-type": "application/json"
      }
    });
    setEmail("");
    setPassword("");
    alert("data submittef from here");
  }
  return (
    <Card
      color='transparent'
      shadow={false}>
      <Typography
        className='text-center'
        variant='h4'
        color='blue-gray'>
        Register{" "}
      </Typography>
      <Typography
        color='gray'
        className='mt-1 text-center font-normal'>
        Enter your details to Register.
      </Typography>
      <form className='mt-8 mb-2 w-80 mx-auto max-w-screen-lg sm:w-96'>
        <div className='mb-4 flex flex-col gap-6'>
          <Input
            value={email}
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            size='lg'
            label='Email'
          />
          <Input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size='lg'
            label='Password'
          />
        </div>

        <Button
          onClick={handleSubmit}
          className='mt-6'
          fullWidth>
          Register
        </Button>
        <Typography
          color='gray'
          className='mt-4 text-center font-normal'>
          already have an account?{" "}
          <a
            href='#'
            className='font-medium text-blue-500 transition-colors hover:text-blue-700'>
            Login
          </a>
        </Typography>
      </form>
    </Card>
  );
}
