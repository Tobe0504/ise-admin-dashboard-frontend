import classes from "./UploadedModules.module.css";
import { ContentAnalyticsData } from "../ContentAnalyticsData";
import { Link } from "react-router-dom";

const UploadedModules = () => {

    return (
        <section className={classes.container}>
            <div>
                <div className={classes.tableHeader}>
                    <span>Module title</span>
                    <span>Tutor's name</span>
                    <span>Submission date</span>
                    <span>Action</span>
                </div>

                <div className={classes.bodyContent}>
                    {ContentAnalyticsData.map((data, i) => (
                        <div key={i} className={classes.tableBody}>
                            <span>{data.module}:{data.title}</span>
                            <span>{data.tutor}</span>
                            <span>{data.deadline}</span>
                            <span><Link to={`/courses/feedback/${data.id}/feedback-preview`}>Preview</Link></span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes.pageButtons}>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M15 19L8 12L15 5"
                            stroke="#d8d8d8"
                            strokeWidth="2"
                            stroke-linecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                <button>1</button>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M9 5L16 12L9 19"
                            stroke="#d8d8d8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </div>
        </section>
    );
};

export default UploadedModules;
