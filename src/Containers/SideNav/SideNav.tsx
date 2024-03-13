import classes from "./SideNav.module.css";
import iseLogo from "../../Assets/Images/iseLogo.svg";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { activeToggler } from "../../HelperFunctions/activeTogglers"

export const sideNavIconsHandler = (title: string) => {
  if (title === "Home") {
    return <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 16H5V10H11V16H14V7L8 2.5L2 7V16ZM0 18V6L8 0L16 6V18H9V12H7V18H0Z" fill="#2E2E2E" />
    </svg>
  } else if (title === "Users") {
    return <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0ZM18 16V13C18 12.2667 17.7958 11.5625 17.3875 10.8875C16.9792 10.2125 16.4 9.63333 15.65 9.15C16.5 9.25 17.3 9.42083 18.05 9.6625C18.8 9.90417 19.5 10.2 20.15 10.55C20.75 10.8833 21.2083 11.2542 21.525 11.6625C21.8417 12.0708 22 12.5167 22 13V16H18ZM8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM18 4C18 5.1 17.6083 6.04167 16.825 6.825C16.0417 7.60833 15.1 8 14 8C13.8167 8 13.5833 7.97917 13.3 7.9375C13.0167 7.89583 12.7833 7.85 12.6 7.8C13.05 7.26667 13.3958 6.675 13.6375 6.025C13.8792 5.375 14 4.7 14 4C14 3.3 13.8792 2.625 13.6375 1.975C13.3958 1.325 13.05 0.733333 12.6 0.2C12.8333 0.116667 13.0667 0.0625 13.3 0.0375C13.5333 0.0125 13.7667 0 14 0C15.1 0 16.0417 0.391667 16.825 1.175C17.6083 1.95833 18 2.9 18 4ZM2 14H14V13.2C14 13.0167 13.9542 12.85 13.8625 12.7C13.7708 12.55 13.65 12.4333 13.5 12.35C12.6 11.9 11.6917 11.5625 10.775 11.3375C9.85833 11.1125 8.93333 11 8 11C7.06667 11 6.14167 11.1125 5.225 11.3375C4.30833 11.5625 3.4 11.9 2.5 12.35C2.35 12.4333 2.22917 12.55 2.1375 12.7C2.04583 12.85 2 13.0167 2 13.2V14ZM8 6C8.55 6 9.02083 5.80417 9.4125 5.4125C9.80417 5.02083 10 4.55 10 4C10 3.45 9.80417 2.97917 9.4125 2.5875C9.02083 2.19583 8.55 2 8 2C7.45 2 6.97917 2.19583 6.5875 2.5875C6.19583 2.97917 6 3.45 6 4C6 4.55 6.19583 5.02083 6.5875 5.4125C6.97917 5.80417 7.45 6 8 6Z" fill="#2E2E2E" />
    </svg>
  } else if (title === "Analytics") {
    return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 18V16L2 14V18H0ZM4 18V12L6 10V18H4ZM8 18V10L10 12.025V18H8ZM12 18V12.025L14 10.025V18H12ZM16 18V8L18 6V18H16ZM0 12.825V10L7 3L11 7L18 0V2.825L11 9.825L7 5.825L0 12.825Z" fill="#2E2E2E" />
    </svg>
  } else if (title === "Content control") {
    return <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H8L10 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4H9.175L7.175 2H2V14L4.4 6H21.5L18.925 14.575C18.7917 15.0083 18.5458 15.3542 18.1875 15.6125C17.8292 15.8708 17.4333 16 17 16H2ZM4.1 14H17L18.8 8H5.9L4.1 14Z" fill="#2E2E2E" />
    </svg>
  } else if (title === "Schools management") {
    return <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 18L4 14.2V8.2L0 6L11 0L22 6V14H20V7.1L18 8.2V14.2L11 18ZM11 9.7L17.85 6L11 2.3L4.15 6L11 9.7ZM11 15.725L16 13.025V9.25L11 12L6 9.25V13.025L11 15.725Z" fill="#2E2E2E" />
    </svg>
  } else if (title === "Communication") {
    return <svg width="22" height="10" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.2 7.20005L8.15 6.15005C8.28333 5.96672 8.375 5.77922 8.425 5.58755C8.475 5.39588 8.5 5.20005 8.5 5.00005C8.5 4.80005 8.475 4.60422 8.425 4.41255C8.375 4.22088 8.28333 4.04172 8.15 3.87505L9.2 2.80005C9.46667 3.11672 9.66667 3.46672 9.8 3.85005C9.93333 4.23338 10 4.61672 10 5.00005C10 5.38338 9.93333 5.76255 9.8 6.13755C9.66667 6.51255 9.46667 6.86672 9.2 7.20005ZM11.325 9.35005L10.25 8.27505C10.6667 7.80838 10.9792 7.29172 11.1875 6.72505C11.3958 6.15838 11.5 5.58338 11.5 5.00005C11.5 4.41672 11.3958 3.84588 11.1875 3.28755C10.9792 2.72922 10.6667 2.21672 10.25 1.75005L11.325 0.675049C11.8917 1.29172 12.3125 1.97088 12.5875 2.71255C12.8625 3.45422 13 4.21672 13 5.00005C13 5.78338 12.8625 6.55005 12.5875 7.30005C12.3125 8.05005 11.8917 8.73338 11.325 9.35005ZM4 6.00005C3.45 6.00005 2.97917 5.80422 2.5875 5.41255C2.19583 5.02088 2 4.55005 2 4.00005C2 3.45005 2.19583 2.97922 2.5875 2.58755C2.97917 2.19588 3.45 2.00005 4 2.00005C4.55 2.00005 5.02083 2.19588 5.4125 2.58755C5.80417 2.97922 6 3.45005 6 4.00005C6 4.55005 5.80417 5.02088 5.4125 5.41255C5.02083 5.80422 4.55 6.00005 4 6.00005ZM0 10V9.42505C0 9.02505 0.108333 8.65838 0.325 8.32505C0.541667 7.99172 0.841667 7.74172 1.225 7.57505C1.65833 7.39172 2.10417 7.25005 2.5625 7.15005C3.02083 7.05005 3.5 7.00005 4 7.00005C4.5 7.00005 4.97917 7.05005 5.4375 7.15005C5.89583 7.25005 6.34167 7.39172 6.775 7.57505C7.15833 7.74172 7.45833 7.99172 7.675 8.32505C7.89167 8.65838 8 9.02505 8 9.42505V10H0ZM18 6.00005C17.45 6.00005 16.9792 5.80422 16.5875 5.41255C16.1958 5.02088 16 4.55005 16 4.00005C16 3.45005 16.1958 2.97922 16.5875 2.58755C16.9792 2.19588 17.45 2.00005 18 2.00005C18.55 2.00005 19.0208 2.19588 19.4125 2.58755C19.8042 2.97922 20 3.45005 20 4.00005C20 4.55005 19.8042 5.02088 19.4125 5.41255C19.0208 5.80422 18.55 6.00005 18 6.00005ZM14 10V9.42505C14 9.02505 14.1083 8.65838 14.325 8.32505C14.5417 7.99172 14.8417 7.74172 15.225 7.57505C15.6583 7.39172 16.1042 7.25005 16.5625 7.15005C17.0208 7.05005 17.5 7.00005 18 7.00005C18.5 7.00005 18.9792 7.05005 19.4375 7.15005C19.8958 7.25005 20.3417 7.39172 20.775 7.57505C21.1583 7.74172 21.4583 7.99172 21.675 8.32505C21.8917 8.65838 22 9.02505 22 9.42505V10H14Z" fill="#2E2E2E" />
    </svg>
  } else if (title === "Feedback") {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.075 12.25L10 10.475L12.925 12.25L12.15 8.925L14.75 6.675L11.325 6.4L10 3.25L8.675 6.4L5.25 6.675L7.85 8.925L7.075 12.25ZM0 20V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4L0 20ZM3.15 14H18V2H2V15.125L3.15 14Z" fill="#2E2E2E" />
    </svg>
  } else if (title === "Promotions") {
    return <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 15V17H18V15H2ZM2 4H4.2C4.11667 3.85 4.0625 3.69167 4.0375 3.525C4.0125 3.35833 4 3.18333 4 3C4 2.16667 4.29167 1.45833 4.875 0.875C5.45833 0.291667 6.16667 0 7 0C7.5 0 7.9625 0.129167 8.3875 0.3875C8.8125 0.645833 9.18333 0.966667 9.5 1.35L10 2L10.5 1.35C10.8 0.95 11.1667 0.625 11.6 0.375C12.0333 0.125 12.5 0 13 0C13.8333 0 14.5417 0.291667 15.125 0.875C15.7083 1.45833 16 2.16667 16 3C16 3.18333 15.9875 3.35833 15.9625 3.525C15.9375 3.69167 15.8833 3.85 15.8 4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V17C20 17.55 19.8042 18.0208 19.4125 18.4125C19.0208 18.8042 18.55 19 18 19H2C1.45 19 0.979167 18.8042 0.5875 18.4125C0.195833 18.0208 0 17.55 0 17V6C0 5.45 0.195833 4.97917 0.5875 4.5875C0.979167 4.19583 1.45 4 2 4ZM2 12H18V6H12.9L15 8.85L13.4 10L10 5.4L6.6 10L5 8.85L7.05 6H2V12ZM7 4C7.28333 4 7.52083 3.90417 7.7125 3.7125C7.90417 3.52083 8 3.28333 8 3C8 2.71667 7.90417 2.47917 7.7125 2.2875C7.52083 2.09583 7.28333 2 7 2C6.71667 2 6.47917 2.09583 6.2875 2.2875C6.09583 2.47917 6 2.71667 6 3C6 3.28333 6.09583 3.52083 6.2875 3.7125C6.47917 3.90417 6.71667 4 7 4ZM13 4C13.2833 4 13.5208 3.90417 13.7125 3.7125C13.9042 3.52083 14 3.28333 14 3C14 2.71667 13.9042 2.47917 13.7125 2.2875C13.5208 2.09583 13.2833 2 13 2C12.7167 2 12.4792 2.09583 12.2875 2.2875C12.0958 2.47917 12 2.71667 12 3C12 3.28333 12.0958 3.52083 12.2875 3.7125C12.4792 3.90417 12.7167 4 13 4Z" fill="#2E2E2E" />
    </svg>
  } else if (title === "Support tickets") {
    return <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.08997 7.99999C8.32507 7.33166 8.78912 6.7681 9.39992 6.40912C10.0107 6.05015 10.7289 5.91893 11.4271 6.0387C12.1254 6.15848 12.7588 6.52151 13.215 7.06352C13.6713 7.60552 13.921 8.29151 13.92 8.99999C13.92 11 10.92 12 10.92 12M11 16H11.01M1 7.52274V14.4773C1 14.7218 1 14.8441 1.02763 14.9592C1.05213 15.0613 1.09253 15.1588 1.14736 15.2483C1.2092 15.3492 1.29568 15.4357 1.46863 15.6086L6.39137 20.5314C6.56432 20.7043 6.6508 20.7908 6.75172 20.8526C6.84119 20.9075 6.93873 20.9479 7.04077 20.9724C7.15586 21 7.27815 21 7.52274 21H14.4773C14.7218 21 14.8441 21 14.9592 20.9724C15.0613 20.9479 15.1588 20.9075 15.2483 20.8526C15.3492 20.7908 15.4357 20.7043 15.6086 20.5314L20.5314 15.6086C20.7043 15.4357 20.7908 15.3492 20.8526 15.2483C20.9075 15.1588 20.9479 15.0613 20.9724 14.9592C21 14.8441 21 14.7218 21 14.4773V7.52274C21 7.27815 21 7.15586 20.9724 7.04077C20.9479 6.93873 20.9075 6.84119 20.8526 6.75172C20.7908 6.6508 20.7043 6.56432 20.5314 6.39137L15.6086 1.46863C15.4357 1.29568 15.3492 1.2092 15.2483 1.14736C15.1588 1.09253 15.0613 1.05213 14.9592 1.02763C14.8441 1 14.7218 1 14.4773 1H7.52274C7.27815 1 7.15586 1 7.04077 1.02763C6.93873 1.05213 6.84119 1.09253 6.75172 1.14736C6.6508 1.2092 6.56432 1.29568 6.39137 1.46863L1.46863 6.39137C1.29568 6.56432 1.2092 6.6508 1.14736 6.75172C1.09253 6.84119 1.05213 6.93873 1.02763 7.04077C1 7.15586 1 7.27815 1 7.52274Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  } else if (title === "Referral") {
    return <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 16L18 13M18 13L21 16M18 13V19M14.5 1.29076C15.9659 1.88415 17 3.32131 17 5C17 6.67869 15.9659 8.11585 14.5 8.70924M11 13H7C5.13623 13 4.20435 13 3.46927 13.3045C2.48915 13.7105 1.71046 14.4892 1.30448 15.4693C1 16.2044 1 17.1362 1 19M12.5 5C12.5 7.20914 10.7091 9 8.5 9C6.29086 9 4.5 7.20914 4.5 5C4.5 2.79086 6.29086 1 8.5 1C10.7091 1 12.5 2.79086 12.5 5Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  } else {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M13 9V3H21V9H13ZM3 13V3H11V13H3ZM13 21V11H21V21H13ZM3 21V15H11V21H3Z" fill="#2E2E2E" />
    </svg>;
  }
};

