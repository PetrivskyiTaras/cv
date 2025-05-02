import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public/files/Taras_Petrivskyi_CV_Senior_Software_Engineer.pdf');
  const fileBuffer = await fs.readFile(filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Taras_Petrivskyi_CV_Senior_Software_Engineer.pdf"',
    },
  });
}
