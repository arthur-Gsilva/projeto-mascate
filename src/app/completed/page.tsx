"use client"

import { Button } from "@/components/ui/button";
import { useOrder } from "@/contexts/OrderContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const completed = () => {

    const router = useRouter()

    const { tables, numberOfPeople, dishes, clickTime, setBusyTable, setNumberOfPeople, setDishes } = useOrder();
    const selectedTable = tables.find((table) => table.status === 'selected');
    const formattedTime = clickTime ? `${clickTime.getHours()}:${clickTime.getMinutes()}:${clickTime.getSeconds()}` : ''

    const idFormat = (n: number) => {
        if(n.toString().length === 1){
            return '00'+ n
        } else if (n.toString().length === 2){
            return '0'+ n
        } else{
            return n
        }
    }

    const handleClick = () => {
        setBusyTable()
        setNumberOfPeople(1)
        setDishes(0)
        router.push('/')
    }

    return(
        <div className="min-w-screen min-h-screen text-white flex items-center justify-center flex-col">
            <div>
                <h2 className="text-3xl">Processo concluído!</h2>

                <div className="bg-gray-500 rounded-md p-5 my-8">
                    <p>Mesa: {selectedTable?.id}</p>
                    <p>Pessoas: {numberOfPeople}</p>
                    <p>Pratos: {dishes}</p>
                    <p>Horário: {formattedTime}</p>
                </div>

                <div className="text-center mb-5">
                    <h3 className="text-xl mb-4">Número da comanda:</h3>
                    <div className="bg-primary rounded p-2 select-none">
                        {idFormat(Math.floor(Math.random() * 1000))}
                    </div>
                </div>

                
            </div>
            <Button onClick={handleClick} variant="secondary">Voltar para o início</Button>
        </div>
    )
}

export default completed