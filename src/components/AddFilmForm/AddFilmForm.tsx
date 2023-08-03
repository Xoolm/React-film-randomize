import React, { FC, useRef, useState } from "react";
import addForm from "./_AddFilmForm.module.scss";
import { IFilm } from "../../models/IFilm";
import { filmAPI } from "../../services/FilmServises";
import { IUser } from "../../models/IUser";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { CSSTransition } from "react-transition-group";

interface AddFilmFormProps {
  user: IUser;
}

const AddFilmForm: FC<AddFilmFormProps> = ({ user }) => {
  const [showButton, setShowButton] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState("");
  // const [value, setValue] = useState<number | string>();
  const [createFilm, {}] = filmAPI.useCreateFilmMutation();

  const handleShowInput = () => {
    setShowInput(false);
    setTitle("");
  };

  const handleCreate = async (event: any) => {
    event.preventDefault();
    // const setNum = Number(value);
    await createFilm({
      userId: user.id,
      option: title,
      // value: 1 * setNum,
      chance: 1,
    } as IFilm);
    setTitle("");
    // setValue("");
  };

  const nodeRef = useRef(null);

  return (
    <div className={addForm.FilmFormWrapper}>
      <CSSTransition
        timeout={{
          exit: 250,
        }}
        nodeRef={nodeRef}
        in={showInput}
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
        classNames={{
          enterActive: addForm.enterActive,
          enterDone: addForm.enterDone,
          exitActive: addForm.exitActive,
          exitDone: addForm.exitDone,
        }}
      >
        <div ref={nodeRef} className={addForm.FormWrapper}>
          <form className={addForm.FormWrapper__form}>
            <input
              className={addForm.inputTitle}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Название фильма"
              value={title}
            />
            {/* <input
          className={cl.inputValue}
          type="number"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Шанс на победу"
          value={value}
        /> */}
            <Fab
              onClick={handleCreate}
              className={addForm.success}
              size="small"
              aria-label="add"
            >
              <CheckIcon />
            </Fab>
          </form>
          <Fab
            onClick={handleShowInput}
            className={addForm.openInput}
            size="small"
            aria-label="add"
          >
            <CloseIcon className={addForm.openInput_icon} />
          </Fab>
        </div>
      </CSSTransition>
      {showButton && (
        <Fab
          onClick={() => setShowInput(true)}
          className={addForm.openInput}
          size="small"
          aria-label="add"
        >
          <AddIcon className={addForm.openInput_icon} />
        </Fab>
      )}
    </div>
  );
};

export default AddFilmForm;
