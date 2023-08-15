import { FC, useEffect, useRef, useState } from "react";
import UserForm from "./_AddUserForm.module.scss";
import { Fab } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { CSSTransition } from "react-transition-group";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

interface AddUserProps {
  onCreate: (userName: string) => void;
}
const AddUserForm: FC<AddUserProps> = ({ onCreate }) => {
  const [showButton, setShowButton] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setShowInput(true);
  }, []);

  const handleShowInput = () => {
    setShowInput(false);
    setUserName("");
  };
  const handleCreate = () => {
    onCreate(userName);
    setShowInput(false);
    setUserName("");
  };

  const nodeRef = useRef(null);
  return (
    <div className={UserForm.UserFormWrapper}>
      <CSSTransition
        timeout={{
          exit: 0,
        }}
        nodeRef={nodeRef}
        in={showInput}
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
        classNames={{
          enterActive: UserForm.enterActive,
          enterDone: UserForm.enterDone,
          exitActive: UserForm.exitActive,
          exitDone: UserForm.exitDone,
        }}
      >
        <div ref={nodeRef} className={UserForm.FormWrapper}>
          <form className={UserForm.FormWrapper__form}>
            <input
              className={UserForm.Name__input}
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Добавить пользователя"
              value={userName}
              maxLength={20}
            />
            <Fab
              onClick={handleCreate}
              className={UserForm.success}
              size="small"
              aria-label="add"
            >
              <CheckIcon />
            </Fab>
          </form>
          <Fab
            onClick={handleShowInput}
            className={UserForm.closeInput}
            size="small"
            aria-label="add"
          >
            <CloseIcon className={UserForm.openInput_icon} />
          </Fab>
        </div>
      </CSSTransition>
      {showButton && (
        <Fab
          onClick={() => setShowInput(true)}
          className={UserForm.openInput}
          size="large"
          aria-label="add"
        >
          <AddIcon className={UserForm.openInput_icon} />
        </Fab>
      )}
    </div>
  );
};

export default AddUserForm;
