// import React, { useState } from "react";
// import { useAuth } from "../../contexts/AuthContext"
// import './formsfirebase.css'

// function FormsFirebase() {
//     const auth = useAuth();
//     const { user } = auth;
//     const [emailRegister, setEmailRegister] = useState("");
//     const [confirmEmailRegister, setConfirmEmailRegister] = useState("");
//     const [passwordRegister, setPasswordRegister] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [emailLoginError, setEmailLoginError] = useState("");
//     const [passwordError, setPasswordError] = useState("");
//     const [confirmEmailError, setConfirmEmailError] = useState("");
  
//     const handleRegister = (e) => {
//       e.preventDefault();
//       if (!emailRegister) {
//         setEmailError("Please enter an email address");
//         return;
//       }
//       if (!passwordRegister) {
//         setPasswordError("Please enter a password");
//         return;
//       }
//       if (emailRegister !== confirmEmailRegister) {
//         setConfirmEmailError("Emails do not match");
//         return;
//       } else if (confirmEmailError && emailRegister === confirmEmailRegister) {
//         setConfirmEmailError("");
//       }
//       auth.register(emailRegister, passwordRegister);
//     };
  
//     const handleLogin = async (e) => {
//         e.preventDefault();
//         if (!email) {
//           setEmailLoginError("Please enter an email address");
//           return;
//         }
//         if (!password) {
//           setPasswordError("Please enter a password");
//           return;
//         }
//         try {
//           await auth.login(email, password);
//           setEmail("");
//           setPassword("");
//         } catch (error) {
//           setEmailLoginError("The email or password is incorrect");
//           setPasswordError("The email or password is incorrect");
//         }
//       };

  
//     const handleGoogle = (e) => {
//       e.preventDefault();
//       auth.loginWithGoogle();
//     };
  
//     const handleLogout = () => {
//       auth.logout();
//     };

//   return (
//     <div className="form-register">
//       {user ? (
//         <h5>welcome : {user.displayName}</h5>
//       ) : (
//         <h5>Please log in or register</h5>
//       )}
//       <form className="form">
//         <h3 className="title">Register</h3>
//         <label>Email</label>
//         <input
//           onChange={(e) => setEmailRegister(e.target.value)}
//           className="input"
//           type="email"
//           required
//         />
//         {emailError && <p>{emailError}</p>}
//         <label>Confirm Email</label>
//         <input
//           onChange={(e) => setConfirmEmailRegister(e.target.value)}
//           className="input"
//           type="email"
//           required
//         />
//         {confirmEmailError && <p>{confirmEmailError}</p>}
//         <label>Password</label>
//         <input
//           onChange={(e) => setPasswordRegister(e.target.value)}
//           className="input"
//           type="password"
//           required
//         />
//         {passwordError && <p>{passwordError}</p>}
//         <button onClick={(e) => handleRegister(e)} className="button">
//           submit
//         </button>
//       </form>
//       <form className="form">
//         <h3 className="title">Login</h3>
//         <input
//           onChange={(e) => setEmail(e.target.value)}
//           className="input"
//           type="email"
//           required
//         />
//         {emailError && <p>{emailError}</p>}
//         <input
//           onChange={(e) => setPassword(e.target.value)}
//           className="input"
//           type="password"
//           required
//         />
//         {passwordError && <p>{passwordError}</p>}
//         <button onClick={(e) => handleLogin(e)} className="button">
//           submit
//         </button>
//         <button onClick={(e) => handleGoogle(e)} className="button">
//           Google
//         </button>
//       </form>

//       <button onClick={() => handleLogout()} className="button">
//         Logout
//       </button>
//     </div>
//   );
// }

// export default FormsFirebase;




// // import React, { useState } from "react";
// // import { useAuth } from "../../contexts/AuthContext"

// // function FormsFirebase() {
// //   const auth = useAuth();
// //   const {displayName} = auth.user
// //   const [emailRegister, setEmailRegister] = useState("");
// //   const [passwordRegister, setPasswordRegister] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const handleRegister = (e) => {
// //     e.preventDefault();
// //     auth.register(emailRegister, passwordRegister);
// //   };
// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     auth.login(email, password);
// //   };
// //   const handleGoogle = (e) => {
// //     e.preventDefault();
// //     auth.loginWithGoogle();
// //   };
// //   const handleLogout = () => {
// //     auth.logout();
// //   }
// //   return (
// //     <div className="App">
// //       {displayName && <h5>welcome : {displayName}</h5>}
// //       <form className="form">
// //         <h3 className="title">Register</h3>
// //         <input
// //           onChange={(e) => setEmailRegister(e.target.value)}
// //           className="input"
// //           type="email"
// //         />
// //         <input
// //           onChange={(e) => setPasswordRegister(e.target.value)}
// //           className="input"
// //           type="password"
// //         />
// //         <button onClick={(e) => handleRegister(e)} className="button">
// //           submit
// //         </button>
// //       </form>
// //       <form className="form">
// //         <h3 className="title">Login</h3>
// //         <input
// //           onChange={(e) => setEmail(e.target.value)}
// //           className="input"
// //           type="email"
// //         />
// //         <input
// //           onChange={(e) => setPassword(e.target.value)}
// //           className="input"
// //           type="password"
// //         />
// //         <button onClick={(e) => handleLogin(e)} className="button">
// //           submit
// //         </button>
// //         <button onClick={(e) => handleGoogle(e)} className="button">
// //           Google
// //         </button>
// //       </form>

