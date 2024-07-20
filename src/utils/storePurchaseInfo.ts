import { sql } from "@vercel/postgres";
import { randomUUID } from "crypto";

export async function storePurchaseInfo(
  fullName: string,
  email: string,
  purchaseId: string
) {
  try {
    if (!fullName || !email || !purchaseId)
      throw new Error("Name, email, or purchaseId is not provided");
    await sql`INSERT INTO purchases (full_name, email, purchase_id) VALUES (${fullName}, ${email}, ${purchaseId} );`;
    return {
      success: true,
      message: "Purchase info stored successfully",
    };
  } catch (error) {
    console.error("Error storing purchase info:", error);
    return { success: false, error: (error as Error).message };
  }
}
