// 파일: app/api/translate/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { text } = await req.json();

  const res = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=AIzaSyCJDn4jhfmWhdwJjaoNVVz6QfxL4sQphGE`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text,
        target: 'en',
        format: 'text',
      }),
    }
  );

  const data = await res.json();
  const translated = data.data.translations[0].translatedText;
  return NextResponse.json({ translated });
}
