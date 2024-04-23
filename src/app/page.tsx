import Image from "next/image";
import { UniqueIdentifier } from "@dnd-kit/core";
import Board from "@/components/board";

export default function Home() {
  return (
    <div className="w-[100vw] text-center">
      <h1 className="mt-10 text-2xl font-bold">KANBAN BOARD</h1>
      <Board/>

    </div>
  );
}
