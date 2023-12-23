import {FieldValues, Path, UseFormRegister} from "react-hook-form";
import React from "react";

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
    selectedOptions: PokemonI[];
    setSelectedOption: React.Dispatch<React.SetStateAction<PokemonI[]>>;
    limit: number;
}

export interface PokemonI{
    name: string;
    url: string;
}