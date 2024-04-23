import { UniqueIdentifier } from "@dnd-kit/core";

export interface ContainerType {
    id: UniqueIdentifier;
    title: string;
    items: {
      id: UniqueIdentifier;
      title: string;
    }[];
}