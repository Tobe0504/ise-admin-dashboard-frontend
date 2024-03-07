import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './Containers/404Page/404Page'
import Support from './Pages/Support'
import SupportTrackingChatDetailPage from './Pages/SupportTrackingChatDetailPage'
import Schools from './Pages/Schools'
import AdminProfilePage from './Pages/AdminProfilePage'
import AddAdminPage from './Pages/AddAdminPage'
import TutorsManagementPage from './Pages/TutorsManagementPage'
import AddTutorPage from './Pages/AddTutorPage'
import TutorProfilePage from './Pages/TutorProfilePage'


function App() {
   return (
      <Routes>
         <Route path="*" element={<ErrorPage />} />

         <Route path="/admins" element={<Schools />} />
         <Route path="/admins/:AdminId" element={<AdminProfilePage />} />
         <Route path="/admins/#:AdminInfo" element={<AdminProfilePage />} />
         <Route path="/admins/add-admin" element={<AddAdminPage />} />

         <Route path="/tutors" element={<TutorsManagementPage />} />
         <Route path="/tutors/:TutorId" element={<TutorProfilePage />} />
         <Route path="/tutors/add-tutor" element={<AddTutorPage />} />

         <Route path="/support" element={<Support />} />
         <Route path="/support/:SupportTrackingId" element={<SupportTrackingChatDetailPage />} />

      </Routes>
   )
}
export default App
