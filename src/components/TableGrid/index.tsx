import { MdOutlineTableBar } from "react-icons/md";
import { QuantityGrid } from "@/components/QuantityGrid";
import { useOrder } from "@/contexts/OrderContext";

export const TableGrid = () => {
  const { tables, selectTable } = useOrder();
  const halfIndex = Math.ceil(tables.length / 2);

  return (
    <div className="w-full flex flex-col justify-around items-center py-4 gap-10 ">
        <div className="grid grid-cols-4 gap-5">
            {tables.map((item) => (
            <div
                key={item.id}
                className="text-xl flex flex-col items-center"
                onClick={() => selectTable(item.id)}
            >
                <MdOutlineTableBar
                className="text-2xl sm:text-3xl md:text-4xl"
                style={{
                    color:
                    item.status === 'busy'
                        ? 'red'
                        : item.status === 'reserved'
                        ? 'blue'
                        : item.status === 'selected'
                        ? 'green'
                        : 'white',
                    // cursor: item.status !== 'busy' ? 'pointer' : 'initial',
                    cursor: item.status === "available" ? 'pointer' : 'initial'
                    
                }}
                />
                {item.id}
            </div>
            ))}
        </div>

        <div className="flex flex-col  gap-5 text-md md:text-xl">
            <div className="flex items-center gap-2">
                <MdOutlineTableBar />
                Vazias
            </div>
            <div className="flex items-center gap-2">
                <MdOutlineTableBar className="text-[#FF0000]"/>
                Ocupadas
            </div>
            <div className="flex items-center gap-2">
                <MdOutlineTableBar className="text-[#008000]"/>
                Selecionada
            </div>
            <div className="flex items-center gap-2">
                <MdOutlineTableBar className="text-[#4253EC]"/>
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
