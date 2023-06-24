type Params = {
    id: string;
}

type SearchParams = {
    id: string;
    name: string;
    image: string;
    description: string | null;
    unit_amount: number | null;
}

export type SearchParamsTypes = {
    params: Params
    searchParams: SearchParams
}