import { useContext } from 'react'
import classes from './ActionsModal.module.css'
import { AppContext } from '../../../Context/AppContext'

type ActionsModalProps = {
   onClick: () => void
   onClick2: () => void
   onClick3: () => void
   onClick4: () => void
   onClick5: () => void
   onClick6: () => void
}

const ActionsModal = ({
   onClick,
   onClick2,
   onClick3,
   onClick4,
   onClick5,
   onClick6
}: ActionsModalProps) => {

   const { schools } = useContext(AppContext)

   const modalOptions = [
      {
         action: onClick,
         title: 'View school',
         svg: <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H17M1 5H17M1 9H17M1 13H17" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      },
      {
         action: onClick2,
         title: 'Edit school',
         svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2677 3.73223L20.9748 3.02513V3.02513L20.2677 3.73223ZM6.5 21.0355V22.0355C6.76522 22.0355 7.01957 21.9301 7.20711 21.7426L6.5 21.0355ZM3 21.0355H2C2 21.5878 2.44772 22.0355 3 22.0355V21.0355ZM3 17.4644L2.29289 16.7573C2.10536 16.9448 2 17.1992 2 17.4644H3ZM17.4393 4.43934C18.0251 3.85355 18.9748 3.85355 19.5606 4.43934L20.9748 3.02513C19.608 1.65829 17.3919 1.65829 16.0251 3.02513L17.4393 4.43934ZM19.5606 4.43934C20.1464 5.02513 20.1464 5.97487 19.5606 6.56066L20.9748 7.97487C22.3417 6.60804 22.3417 4.39196 20.9748 3.02513L19.5606 4.43934ZM19.5606 6.56066L5.79289 20.3284L7.20711 21.7426L20.9748 7.97487L19.5606 6.56066ZM6.5 20.0355H3V22.0355H6.5V20.0355ZM16.0251 3.02513L2.29289 16.7573L3.70711 18.1715L17.4393 4.43934L16.0251 3.02513ZM2 17.4644V21.0355H4V17.4644H2ZM14.5251 5.93934L18.0606 9.47487L19.4748 8.06066L15.9393 4.52513L14.5251 5.93934Z" fill="#2E2E2E" />
         </svg>
      },
      {
         action: onClick3,
         title: 'Add course',
         svg: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1V17M17 9L1 9" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      },
      {
         action: onClick4,
         title: 'View course',
         svg: <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9998 8C13.9998 9.65685 12.6566 11 10.9998 11C9.3429 11 7.99976 9.65685 7.99976 8C7.99976 6.34315 9.3429 5 10.9998 5C12.6566 5 13.9998 6.34315 13.9998 8Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.45801 7.99997C2.73228 3.94288 6.52257 1 11.0002 1C15.4778 1 19.2681 3.94291 20.5424 8.00004C19.2681 12.0571 15.4778 15 11.0002 15C6.52256 15 2.73226 12.0571 1.45801 7.99997Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      },
      {
         action: onClick5,
         title: 'Activate school',
         svg: <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99978 13.1851C5.28163 13.1851 3.8212 12.5837 2.6185 11.381C1.4158 10.1782 0.814453 8.71768 0.814453 6.99943C0.814453 5.28118 1.4158 3.82079 2.6185 2.61825C3.8212 1.41572 5.28163 0.814453 6.99978 0.814453H16.9998C18.7179 0.814453 20.1784 1.41584 21.3811 2.6186C22.5838 3.82137 23.1851 5.28188 23.1851 7.00013C23.1851 8.71838 22.5838 10.1788 21.3811 11.3813C20.1784 12.5838 18.7179 13.1851 16.9998 13.1851H6.99978ZM6.99978 10.9998H16.9998C18.0998 10.9998 19.0414 10.6081 19.8248 9.82478C20.6081 9.04145 20.9998 8.09978 20.9998 6.99978C20.9998 5.89978 20.6081 4.95811 19.8248 4.17478C19.0414 3.39145 18.0998 2.99978 16.9998 2.99978H6.99978C5.89978 2.99978 4.95811 3.39145 4.17478 4.17478C3.39144 4.95811 2.99978 5.89978 2.99978 6.99978C2.99978 8.09978 3.39144 9.04145 4.17478 9.82478C4.95811 10.6081 5.89978 10.9998 6.99978 10.9998ZM6.99978 9.99978C7.83311 9.99978 8.54144 9.70811 9.12478 9.12478C9.70811 8.54145 9.99978 7.83311 9.99978 6.99978C9.99978 6.16645 9.70811 5.45811 9.12478 4.87478C8.54144 4.29145 7.83311 3.99978 6.99978 3.99978C6.16644 3.99978 5.45811 4.29145 4.87478 4.87478C4.29144 5.45811 3.99978 6.16645 3.99978 6.99978C3.99978 7.83311 4.29144 8.54145 4.87478 9.12478C5.45811 9.70811 6.16644 9.99978 6.99978 9.99978Z" fill="black" />
         </svg>

      },
      {
         action: onClick6,
         title: 'Deactivate school',
         svg: <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99978 13.1851C5.28163 13.1851 3.8212 12.5837 2.6185 11.381C1.4158 10.1782 0.814453 8.71768 0.814453 6.99943C0.814453 5.28118 1.4158 3.82079 2.6185 2.61825C3.8212 1.41572 5.28163 0.814453 6.99978 0.814453H16.9998C18.7179 0.814453 20.1784 1.41584 21.3811 2.6186C22.5838 3.82137 23.1851 5.28188 23.1851 7.00013C23.1851 8.71838 22.5838 10.1788 21.3811 11.3813C20.1784 12.5838 18.7179 13.1851 16.9998 13.1851H6.99978ZM6.99978 10.9998H16.9998C18.0998 10.9998 19.0414 10.6081 19.8248 9.82478C20.6081 9.04145 20.9998 8.09978 20.9998 6.99978C20.9998 5.89978 20.6081 4.95811 19.8248 4.17478C19.0414 3.39145 18.0998 2.99978 16.9998 2.99978H6.99978C5.89978 2.99978 4.95811 3.39145 4.17478 4.17478C3.39144 4.95811 2.99978 5.89978 2.99978 6.99978C2.99978 8.09978 3.39144 9.04145 4.17478 9.82478C4.95811 10.6081 5.89978 10.9998 6.99978 10.9998ZM6.99978 9.99978C7.83311 9.99978 8.54144 9.70811 9.12478 9.12478C9.70811 8.54145 9.99978 7.83311 9.99978 6.99978C9.99978 6.16645 9.70811 5.45811 9.12478 4.87478C8.54144 4.29145 7.83311 3.99978 6.99978 3.99978C6.16644 3.99978 5.45811 4.29145 4.87478 4.87478C4.29144 5.45811 3.99978 6.16645 3.99978 6.99978C3.99978 7.83311 4.29144 8.54145 4.87478 9.12478C5.45811 9.70811 6.16644 9.99978 6.99978 9.99978Z" fill="black" />
         </svg>
      },
   ];

   return (
      <div className={classes.container}>
         {modalOptions.map((data, i) => (
            <>
               <div key={i} onClick={data.action}>
                  {data.svg}
                  <span>{data.title}</span>
               </div>
            </>
         ))}
      </div>
   )
}

export default ActionsModal