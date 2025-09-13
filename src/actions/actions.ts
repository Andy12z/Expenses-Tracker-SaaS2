"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../lib/db";

export async function addExpense(formData:FormData){
    await prisma.expense.create({
        data:{
            description:formData.get("description") as string,
            amount:Number(formData.get("amount")),
        },
    });
    revalidatePath("/app/dashboard");
} 
export async function editExpense(formData:FormData,id:number){
    await prisma.expense.update({
        where:{
            id:id,
        },
        
        data:{
            description:formData.get("description") as string,
            amount:Number(formData.get("amount")),
        },
    });
    revalidatePath("/app/dashboard");
} 

export async function deleteExpense(id: number){
    await prisma.expense.delete({
        where: {
        id:id,
        },
    });
    revalidatePath("/app/dashboard");


}