const SideNav = () => {
  // Location
  const location = useLocation();

  // COntext
  const { navItmesState, setNavItemsState } = useContext(AppContext)

  // Utils

  return (
    <section className={classes.container}>
      <div className={classes.logoSection}>
        <img src={iseLogo} alt="Ise " />
      </div>
      <div className={classes.navSection}>
        {navItmesState.map((data, i) => {
          if (data.children) {
            return <div key={i}>
              <div key={i}
                className={
                  data.keywords?.includes(location.pathname.slice(1)) ||
                    data.route === location.pathname ||
                    data.route?.includes(location.pathname.split("/")[1])
                    ? classes.moreMenuContentActive
                    : classes.moreMenuContentInActive
                }>
                <Link to={data.route} className={classes.link}>
                  {sideNavIconsHandler(data.title)}</Link>

                <Link to={data.route} className={classes.link}>
                  <span>{data.title}</span></Link>

                <svg
                  onClick={() => {
                    activeToggler(i, navItmesState, setNavItemsState)
                  }}

                  style={data.isActive ? { transform: "rotate(-90deg)", transition: "all .3s ease-in-out" } : { transform: "rotate(0deg)", transition: "all .3s ease-in-out" }}
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 9L12 16L5 9" stroke="#2E2E2E" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className={classes.otherOptions} style={data.isActive ? { maxHeight: "1000px" } : { maxHeight: "0px" }}>
                {data.children.map((datum: any, j: number) => {
                  return <Link
                    to={datum.route}
                    key={j}
                    className={location.pathname === datum.route ? `${classes.otherOptionsLinkActive}` : classes.link}
                  >
                    {datum.title}
                  </Link>
                })}
              </div>
            </div>
          }
          return (
            <Link
              to={data.route as string}
              key={i}
              className={
                data.keywords?.includes(location.pathname.slice(1)) ||
                  data.route === location.pathname ||
                  data.route?.includes(location.pathname.split("/")[1])
                  ? classes.active
                  : classes.inActive
              }
            >
              {sideNavIconsHandler(data.title)}
              <span>{data.title}</span>
            </Link>
          );
        })}
        <div className={classes.logout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11 16L7 12M7 12L11 8M7 12L21 12M16 16V17C16 18.6569 14.6569 20 13 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H13C14.6569 4 16 5.34315 16 7V8"
              stroke="#2E2E2E"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Logout</span>
        </div>
      </div>
    </section>
  );
};

export default SideNav;
