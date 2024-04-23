import { UniqueIdentifier } from "@dnd-kit/core";

export interface ColumnType {
    id: UniqueIdentifier;
    children: React.ReactNode;
    title?: string;
    description?: string;
    onAddItem?: () => void;
  }