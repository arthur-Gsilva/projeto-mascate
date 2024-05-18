"use client"

import { Button } from "@/components/ui/button";
import { useOrder } from "@/contexts/OrderContext";
import { useRouter } from "next/navigation";

const completed = () => {

    const router = useRouter()

    const { tables, numberOfPeople, dishes, clickTime } = useOrder();
    const selectedTable = tables.find((table) => table.status === 'selected');
    const formattedTime = clickTime ? `${clickTime.getHours()}:${clickTime.getMinutes()}:${clickTime.getSeconds()}` : ''

    return(
        <div className="w-full h-full text-white flex items-center justify-center flex-col">
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
                    <div className="bg-primary rounded p-2 select-none">567</div>
                </div>

                
            </div>
            <Button onClick={() => router.push('/')} variant="secondary">Voltar para o início</Button>
        </div>
    )
}

export default completed