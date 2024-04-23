"use client";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import React,{useState} from "react";
import { CSS } from "@dnd-kit/utilities";
import { ColumnType } from "./Container.interface";
import { v4 as uid } from 'uuid';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Input from "../Input";
import { ContainerType } from "@/ContainerType.interface";

  const Container = ({
    id,
    children,
    title,
    description,
    onAddItem= ()=>() => {
      if (!itemName) return;
      const id = `item-${uid}`;
      const container = containers.find((item) => item.id === currentContainerId);
      if (!container) return;
      container.items.push({
        id,
        title: itemName,
      });
      setContainers([...containers]);
      setItemName('');
      setShowAddItemModal(false);
    },
  }: ColumnType) => {
    const {
      attributes,
      setNodeRef,
      listeners,
      transform,
      transition,
      isDragging,
    } = useSortable({
      id: id,
      data: {
        type: "container",
      },
    });
     type Item = {
      id:number,
      description:string,
     }

    const [showAddItemModal, setShowAddItemModal] = useState<boolean>(false);
    const [items,setItems] = useState<Item[]>([]);
    const [containers, setContainers] = useState<ContainerType[]>([]);
    const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
    const [currentContainerId, setCurrentContainerId] =
      useState<UniqueIdentifier>();
    const [containerName, setContainerName] = useState('');
    const [itemName, setItemName] = useState('');
    const [showAddContainerModal, setShowAddContainerModal] = useState(false);
    

    const handleAddItem = () => {
      if (!itemName) return;
      const id = `item-${uid()}`;
      console.log(id)
      const container = containers.find((item) => item.id === currentContainerId);
      if (!container) return;
      container.items.push({
        id,
        title: itemName,
      });
      
      setShowAddItemModal(false);
    };
  

    
    return (
      <div
        {...attributes}
        ref={setNodeRef}
        style={{
          transition,
          transform: CSS.Translate.toString(transform),
        }}
        className={`w-full h-full p-4 bg-gray-100 rounded-xl flex flex-col gap-y-4 ${
          isDragging && "opacity-50"
        }`}
      >
        <div className="flex items-center justify-between" {...listeners}>
      
          <div className="flex flex-col gap-y-1 w-full">
            <h1 className="text-gray-800 text-xl ">{title}</h1>
            <hr />
          </div>
        </div>

        {children}
        <Dialog>
        <DialogTrigger>
          <span onClick={onAddItem}>Add Item</span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
          <h1 className="text-gray-800 text-3xl font-bold">Add a new Item</h1>
          </DialogHeader>
          <DialogDescription>
            <Input
              type="text"
              placeholder="Item Title"
              name="itemname"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <button onClick={handleAddItem} className='bg-slate-200 p-2 rounded-xl hover:bg-slate-300 border hover:border-black text-black mt-4'>Add Item</button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
      </div>
    );
  };

export default Container;


