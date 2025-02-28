import { Capacity } from './capacity.model';

export interface Unicorn {
    id: number;
    name: string;
    birthyear: number;
    weight: number;
    photo: string;
    hobbies: string[];
    capacities: number[];
    capacitiesObj: Capacity[];
}
