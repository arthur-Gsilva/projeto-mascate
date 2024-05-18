// components/QuantityGrid.tsx
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
    if (title === 'Pessoas') {
      setNumberOfPeople(numberOfPeople + 1);
    } else {
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
    <div className="text-center bg-gray-500 p-3 pb-7 rounded-md">
      <h4 className="mb-4">{title}</h4>
      <div className="flex items-center gap-4">
        <Button size="icon" className="size-4 md:size-6" onClick={decreaseQuantity}>
          <MinusIcon />
        </Button>
        <div className="text-sm md:text-xl">{quantity}</div>
        <Button size="icon" className="size-4 md:size-6" onClick={increaseQuantity}>
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};
