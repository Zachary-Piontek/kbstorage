export type StorageType = {
    id: string;
    name: string;
    unit_amount: number | null;
    image: string;
    description: string | null;
    quantity?: number | 1;
};