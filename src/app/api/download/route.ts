import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(request: NextRequest) {
  const filePath = path.join(
    process.cwd(),
    "private",
    "powegansku-naslodko-nikolachmiel.pdf"
  );
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="powegansku-naslodko-nikolachmiel.pdf"',
    },
  });
}
