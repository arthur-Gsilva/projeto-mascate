import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useOrder } from "@/contexts/OrderContext";

type Props = {
    title: string;
};

export const QuantityGrid = ({ title }: Props) => {
    const { state, dispatch } = useOrder();
    const { numberOfPeople, dishes } = state;
    const quantity = title === 'Pessoas' ? numberOfPeople : dishes;

  const increaseQuantity = () => {
      if (title === 'Pessoas') {
        dispatch({ type: 'INCREASE_PEOPLE' });
      } else if (title === 'Pratos') {
        dispatch({ type: 'INCREASE_DISHES' });
      }
  };

  const decreaseQuantity = () => {
      if (title === 'Pessoas') {
        dispatch({ type: 'DECREASE_PEOPLE' });
      } else if (title === 'Pratos') {
        dispatch({ type: 'DECREASE_DISHES' });
      }
  };

  return (
    <div className="text-center bg-slate-300 p-3 pb-7 rounded-xl">
        <h4 className="mb-4 md:text-xl">{title}</h4>
        <div className="flex items-center gap-4">
          <Button size="icon" className="size-4 md:size-6" onClick={decreaseQuantity}>
            <MinusIcon />
          </Button>
          <div className="text-sm md:text-2xl">{quantity}</div>
          <Button size="icon" className="size-4 md:size-6" onClick={increaseQuantity}>
            <PlusIcon />
          </Button>
        </div>
    </div>
  );
};
