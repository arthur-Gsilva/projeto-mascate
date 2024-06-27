'use client'
import { createContext, useContext, useReducer, ReactNode } from 'react';
import { reducer, initialState, State, Action } from '@/reducers/orderReducer';

const OrderContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <OrderContext.Provider value={{ state, dispatch }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrder must be used within an OrderProvider');
    }
    return context;
};
