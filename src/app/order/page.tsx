"use client"

import { TableGrid } from "@/components/TableGrid";
import { Button } from "@/components/ui/button";
import { useOrder } from "@/contexts/OrderContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Order = () => {
    const router = useRouter();
    const { state, dispatch } = useOrder();
    const { tables, numberOfPeople, dishes } = state;

    const selectedTable = tables.find((table) => table.status === 'selected');
    const [disabled, setDisabled] = useState<boolean>(true);

    useEffect(() => {
        if (selectedTable?.id && numberOfPeople > 0 && dishes > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [tables, numberOfPeople, dishes]);

    const handleClick = () => {
        dispatch({ type: 'SET_CLICK_TIME', clickTime: new Date() });
        router.push('/completed');
    };

    return (
        <div className="container w-full h-full flex justify-center items-center flex-col text-black gap-4 py-3 pl-0 pr-0">
            <h2 className="text-2xl">Escolha sua mesa!</h2>

            <div className="bg-gray-50 w-3/4 rounded-xl pb-6 mb-10 relative md:w-1/2">
                <div className="mb-4 flex justify-center items-center flex-col p-2">
                    <p>Você está aqui</p>
                    <FaRegUser className=""/>
                </div>

                <div>
                    <TableGrid />
                </div>

                <div className="absolute w-full flex justify-center items-center pb-6">
                    <Button
                        className="rounded-full"
                        variant="secondary"
                        size="lg"
                        onClick={handleClick}
                        disabled={disabled}
                    >
                        <FaLongArrowAltRight />
                    </Button>
                </div>   
            </div>
        </div>
    );
}

export default Order;
