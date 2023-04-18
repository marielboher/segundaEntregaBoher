// import React, { useState, useEffect, createContext, useContext } from "react";
// import { auth } from "../../db/firebase-config";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

// export const AuthContext = createContext();

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     console.log("error creating auth context");
//   }
//   return context;
// };

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState("");
//   /* A hook that is called when the component is mounted and when the component is updated. */
//   useEffect(() => {
//     const subscribed = onAuthStateChanged(auth, (currentUser) => {
//       if (!currentUser) {
//         console.log("no hay usuario suscrito");
//         setUser("");
//       } else {
//         setUser(currentUser);
//       }
//     });
//     return () => subscribed();
//   }, []);

//   const register = async (email, password) => {
//     const response = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     console.log(response);
//   };

//   const login = async (email, password) => {
//     const response = await signInWithEmailAndPassword(auth, email, password);
//     console.log(response);
//   };

//   const loginWithGoogle = async () => {
//     const responseGoogle = new GoogleAuthProvider();
//     return await signInWithPopup(auth, responseGoogle);
//   };
//   const logout = async () => {
//     const response = await signOut(auth);
//     console.log(response);
//   };
//   return (
//     <AuthContext.Provider
//       value={{
//         register,
//         login,
//         loginWithGoogle,
//         logout,
//         user,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }


// // import { auth } from "../../db/firebase-config";
// // import { createContext, useContext, useEffect, useState } from "react";
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// //   GoogleAuthProvider,
// //   signInWithPopup,
// //   signOut,
// //   onAuthStateChanged,
// // } from "firebase/auth";

// // export const AuthContext = createContext();

// // export const useAuth = () => {
// //   const context = useContext(AuthContext);
// //   console.log("context", context);
// //   if (!context) {
// //     console.log("no creaste el contexto");
// //   }
// //   return context;
// // };

// // const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState("");
// //   useEffect(() => {
// //     const suscribed = onAuthStateChanged(auth, (currentUser) => {
// //       if (!currentUser) {
// //         console.log("no hay usuario suscripto");
// //         setUser("");
// //       } else {
// //         setUser(currentUser);
// //       }
// //     });
// //     return () => suscribed();
// //   }, []);

// //   const registerUser = async (email, password) => {
// //     const response = await createUserWithEmailAndPassword(
// //       auth,
// //       email,
// //       password
// //     );
// //     console.log(response);
// //   };
// //   const login = async (email, password) => {
// //     const response = signInWithEmailAndPassword(auth, email, password);
// //     console.log(response);
// //   };

// //   const loginWithGoogle = async () => {
// //     const responseGoogle = new GoogleAuthProvider();
// //     return await signInWithPopup(auth, responseGoogle);
// //   };
// //   const logout = async () => {
// //     const response = await signOut(auth);
// //     console.log(response);
// //   };

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         registerUser,
// //         login,
// //         loginWithGoogle,
// //         logout,
// //         user,
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export default AuthProvider;
