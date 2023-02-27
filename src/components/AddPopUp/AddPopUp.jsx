// import React, { useState, useRef } from "react";

// export default function AddPopUp() {
//   const [isClick, setIsClick] = useState(false);

//   function HandeClick() {
//     setIsClick(!isClick);
//   }
//   let errorRef = useRef(null);
//   function Error() {
//     errorRef.current.style.display = "flex";
//   }

//   return (
//     <div className="modal">
//       <div className="modal__header">
//         <button className="modal__header-cancel modal-btn">Cancel</button>
//         <button className="modal__header-add modal-btn" onClick={Error}>
//           Add
//         </button>
//       </div>
//       <div className="modal__body">
//         <form action="" className="form">
//           <div className="form__heder">
//             <h3 className="form__header-title">
//               Title <span className="error__add"> *required</span>
//             </h3>
//             <input
//               type="text"
//               className="form__header-input"
//               placeholder="add a title..."
//             />
//           </div>
//           <div className="form__body">
//             <h3 className="form__body-title">
//               Description
//               <span className="error__add"> *required</span>
//             </h3>
//             <textarea
//               name="text"
//               id="text"
//               cols="30"
//               rows="5"
//               className="form__body-input"
//               placeholder="add a description ..."
//             ></textarea>
//           </div>
//         </form>
//       </div>
//       <div className="modal__footer">
//         <div className="modal__footer-title">
//           <h3>
//             Tags <span className="error__add">*required</span>
//           </h3>
//         </div>
//         <div className="modal__footer-buttons">
//           <div
//             className={`button__item ${isClick ? "active" : ""}`}
//             onClick={HandeClick}
//           >
//             <span className="circle type-work"></span> work
//           </div>
//           <div
//             className={`button__item ${isClick ? "active" : ""}`}
//             onClick={HandeClick}
//           >
//             <span className="circle type-study"></span> study
//           </div>
//           <div
//             className={`button__item ${isClick ? "active" : ""}`}
//             onClick={HandeClick}
//           >
//             <span className="circle type-entertainment"></span> entertainment
//           </div>
//           <div
//             className={`button__item ${isClick ? "active" : ""}`}
//             onClick={HandeClick}
//           >
//             <span className="circle type-family"></span> family
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
