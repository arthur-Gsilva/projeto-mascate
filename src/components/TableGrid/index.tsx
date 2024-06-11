import { MdTableBar } from "react-icons/md";
import { QuantityGrid } from "@/components/QuantityGrid";
import { useOrder } from "@/contexts/OrderContext";

export const TableGrid = () => {
  const { tables, selectTable } = useOrder();

  return (
    <div className="w-full flex flex-col justify-around items-center py-4 gap-10 ">
        <div className="grid grid-cols-4 gap-5">
            {tables.map((item) => (
            <div
                key={item.id}
                className="text-xl flex flex-col items-center"
                onClick={() => selectTable(item.id)}
            >
                <MdTableBar
                className="text-2xl sm:text-3xl md:text-4xl"
                style={{
                    color:
                    item.status === 'busy'
                        ? 'red'
                        : item.status === 'reserved'
                        ? 'blue'
                        : item.status === 'selected'
                        ? 'green'
                        : 'black',
                    cursor: item.status === "available" ? 'pointer' : 'initial'
                    
                }}
                />
                {item.id}
            </div>
            ))}
        </div>

        <div className="flex flex-col  gap-5 text-md md:text-2xl">
            <div className="flex items-center gap-2">
                <MdTableBar className="text-black"/>
                Vazias
            </div>
            <div className="flex items-center gap-2">
                <MdTableBar className="text-[#FF0000]"/>
                Ocupadas
            </div>
            <div className="flex items-center gap-2">
                <MdTableBar className="text-[#008000]"/>
                Selecionada
            </div>
            <div className="flex items-center gap-2">
                <MdTableBar className="text-[#4253EC]"/>
                Reservadas
            </div>
        </div>

        <div className="flex flex-row gap-4 py-4">
            <QuantityGrid title="Pessoas" />
            <QuantityGrid title="Pratos" />
        </div>

        </div>
    );
};
