import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Product } from "../pages/Products";

export type ContextType = {
  selectedItems: SelectedItem[] | undefined;
  setSelectedItems: Dispatch<SetStateAction<SelectedItem[]>>;
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
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);

  return (
    <SelectedProductsContext.Provider
      value={{
        selectedItems,
        setSelectedItems,
      }}
    >
      {children}
    </SelectedProductsContext.Provider>
  );
};

export default SelectedProductsContextProvider;