// //       <button onClick={()=> handleLogout()} className="button">Logout</button>
// //     </div>
// //   );
// // }

// // export default FormsFirebase;


// // // // import React, { useState, useEffect } from "react";
// // // // import { useAuth } from "../../contexts/AuthContext";
// // // // import { useForm } from "react-hook-form";
// // // // import "./formsfirebase.css";

// // // // const FormsFirebase = () => {
// // // //   const auth = useAuth();
// // // //   const { displayName } = auth.user;
// // // //   console.log(displayName);
// // // //   const [emailRegister, setEmailRegister] = useState("");
// // // //   const [passwordRegister, setPasswordRegister] = useState("");
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const {
// // // //     register,
// // // //     handleSubmit,
// // // //     formState: { errors },
// // // //   } = useForm();

// // // //   const onSubmit = (data) => {
// // // //     console.log(data);
// // // //   };
// // // //   useEffect(() => {
// // // //     console.log("hiohihhih", emailRegister, passwordRegister);
// // // //   }, [emailRegister, passwordRegister]);

// // // //   const handleRegister = (e) => {
// // // //     e.preventDefault();
// // // //     auth.registerUser(emailRegister, passwordRegister);
// // // //   };
// // // //   const handleLogin = (e) => {
// // // //     e.preventDefault();
// // // //     auth.login(email, password);
// // // //   };
// // // //   const handleGoogle = (e) => {
// // // //     e.preventDefault();
// // // //     auth.loginWithGoogle();
// // // //   };
// // // //   const handleLogout = () => {
// // // //     auth.logout();
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <div className="form-register">
// // // //         <form onSubmit={handleSubmit(onSubmit)}>
// // // //           <h3>Register</h3>
// // // //           <label>Email</label>
// // // //           <input
// // // //             className="input"
// // // //             type="email"
// // // //             onChange={(e) => setEmailRegister(e.target.value)}
// // // //             {...register("email", {
// // // //               required: true,
// // // //             })}
// // // //           />
// // // //           <label>Confirm Email</label>
// // // //           <input
// // // //             className="input"
// // // //             type="email"
// // // //             onChange={(e) => setEmailRegister(e.target.value)}
// // // //             {...register("email confirm", {
// // // //               required: true,
// // // //             })}
// // // //           />
// // // //           {errors.nombre?.type === "required" && <p>El campo es requerido</p>}
// // // //           <label>Password</label>
// // // //           <input
// // // //             className="input"
// // // //             type="password"
// // // //             onChange={(e) => setPasswordRegister(e.target.value)}
// // // //             {...register("password", {
// // // //               required: true,
// // // //               minLength: 10,
// // // //             })}
// // // //           />
// // // //           <button
// // // //             className="button"
// // // //             type="submit"
// // // //             onClick={(e) => handleRegister(e)}
// // // //           >
// // // //             Submit
// // // //           </button>
// // // //         </form>
// // // //       </div>

// // // //       <div className="form-login">
// // // //         {displayName && <h1>{displayName}</h1>}
// // // //         <form>
// // // //           <h3>Login</h3>
// // // //           <input
// // // //             className="input"
// // // //             type="email"
// // // //             onChange={(e) => setEmail(e.target.value)}
// // // //           />
// // // //           <input
// // // //             className="input"
// // // //             type="password"
// // // //             onChange={(e) => setPassword(e.target.value)}
// // // //           />
// // // //           <button className="button" onClick={(e) => handleLogin(e)}>
// // // //             Submit
// // // //           </button>
// // // //           <button className="button" onClick={(e) => handleGoogle(e)}>
// // // //             Google
// // // //           </button>
// // // //         </form>
// // // //         <button className="button" onClick={() => handleLogout()}>
// // // //           Logout
// // // //         </button>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default FormsFirebase;
