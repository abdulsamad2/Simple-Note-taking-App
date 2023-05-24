import {Fragment, useState} from "react";
import {Button, Dialog, DialogHeader, DialogBody, DialogFooter} from "@material-tailwind/react";

export default function Modal(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <div
        className={`text-center ${props.classes}`}
        onClick={handleOpen}
        color='green'
        variant='gradient'>
        {props.label}
      </div>
      <Dialog
        open={open}
        handler={handleOpen}>
        <DialogBody divider>{props.children}</DialogBody>
      </Dialog>
    </Fragment>
  );
}
