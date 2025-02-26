import { VIDEO_RAW_TABLE } from "@/configs/schema";
import { NextResponse } from "next/server";
import { db } from "@/configs/db";
import { eq } from "drizzle-orm";
export async function POST(req){
    const {videoId,userEmail} = await req.json();
    
    const result = await db.insert(VIDEO_RAW_TABLE).values(
        {
            videoId: videoId,
            createdBy: userEmail
        }
    ).returning(VIDEO_RAW_TABLE);
    return NextResponse.json({result});

}

export async function PUT(req){
    const {videoId,videoData} = await req.json();
    const result = await db.update(VIDEO_RAW_TABLE).set({videoData: videoData}).where(eq(VIDEO_RAW_TABLE.videoId,videoId)).returning(VIDEO_RAW_TABLE);
    return NextResponse.json({result});
}