import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import mongoose from 'mongoose';
// No se puede usar mongoose aun
export function middleware(req: NextRequest, ev: NextFetchEvent) {

    const id = req.page.params?.id || "";
    const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");
    
    // no funciona de momento hasta que next lo solucione
    if (!checkMongoIDRegExp.test(id)) {
        return new Response(JSON.stringify({
            message: 'No es valido'
        }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    
    return NextResponse.next();
}