import { VIDEO_RAW_TABLE } from "@/configs/schema";
import { NextResponse } from "next/server";
import { db } from "@/configs/db";
import { desc, eq } from "drizzle-orm";

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
    console.log(videoId,videoData);
    const result = await db.update(VIDEO_RAW_TABLE).set({videoData: videoData}).where(eq(VIDEO_RAW_TABLE.videoId,videoId)).returning(VIDEO_RAW_TABLE);
    return NextResponse.json({result});
}

export async function GET(req){
    const {searchParams} = new URL(req.url);
    const videoId = searchParams.get('videoId');
    const userEmail = searchParams.get('userEmail');
    if (userEmail){
        const result = await db.select().from(VIDEO_RAW_TABLE).where(eq(VIDEO_RAW_TABLE.createdBy,userEmail)).orderBy(desc(VIDEO_RAW_TABLE.id));
        return NextResponse.json(result); 
    }
    const result = await db.select().from(VIDEO_RAW_TABLE).where(eq(VIDEO_RAW_TABLE.videoId,videoId));
    console.log(result);
    return NextResponse.json(result[0]);
}