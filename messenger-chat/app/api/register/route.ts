/** @format */

import User from "@/app/lib/userSchema";
import { NextResponse } from "next/server";
import connectDB from "../../lib/db";

export async function POST(req: Request, res: Response) {
  try {
    await connectDB();
    const body = await req.json();
    const { email, name, password } = body;

    if (!email || !name || !password) {
      return new NextResponse("missing info", { status: 400 });
    }
    const user = await User.create({ email, name, password });

    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    console.log(error, "Registration error");
  }
}
