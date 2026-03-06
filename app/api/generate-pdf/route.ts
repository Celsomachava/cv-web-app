import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(request: NextRequest) {
    try {
        const { html, accentColor } = await request.json();

        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        // Templates already include full HTML structure with Font Awesome
        // Just inject the accent color
        const fullHTML = html.replace('--accent-color: #6d54b0;', `--accent-color: ${accentColor};`)
                             .replace('--accent-color: #b8860b;', `--accent-color: ${accentColor};`);
        
        await page.setContent(fullHTML, { 
            waitUntil: 'networkidle0',
            timeout: 30000 
        });
        
        const pdf = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: { top: 0, right: 0, bottom: 0, left: 0 }
        });
        
        await browser.close();
        
        return new NextResponse(pdf, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename=cv.pdf'
            }
        });
    } catch (error: any) {
        console.error('PDF generation error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
