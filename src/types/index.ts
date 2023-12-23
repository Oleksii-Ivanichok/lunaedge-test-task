import {FieldValues, Path, UseFormRegister} from "react-hook-form";

export interface IPokemonForm {
    firstName: string;
    lastName: string;
}

export interface CustomInputProps {
    label: string;
    name: Path<IPokemonForm>;
    register: UseFormRegister<IPokemonForm>;
    required?: boolean;
    pattern?: RegExp;
    error? : any;
}

export interface MultiSelectorProps {
    label: string;
    data: PokemonI[];
}

export interface PokemonI{
    name: string;
    url: string;
}