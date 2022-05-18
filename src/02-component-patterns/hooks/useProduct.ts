import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: UseProductArgs) => {
  const [counter, setCounter] = useState(value);
  //para saber si nuestro componente esta siendo controlado
  //y tambien para eviar renderizados innececesarios
  //el doble simbolo de admiracion transforma a un true o false
  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    //para obtener la referencia de un useref se debe utilizar el .current
    // console.log("isControlled", isControlled);
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
