import { isValidObjectId } from 'mongoose';
import { db } from '.';
import { Entry, IEntry } from '../models';


export const getEntryByid = async(id: string):Promise<IEntry | null > => {
    if (!isValidObjectId(id)) return null
    await db.connect();
    // only use menos lean when you know you will use less data 
    const entry = await Entry.findById(id).lean();
    await db.disconnect();
    return JSON.parse(JSON.stringify(entry))
}