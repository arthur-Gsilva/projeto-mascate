'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

type Table = {
    id: number;
    status: 'available' | 'busy' | 'selected';
};

type OrderContextType = {
    tables: Table[];
    numberOfPeople: number;
    dishes: number;
    setTables: (tables: Table[]) => void;
    setNumberOfPeople: (num: number) => void;
    setDishes: (num: number) => void;
    selectTable: (index: number) => void;
    clickTime: Date | null,
    setClickTime: () => void
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
    const [tables, setTables] = useState<Table[]>([
        { id: 1, status: 'available' },
        { id: 2, status: 'available' },
        { id: 4, status: 'busy' },
        { id: 5, status: 'busy' },
        { id: 6, status: 'available' },
        { id: 7, status: 'available' },
        { id: 8, status: 'busy' },
        { id: 9, status: 'available' },
        { id: 10, status: 'busy' },
        { id: 11, status: 'available' },
        { id: 12, status: 'busy' },
        { id: 13, status: 'busy' },
    ]);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [dishes, setDishes] = useState(0);

    const [clickTime, setClickTime] = useState<Date | null>(null);

    const handleClick = () => {
        setClickTime(new Date());
    };

    const selectTable = (index: number) => {
        setTables((prevTables) =>
        prevTables.map((table) => {
            if (table.id === index && table.status === 'available') {
            return { ...table, status: 'selected' };
            } else if (table.status === 'selected' && table.id !== index) {
            return { ...table, status: 'available' };
            } else {
            return table;
            }
        })
        );
    };

  return (
    <OrderContext.Provider value={{ tables, numberOfPeople, dishes, setTables, setNumberOfPeople, setDishes, selectTable, clickTime, setClickTime: handleClick }}>
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
