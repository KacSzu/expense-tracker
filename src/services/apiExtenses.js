import supabase from "./supabase";

export async function getExpenses() {
  const { data, error } = await supabase.from("expense").select("*");
  if (error) throw new Error("Something went wrong");

  return data;
}

export async function createBill(newBill) {
  const { data, error } = await supabase
    .from("expense")
    .insert([newBill])
    .select();
  if (error) throw new Error("Bill could not be created");
  return data;
}
