import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './StudentDataTable.module.css'
import { AppContext } from '../../../Context/AppContext'
import Checkbox from '../../../Components/Checkbox/Checkbox'
import { activeToggleSetAll, activeTogglerRestAll } from '../../../HelperFunctions/activeTogglers'
import AcceptedModal from '../../../Components/Modals/AcceptedModal/AcceptedModal'
import SendMessageModal from './Modals/SendMessageModal'
import ConfirmationModal from './Modals/ConfirmationModal'
import email from '../../../Assets/Images/emailIcon.svg'

const StudentDataTable = () => {
   const navigate = useNavigate()

   // Context
   const { students, setStudents } = useContext(AppContext)

   // State
   const [displaySendMessageModal, setDisplaySendMessageModal] = useState(false)
   const [displayConfirmationModal, setDisplayConfirmationModal] =
      useState(false)
   const [searchTerm, setSearchTerm] = useState('')

   const filteredStudent = students.filter(data => {
      return (
         data.emailAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
         data.studentName.toLowerCase().includes(searchTerm.toLowerCase())
      )
   });

   return (
      <section className={classes.container}>
         {displaySendMessageModal && (
            <AcceptedModal
               onClick={() => {
                  setDisplaySendMessageModal(false)
               }}
               body={
                  <SendMessageModal
                     onClick={() => {
                        setDisplaySendMessageModal(false)
                     }}
                     onClick2={() => {
                        setDisplaySendMessageModal(false)
                        setDisplayConfirmationModal(true)
                     }}
                  />
               }
            />
         )}
         {displayConfirmationModal && (
            <AcceptedModal
               onClick={() => {
                  setDisplayConfirmationModal(false)
               }}
               body={
                  <ConfirmationModal
                     onClick={() => {
                        setDisplayConfirmationModal(false)
                     }}
                  />
               }
            />
         )}
         <div className={classes.header}>
            <div className={classes.headerItem}>
               <div>
                  <Checkbox
                     isChecked={students.length > 0 && students.every(student => student.isActive)}
                     onChange={(isChecked) => {
                        activeToggleSetAll(students, setStudents, isChecked);
                     }}
                  />
                  <span>Select</span>
               </div>
               <div
                  onClick={() => {
                     setDisplaySendMessageModal(true)
                  }}
               >
                  <img src={email} alt="Send email to student" />
                  <span>Email</span>
               </div>
            </div>

            <div className={classes.seachInput}>
               <div className={classes.inputSection}>
                  <input
                     type="text"
                     placeholder="Search by name or email"
                     value={searchTerm}
                     onChange={e => setSearchTerm(e.target.value)}
                  />
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                  >
                     <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="#2E2E2E"
                        strokeWidth="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
               </div>
            </div>
            <div className={classes.pagination}>
               <p>1-10 of 10</p>
               <div className={`${classes.pageButtons} ${classes.headerPageButton}`}>
                  <span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                     >
                        <path
                           d="M15 19L8 12L15 5"
                           stroke="#fff"
                           strokeWidth="2"
                           stroke-linecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </span>
                  <span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                     >
                        <path
                           d="M9 5L16 12L9 19"
                           stroke="#fff"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </span>
               </div>
            </div>
         </div>

         <div className={classes.body}>
            <div>
               <div className={classes.tableHeader}>
                  <span></span>
                  <span>Name of Student</span>
                  <span>Student Id</span>
                  <span>Status</span>
                  <span></span>
               </div>
               {filteredStudent.length === 0 ? (
                  <div className={classes.noResult}>No search results for the user "{searchTerm}" available</div>
               ) : (
                  filteredStudent.map((data, i) => {
                     return (
                        <div key={Math.random()} className={classes.tableBody}>
                           <Checkbox
                              isChecked={data.isActive}
                              onChange={() => {
                                 activeTogglerRestAll(i, students, setStudents);
                              }}
                           />
                           <div>
                              <img src={data.studentImage} alt={data.studentName} />
                              <span>{data.studentName}</span>
                           </div>
                           <span>#{data.studentId}</span>
                           <span>{data.status}</span>
                           <span
                              onClick={() => {
                                 navigate(
                                    `/tutors/${data.studentName
                                       .replaceAll(' ', '-')
                                       .toLowerCase()}`
                                 )
                              }}
                           >
                              View
                           </span>
                        </div>
                     )
                  })
               )}
            </div>
         </div>
      </section>
   )
}

export default StudentDataTable
