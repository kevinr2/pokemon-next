import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: "counter mi counter",
  description: "un simple counter",
};

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span> Productos en el carrito</span>
      <CartCounter />
    </div>
  );
}
