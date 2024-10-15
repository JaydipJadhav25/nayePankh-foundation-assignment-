import Image from "next/image";
// import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'; 
import SidebarDemo from "./home/page";
import { div } from "framer-motion/client";
const secretKey = "superMan@123";


// export async function getServerSideProps(context : any) { 
//   const token = context.req?.cookies.token; // Assuming the token is stored in cookies

//   try {
//     const decoded = jwt.verify(token, secretKey);
//     console.log("user : " , decoded);

//     return {
//       props :{
//         user : decoded
//       }
//     }

//   } catch (error) {
//     return {
//       props: {},
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },

    
//   }

// }

// }

export default function Home() {
  // const token = request.cookies.get("token")?.value || "";

  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;
  const user = jwt.verify(token || "" ,secretKey );



  return (
   <div>
 <SidebarDemo name={"jaydip"}/>

   </div>
  );
}
