import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import ApplicationStatus from '../../assets/img/Patterns/ApplicationStatus.png'

const isMobile = window.innerWidth < 768;
const PatternApplicationStatus = () => {
      return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "300%"} : {}}>
      <div className="mb-8">
        <Header>Application Status</Header>
      </div>
          <img src={ApplicationStatus} className={" pr-8  pb-8" + isMobile ? "" : "w-1/2"} alt="ApplicationStatus" style={ isMobile ? {maxWidth: "41.25%"} : {}}></img>
          </div>
  );
  
};

export default PatternApplicationStatus;
