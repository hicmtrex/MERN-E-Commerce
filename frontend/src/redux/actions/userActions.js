// import React, { useState, useEffect, useCallback } from 'react';

// let logoutTime;

// const calculateRemainingTime = (expirationTime) => {
//   const currentTime = new Date().getTime();
//   const adjExpirationTime = new Date(expirationTime).getTime();

//   const remainingDuration = adjExpirationTime - currentTime;

//   return remainingDuration;
// };

// const loginHandler = (token, expirationTime) => {
//   setToken(token);
//   localStorage.setItem('token', token);
//   localStorage.setItem('expirationTime',expirationTime)

//   const remainingTime = calculateRemainingTime(expirationTime);

//   logoutTime = setTimeout(logoutHandler, remainingTime);
// };

// useEffect(() => {
//   if (tokenData) {
//       logoutTime = setTimeout(logoutHandler, tokenData.duration);    
//     }
// }, [tokenData, logoutHandler])

