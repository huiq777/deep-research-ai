import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const now = new Date();
    const greeting = {
      message: 'Hello from Deep Research AI Agent!',
      timestamp: now.toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      status: 'success'
    };

    return NextResponse.json(greeting);
  } catch (error) {
    return NextResponse.json(
      { 
        message: 'Error occurred', 
        error: error instanceof Error ? error.message : 'Unknown error',
        status: 'error'
      },
      { status: 500 }
    );
  }
}
