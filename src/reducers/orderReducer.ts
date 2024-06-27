type Table = {
    id: number;
    status: 'available' | 'busy' | 'selected' | 'reserved';
};

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
    tables: [
        { id: 1, status: 'available' },
        { id: 2, status: 'available' },
        { id: 3, status: 'available' },
        { id: 4, status: 'busy' },
        { id: 5, status: 'reserved' },
        { id: 6, status: 'available' },
        { id: 7, status: 'busy' },
        { id: 8, status: 'available' },
        { id: 9, status: 'reserved' },
        { id: 10, status: 'available' },
        { id: 11, status: 'available' },
        { id: 12, status: 'busy' },
        { id: 13, status: 'available' },
        { id: 14, status: 'busy' },
        { id: 15, status: 'available' },
        { id: 16, status: 'available' },
    ],
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
