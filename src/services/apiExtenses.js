import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function getExpenses() {
  const { data, error } = await supabase.from("expense").select("*");
  if (error) throw new Error("Fetching went wrong.");

  return data;
}

export async function createBill(newBill) {
  const { data, error } = await supabase.from("expense").insert([newBill]);

  if (error) throw new Error("Bill could not be created.");

  return data;
}

export async function deleteBill(id) {
  const { data, error } = await supabase.from("expense").delete().eq("id", id);
  if (error) throw new Error("Bill could not be deleted.");
  return data;
}

export async function getExpensesByDate(date) {
  const { data, error } = await supabase
    .from("expense")
    .select(" category, price, createdDate, date")
    .gte("createdDate", date)
    .lte("createdDate", getToday({ end: true }));
  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
}
