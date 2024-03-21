import React, { useContext } from 'react'
import Layout from '../Components/Layout/Layout'
import { useLocation, useParams } from "react-router-dom";
import CreateCourseFirstStep from '../Containers/SchoolManagementPagesContainer/SchoolCourseModules/CreateCourseFirstStep/CreateCourseFirstStep';
import CreateCourseSecondStep from '../Containers/SchoolManagementPagesContainer/SchoolCourseModules/CreateCourseSecondStep/CreateCourseSecondStep';
import CreateCourseThirdStep from '../Containers/SchoolManagementPagesContainer/SchoolCourseModules/CreateCourseThirdStep/CreateCourseThirdStep';
import CreateCourseFourthStep from '../Containers/SchoolManagementPagesContainer/SchoolCourseModules/CreateCourseFourthStep/CreateCourseFourthStep';
import SchoolCreatedPage from './SchoolCreatedPage';
import { AppContext } from '../Context/AppContext';



const EditSchoolCoursePage = () => {
    // Router
    const location = useLocation();
    const userStep = new URLSearchParams(location.search).get("step");

    const courseObjective = [
        { list: "Develop a deep understanding of Talent Acquisition strategies and practices" },
        { list: "Beginner-friendly program- no experience needed" },
        { list: "Receive personalised one-on-one mentorship and guidance sessions" },
        { list: "Gain practical skills to source, assess, and hire top talent effectively" },
        { list: "Gain valuable skills for real-world projects" },
        { list: "Complete course in 4 months at 10hrs/week" },
    ];

    // Router
    const { SchoolId, CourseId } = useParams();

    // Context 
    const { schools } = useContext(AppContext);

    const activeSchool = schools.find(data => data.schoolId === SchoolId)
    const activeCourse = activeSchool?.courses.find(data => data.courseId === CourseId)

    return (
        <Layout>
            {userStep === "1" ? (
                <CreateCourseFirstStep
                    title='Edit Course'
                    name={activeCourse?.courseName}
                    level={activeCourse?.difficultyLevel}
                />
            ) : userStep === "2" ? (
                <CreateCourseSecondStep
                    title='Edit Course'
                    description={activeCourse?.courseDescription}
                />
            ) : userStep === "3" ? (
                <CreateCourseThirdStep
                    showIndicator={true}
                    title='Edit Course Cohort'
                    name={activeCourse?.cohortName}
                    dealine={activeCourse?.applicationDeadLine}
                    startDate={activeCourse?.startDate}
                    duration={activeCourse?.cohortDuration}
                    tutor={activeCourse?.cohortTutor}
                    price={activeCourse?.cohortPrice}
                    capacity={activeCourse?.cohortCapacity}

                />
            ) : userStep === "4" ? (
                <CreateCourseFourthStep
                    showIndicator={true}
                    updateInformation={true}
                    objectives={courseObjective.map(importance => importance.list)}
                />
            ) : (
                <SchoolCreatedPage />
            )}
        </Layout>
    )
}

export default EditSchoolCoursePage