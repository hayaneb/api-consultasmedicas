import { IsNotEmpty, IsNumber } from 'class-validator';

export class AgendaDTo {
    @IsNotEmpty()
    @IsNumber()
    id!: number;
}