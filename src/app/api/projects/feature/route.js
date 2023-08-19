import { NextResponse } from 'next/server';
import projects from '../project-data.json';

export async function GET(request) {
  try {
    const featuredProjects = projects.filter(item => item.isFeatured === true).slice(0, 10);
    return NextResponse.json(featuredProjects);
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.error(error.message, { statusCode: 500 });
  }
}

