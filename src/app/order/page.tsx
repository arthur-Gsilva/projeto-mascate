"use client"

import { TableGrid } from "@/components/TableGrid";
import { Button } from "@/components/ui/button";
import { useOrder } from "@/contexts/OrderContext";
import { useRouter } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";


const order = () => {

    const router = useRouter()
    const { tables, numberOfPeople, dishes, setClickTime } = useOrder();
    const selectedTable = tables.find((table) => table.status === 'selected');

    const handleClick = () => {
        setClickTime();
        router.push('/completed')
    };

    return(
        <div className="container w-full h-full flex justify-center items-center flex-col text-white gap-4 py-3 pl-0 pr-0">
            <h2 className="text-2xl">Escolha sua mesa!</h2>

            <div className="bg-primary w-3/4 rounded-md pb-6 relative md:w-1/2">
                <div className="mb-4 flex justify-center items-center flex-col p-2">
                    <p>Você está aqui</p>
                    <FaRegUser className=""/>
                </div>

                <div>
                    <TableGrid />
                </div>

                {selectedTable?.id && numberOfPeople > 0 && dishes > 0 &&
                    <div className="absolute w-full flex justify-center items-center">
                        <Button
                            className="rounded-full"
                            variant="secondary"
                            size="lg"
                            onClick={handleClick}
                        >
                            <FaLongArrowAltRight />
                        </Button>
                    </div>
                }

                
                
            </div>

            
        </div>
    )
}

export default order;