import Button from "../../../Components/Button/Button";
import TextArea from "../../../Components/TextArea/TextArea";
import { requestType } from "../../../Context/AuthUserContext";
import classes from "./TutorProfileAccountDeactivation.module.css";

type DeleteDisclaimerModalBodyProps = {
  onClick: () => void;
  onClick2: () => void;
  state: requestType;
};

const DeleteDisclaimerModalBody = ({
  onClick,
  onClick2,
  state,
}: DeleteDisclaimerModalBodyProps) => {
  return (
    <section className={classes.modalContainer}>
      <div className={classes.modalInnerContainer}>
        <h4>Deactivate account?</h4>
        <p>
          Please provide reasons for requesting to deactivate this tutor’s
          account.
        </p>
        <TextArea
          isRequired
          label="Feedback"
          placeholder="Enter message here"
        />

        <div className={classes.modalButtonSection}>
          <Button type="invalid" onClick={onClick}>
            Cancel
          </Button>
          <Button type="delete" onClick={onClick2} loading={state?.isLoading}>
            Deactivate account
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeleteDisclaimerModalBody;
