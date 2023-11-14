import supabase from "./supabase";

export async function getExpenses() {
  const { data, error } = await supabase.from("expense").select("*");
  if (error) throw new Error("Fetching went wrong.");

  return data;
}

export async function createBill(newBill) {
  const { data, error } = await supabase
    .from("expense")
    .insert([newBill])
    .select();
  if (error) throw new Error("Bill could not be created.");
  return data;
}

export async function deleteBill(id) {
  const { data, error } = await supabase.from("expense").delete().eq("id", id);
  if (error) throw new Error("Bill could not be deleted.");
  return data;
}
