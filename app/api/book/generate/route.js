import OpenAI from "openai";

// initialize the openai
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const prompt = await req.json();
    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      // response_format: { type: "json_object" },
    });

    // TODO: import book to database

    return Response.json({ data: res, status: 200 });
  } catch (error) {
    console.log("ERROR WHILE GENERATE BOOK=====:", error);
    return Response.json({ data: error.message, status: 500 });
  }
}
