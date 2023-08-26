import React, { FC, useContext, useEffect, useRef, useState } from "react";
import addForm from "./_AddFilmForm.module.scss";
import { IUser } from "../../models/IUser";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";
import { CSSTransition } from "react-transition-group";
import { NumbersContext } from "../../context";

interface AddFilmFormProps {
  user: IUser;
}

const AddFilmForm: FC<AddFilmFormProps> = ({ user }) => {
  const { allFilms, setAllFilms } = useContext(NumbersContext);
  const [showButton, setShowButton] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (allFilms.length === 0) {
      setShowInput(true);
    }
  }, []);

  const handleShowInput = () => {
    setShowInput(false);
    setTitle("");
  };

  const handleCreateFilm = () => {
    const newFilm = {
      userID: user.id,
      id: Date.now(),
      option: title,
      optionSize: 11 - value,
      value: value,
      chance: 1,
      quantity: Math.floor(110 - value * 10),
    };
    setAllFilms([...allFilms, newFilm]);
    setTitle("");
    setValue(1);
  };
  const nodeRef = useRef(null);

  const handlePlus = () => {
    if (value <= 9) {
      setValue((prev) => prev + 1);
    }
  };
  const handleMinus = () => {
    if (value >= 2) {
      setValue((prev) => prev - 1);
    }
  };
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
              required
              minLength={1}
              className={addForm.inputTitle}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Название фильма"
              value={title}
            />
            <div className={addForm.counterWrapp}>
              <Fab className={addForm.counterWrapp__plus} onClick={handlePlus}>
                <AddIcon />
              </Fab>
              <div className={addForm.counterWrapp__display}>{value}</div>
              <Fab
                className={addForm.counterWrapp__minus}
                onClick={handleMinus}
              >
                <RemoveIcon />
              </Fab>
            </div>
            <Fab
              onClick={handleCreateFilm}
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
