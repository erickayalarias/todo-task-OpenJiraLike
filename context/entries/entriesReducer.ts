import { EntriesState } from './';

type EntriesType =
| {
type: 'Entries - Actionname';
}

// minus
export const entriesReducer = (state: EntriesState, action: EntriesType): EntriesState => {
 const { type } = action;
 switch (type) {
    //   case 'Entries - Actionname':
    //     return {
    //        ...state,
    //       };

       default:
           return state;
}
};
