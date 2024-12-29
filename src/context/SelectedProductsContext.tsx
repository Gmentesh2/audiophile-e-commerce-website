import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Product } from "../pages/Products";

export type ContextType = {
  selectedProducts: SelectedItem[] | undefined;
  setSelectedProducts: Dispatch<SetStateAction<SelectedItem[]>>;
};
export const SelectedProductsContext = createContext<ContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export type SelectedItem = {
  product: Product;
  amount: number;
};

const SelectedProductsContextProvider = ({ children }: Props) => {
  const [selectedProducts, setSelectedProducts] = useState<SelectedItem[]>([]);

  return (
    <SelectedProductsContext.Provider
      value={{
        selectedProducts,
        setSelectedProducts,
      }}
    >
      {children}
    </SelectedProductsContext.Provider>
  );
};

export default SelectedProductsContextProvider;
