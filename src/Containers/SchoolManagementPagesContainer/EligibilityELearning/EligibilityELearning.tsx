import classes from "../EligibilityTechnical/EligibilityTechnical.module.css";
import Button from "../../../Components/Button/Button";
import { useSearchParams } from "react-router-dom";
import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";

const EligibilityELearning = () => {
  // eslint-disable-next-line

  //   Router

  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <SchoolCreatingLayout notShowHeader>
      <section className={classes.container}>
        <p className={classes.header}>E-learning proficiency</p>
        <div className={classes.questionSection}>
          <p>Are you comfortable using an online learning platform?</p>
          <div className={classes.options}>
            <div>
              <input type="radio" id="1" />
              <label htmlFor="1">Yes</label>
            </div>
            <div>
              <input type="radio" id="2" />
              <label htmlFor="2">No</label>
            </div>
          </div>
        </div>

        <div className={classes.questionSection}>
          <p>Are you open to enrolling in a paid course?</p>
          <div className={classes.options}>
            <div>
              <input type="radio" id="1" />
              <label htmlFor="1">Yes</label>
            </div>
            <div>
              <input type="radio" id="2" />
              <label htmlFor="2">No</label>
            </div>
          </div>
        </div>

        <div className={classes.questionSection}>
          <p>Does your laptop meet the requirements for this course?</p>
          <div className={classes.options}>
            <div>
              <input type="radio" id="1" />
              <label htmlFor="1">Yes</label>
            </div>
            <div>
              <input type="radio" id="2" />
              <label htmlFor="2">No</label>
            </div>
          </div>
        </div>

        <div className={classes.questionSection}>
          <p>
            Are you willing to participate in group activities and collaborate
            with fellow learners?
          </p>
          <div className={classes.options}>
            <div>
              <input type="radio" id="1" />
              <label htmlFor="1">Yes</label>
            </div>
            <div>
              <input type="radio" id="2" />
              <label htmlFor="2">No</label>
            </div>
          </div>
        </div>

        <div className={classes.buttonSection}>
          <Button
            type="secondary"
            onClick={() => {
              setSearchParams({ step: "2" });
            }}
          >
            <span className={classes.buttonInner}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 16L3 12M3 12L7 8M3 12L21 12"
                  stroke="#664EFE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Previous</span>
            </span>
          </Button>
          <Button
            onClick={() => {
              // navigate("/eligibility/success");
              setSearchParams({ status: "pass" });
            }}
          >
            <span className={classes.buttonInner}>
              <span>Submit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M17.5 8L21.5 12M21.5 12L17.5 16M21.5 12L3.5 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Button>
        </div>
      </section>
    </SchoolCreatingLayout>
  );
};

export default EligibilityELearning;