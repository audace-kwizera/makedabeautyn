import { NextResponse } from "next/server";

export async function GET(req) {
    return NextResponse.json({ time: new Date().toLocaleString() });
}

// mongodb+srv://myrvanamengue:j8l7eAcdMOXIVrsv@cluster0.hsb02z9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0