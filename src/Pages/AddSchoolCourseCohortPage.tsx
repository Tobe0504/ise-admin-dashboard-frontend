import React, { useContext } from 'react'
import Layout from '../Components/Layout/Layout'
import { useParams } from "react-router-dom";
import CreateCourseThirdStep from '../Containers/SchoolManagementPagesContainer/SchoolCourseModules/CreateCourseThirdStep/CreateCourseThirdStep';
import { AppContext } from '../Context/AppContext';



const AddSchoolCourseCohortPage = () => {

    // Context
    const { schools } = useContext(AppContext)

    // Router
    const { CourseId } = useParams()

    // const activeSchool = schools.find((data) => {
    //     return data.courseId === CourseId
    // })


    return (
        <Layout>
            <CreateCourseThirdStep showIndicator={false} firstButtonText="Cancel" secondButtonText="Create cohort" />
        </Layout>
    )
}

export default AddSchoolCourseCohortPage