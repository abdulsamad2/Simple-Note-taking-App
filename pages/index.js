import Form from "@/components/Form";
import Note from "@/components/Note";
import {Button, Spinner} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import Modal from "@/components/Modal";
import {useRouter} from "next/router";
import {getSession} from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        router.replace("/login");
      } else {
        setIsloading(false);
      }
    });
  }, [router]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className='relative '>
      <div className='flex justify-center mt-4'>
        <Form />
      </div>

      <div className=''>
        <h2 className='text-center mt-52 border-t-2 border-b-2 bg-gray-200'>All Notes</h2>
        <div className='flex flex-wrap justify-center space-x-2 px-4  mx-auto z-[-50] '>
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>
    </div>
  );
}
