import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserAuth from "./auth"; 
import { redirect } from "next/navigation";

export default async function Page() {
  // Authenticaion check
  const {isAuthenticated} =getKindeServerSession();
  if(!(await isAuthenticated())){
    return redirect("/api/auth/login");
  }
  return (
    <div className="text-center">
   <h1 className="text-3xl font-bold text-white text-center">Account</h1>
   <p className="text-white mt-2">
    Logged in with email: <span className="font-bold"></span>
   </p>
    <UserAuth />
    </div>
  );
}