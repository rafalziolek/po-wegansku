import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function storePurchaseInfo(fullName: string, email: string, purchaseId: string) {
  try {
    if (!fullName || !email || !purchaseId) throw new Error('Name or email or purchaseId is not provided');
    await sql`INSERT INTO purchases (full_name, email, purchases_id) VALUES (${fullName}, ${email}, ${purchaseId});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  return NextResponse.json({ message: 'Purchase info stored successfully' }, { status: 200 });
}