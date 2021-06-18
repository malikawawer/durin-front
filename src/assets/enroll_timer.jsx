import "../screens/Form/FormScreen.scss"
import React, { useEffect, useState } from "react";


export const EnrollTimer = () => {


    const enrollmentDate = new Date(2021, 24, 6,19,0,0)

    return(
        <div className="enroll-timer">
            <div className="timer-box">
            <p>Zapisy będą dostępne za:</p>
            <p style={{fontSize: 2 + 'rem'}}>12:00:23</p>
            </div>
        </div>
    )
}

export {};