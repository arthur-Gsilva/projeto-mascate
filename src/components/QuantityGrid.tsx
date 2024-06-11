import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useOrder } from "@/contexts/OrderContext";

type Props = {
  title: string;
};

export const QuantityGrid = ({ title }: Props) => {
  const { numberOfPeople, dishes, setNumberOfPeople, setDishes } = useOrder();
  const quantity = title === 'Pessoas' ? numberOfPeople : dishes;

  const increaseQuantity = () => {
    if (title === 'Pessoas' && numberOfPeople < 6) {
      setNumberOfPeople(numberOfPeople + 1);
    } else if(title === 'Pratos' && dishes < 10) {
      setDishes(dishes + 1);
    }
  };

  const decreaseQuantity = () => {
    if (title === 'Pessoas' && numberOfPeople > 0) {
      setNumberOfPeople(numberOfPeople - 1);
    } else if (title === 'Pratos' && dishes > 0) {
      setDishes(dishes - 1);
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
