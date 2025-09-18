import { prisma } from "../../../../lib/db";
import ExpensesForm from "../../../../components/expenses-form";
import ExpensesList from "../../../../components/expenses-list";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export default async function Page() {
  // Authenticaion check
  const {isAuthenticated} =getKindeServerSession();
  if(!(await isAuthenticated())){
    return redirect("/api/auth/login");
  }

  const expenses = await prisma.expense.findMany();
 
  return (
    <div>
        <h1 className="text-3xl font-bold text-white text-center">Dashboard</h1>
        <div className="w-full max-w-[600px] mx-auto">
            <ExpensesList expenses={expenses} />
            <ExpensesForm />
        </div>
    </div>
  );
}