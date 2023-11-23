// import React from "react";
// import { Stepper, Step, Button } from "@material-tailwind/react";
// const AboutMe = () => {
//       const [activeStep, setActiveStep] = React.useState(0);
     
     
//       return (
//         <div className="w-full py-4 px-8  ">
//           <Stepper
//             activeStep={activeStep}
//           >
//             <Step onClick={() => setActiveStep(0)}>1</Step>
//             <Step onClick={() => setActiveStep(1)}>2</Step>
//             <Step onClick={() => setActiveStep(2)}>3</Step>
//           </Stepper>
          
//         </div>
//       );
// };

// export default AboutMe;



// import React from "react";
// import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
// import {
//   CogIcon,
//   UserIcon,
//   BuildingLibraryIcon,
// } from "@heroicons/react/24/outline";
 
// export function AboutMe() {
//   const [activeStep, setActiveStep] = React.useState(0);
 
 
//   return (
//     <div className="w-full px-24 py-24 bg-slate-300 ">
//       <Stepper
//         activeStep={activeStep}
//       >
//         <Step onClick={() => setActiveStep(0)}>
//          <div className="flex justify-center "> <UserIcon className="h-5 w-5" /></div>
//           <div className="absolute -bottom-[4.5rem] w-max text-center">
//             <Typography
//               variant="h6"
//               color={activeStep === 0 ? "blue-gray" : "gray"}
//             >
//               Step 1
//             </Typography>
//             <Typography
//               color={activeStep === 0 ? "blue-gray" : "gray"}
//               className="font-normal"
//             >
//               Details about yout account.
//             </Typography>
//           </div>
//         </Step>
//         <Step onClick={() => setActiveStep(1)}>
//           <CogIcon className="h-5 w-5" />
//           <div className="absolute -bottom-[4.5rem] w-max text-center">
//             <Typography
//               variant="h6"
//               color={activeStep === 1 ? "blue-gray" : "gray"}
//             >
//               Step 2
//             </Typography>
//             <Typography
//               color={activeStep === 1 ? "blue-gray" : "gray"}
//               className="font-normal"
//             >
//               Details about yout account.
//             </Typography>
//           </div>
//         </Step>
//         <Step onClick={() => setActiveStep(2)}>
//           <BuildingLibraryIcon className="h-5 w-5" />
//           <div className="absolute -bottom-[4.5rem] w-max text-center">
//             <Typography
//               variant="h6"
//               color={activeStep === 2 ? "blue-gray" : "gray"}
//             >
//               Step 3
//             </Typography>
//             <Typography
//               color={activeStep === 2 ? "blue-gray" : "gray"}
//               className="font-normal"
//             >
//               Details about yout account.
//             </Typography>
//           </div>
//         </Step>
//       </Stepper>
//     </div>
//   );
// }


// export default AboutMe;