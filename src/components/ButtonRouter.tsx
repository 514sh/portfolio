"use client";

import { useRouter } from "next/navigation";

interface ButtonRouterProps {
  route: string;
  name: string;
}

const ButtonRouter = (props: ButtonRouterProps) => {
  const router = useRouter();
  return (
    <button
      className="p-8 m-8 text-3xl bg-red-600 text-stone-200 rounded-lg hover:bg-red-800 duration-300 ease-in-out"
      onClick={() => router.push(props.route)}
    >
      {props.name}
    </button>
  );
};

export default ButtonRouter;
