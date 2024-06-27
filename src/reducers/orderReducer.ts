import { Table } from "@/types/Table";
import { Tables } from "@/utils/tables";


export type State = {
    tables: Table[];
    numberOfPeople: number;
    dishes: number;
    clickTime: Date | null;
    selectedTableId: number | null; // Adicionando o ID da mesa selecionada
};

export type Action =
    | { type: 'SET_NUMBER_OF_PEOPLE'; numberOfPeople: number }
    | { type: 'SET_DISHES'; dishes: number }
    | { type: 'SELECT_TABLE'; index: number }
    | { type: 'SET_CLICK_TIME'; clickTime: Date }
    | { type: 'SET_BUSY_TABLE' }
    | { type: 'INCREASE_PEOPLE' }
    | { type: 'DECREASE_PEOPLE' }
    | { type: 'INCREASE_DISHES' }
    | { type: 'DECREASE_DISHES' };

export const initialState: State = {
    tables: Tables,
    numberOfPeople: 1,
    dishes: 0,
    clickTime: null,
    selectedTableId: null,
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_NUMBER_OF_PEOPLE':
            return { ...state, numberOfPeople: action.numberOfPeople };
        case 'SET_DISHES':
            return { ...state, dishes: action.dishes };
        case 'SELECT_TABLE':
            return {
                ...state,
                tables: state.tables.map(table =>
                    table.id === action.index
                        ? { ...table, status: table.status === 'available' ? 'selected' : table.status }
                        : table.status === 'selected'
                        ? { ...table, status: 'available' }
                        : table
                ),
            };
        case 'SET_CLICK_TIME':
            return { ...state, clickTime: action.clickTime };
        case 'SET_BUSY_TABLE':
            return {
                ...state,
                tables: state.tables.map(table =>
                    table.status === 'selected' ? { ...table, status: 'busy' } : table
                ),
            };
        case 'INCREASE_PEOPLE':
            return { ...state, numberOfPeople: state.numberOfPeople < 6 ? state.numberOfPeople + 1 : state.numberOfPeople };
        case 'DECREASE_PEOPLE':
            return { ...state, numberOfPeople: state.numberOfPeople > 0 ? state.numberOfPeople - 1 : state.numberOfPeople };
        case 'INCREASE_DISHES':
            return { ...state, dishes: state.dishes < 10 ? state.dishes + 1 : state.dishes };
        case 'DECREASE_DISHES':
            return { ...state, dishes: state.dishes > 0 ? state.dishes - 1 : state.dishes };
        default:
            return state;
    }
};
