import { createContext } from 'react';
import { Entry } from '../../interfaces';

interface ContextProps {
   entries: Entry[]; // todo: falta el tipo de dato

   //Methods
   addnewEntry: (description: string) => void
   updateEntry: (entry: Entry) => void
}

export const EntriesContext= createContext({} as ContextProps);