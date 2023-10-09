import { NextResponse } from 'next/server';
import { adminDB } from '@/db/adminConfig';

export async function GET(request) {
  try {
    const collectionRef = adminDB.collection('projects');
    const query = collectionRef
    .orderBy('timestamp', 'desc')
    .limit(10);
    const snapshot = await query.get()
    if (snapshot.empty) {
      return NextResponse.json([])
    }

    const documents = [];
    snapshot.forEach(doc => {
      documents.push({
        _id: doc.id,
        ...doc.data()
      });
    });
    return NextResponse.json(documents);
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.error(error.message, { statusCode: 500 });
  }
}


