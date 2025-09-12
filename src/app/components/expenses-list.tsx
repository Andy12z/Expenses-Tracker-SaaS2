"use client";
import { deleteExpense } from "../../actions/actions";

type ExpensesListProps={
  expenses:{
    id:number;
    description: string;
    amount:number;
    createdAt:Date;
  }[];
    
}
export default function ExpensesList({expenses}:ExpensesListProps) {
  return (
    <main>
        <ul className="h-[300px] rounded mt-4 shadow-md bg-white">
          {expenses.map((expense)=>(
            <li key={expense.id} className="flex items-center px-4 py-2 border-b">
              <p>{expense.description}</p>
              <p className="ml-auto font-bold mr-[15px]">{expense.amount}</p>
              <button
              onClick={async ()=>{
                await deleteExpense(expense.id);
              }}
               className="text-[10px] w-[20px] h-[20px] bg-red-500 text-white rounded hover:bg-red-600">
                X
                </button>
            </li>
          ))}
        </ul>
    </main>
  )
}
 