import React, {useRef, useState} from "react";
import Modal from "./Modal";
import {
  Card,
  inputRef,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea
} from "@material-tailwind/react";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    const now = new Date();
    const timestamp = now.toISOString();

    if (title.trim().length === 0 || body.trim().length === 0) {
      alert("please enter the data first");
      return;
    }
    fetch("/api/createnote", {
      method: "POST",
      body: JSON.stringify({title, body, timestamp}),
      headers: {
        "Content-type": "application/json"
      }
    }).then((res) => {
      if (!res.ok) {
        alert("something went wrong");
      }
      return res.json();
    });
    setTitle("");
    setBody("");
  }
  return (
    <>
      <Modal
        classes={"bg-green-600 py-2 px-4 rounded-lg text-white"}
        label={"add Note"}>
        <Card
          color='transparent'
          shadow={false}>
          <form className='mt-8 py-4 mx-auto mb-2 w-80 max-w-screen-lg sm:w-96'>
            <div className='mb-4 flex flex-col gap-6'>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                color='green'
                value={title}
                name='title'
                size='lg'
                label='Title'></Input>
              <Textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                name='body'
                color='green'
                label='write your note details here'></Textarea>
            </div>

            <Button
              onClick={submitHandler}
              color='green'
              className='mt-6'
              fullWidth>
              Create Note
            </Button>
          </form>
        </Card>
      </Modal>
    </>
  );
};

export default Form;
