import { PAGE_SIZE } from "../utils/constant";
import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function getExpenses({ filter, page, sortBy }) {
  let query = supabase.from("expense").select("*", { count: "exact" });
  if (filter)
    query = query.eq(
      filter.field,
      filter.value[0].toUpperCase() + filter.value.slice(1),
    );
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  const { data, error, count } = await query;
  if (error) throw new Error("Expenses could not be loaded.");

  return { data, count };
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
