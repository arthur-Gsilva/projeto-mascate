import { MdOutlineTableBar } from "react-icons/md";
import { QuantityGrid } from "@/components/QuantityGrid";
import { useOrder } from "@/contexts/OrderContext";

export const TableGrid = () => {
  const { tables, selectTable } = useOrder();
  const halfIndex = Math.ceil(tables.length / 2);

  return (
    <div className="w-full flex flex-col justify-around items-center py-4 sm:flex-row">
        <div className="grid grid-cols-3 gap-3 md:grid-cols-2">
            {tables.slice(0, halfIndex).map((item) => (
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
                        : item.status === 'selected'
                        ? 'green'
                        : 'white',
                    cursor: item.status !== 'busy' ? 'pointer' : 'initial'
                }}
                />
                {item.id}
            </div>
            ))}
        </div>

        <div className="flex flex-col gap-4 py-4 ">
            <QuantityGrid title="Pessoas" />
            <QuantityGrid title="Pratos" />
        </div>

        <div className="grid grid-cols-3 gap-3 md:grid-cols-2">
            {tables.slice(halfIndex).map((item) => (
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
                        : item.status === 'selected'
                        ? 'green'
                        : 'white',
                    cursor: item.status !== 'busy' ? 'pointer' : 'initial'
                }}
                />
                {item.id}
            </div>
            ))}
        </div>
        </div>
    );
};
