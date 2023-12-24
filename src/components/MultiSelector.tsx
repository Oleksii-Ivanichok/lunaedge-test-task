import Select from "react-select";
import {MultiSelectorProps, PokemonI} from "../types";
import {components} from "react-select";
import {useEffect, useState} from "react";

type Props = {
    variant: 'green' | 'yellow' | 'red'
}

const MultiSelector = ({field, label, data, error, limit}: MultiSelectorProps) => {
    const [pokemonError, setPokemonError] = useState(true)
    useEffect(()=>{
        if(field.value?.length===limit) {
            setPokemonError(false);
        } else {
            setPokemonError(true);
        }

    }, [error, field])
    const Menu = (props: any) => {
        const optionSelectedLength = props.getValue().length || 0;
        return (
            <components.Menu {...props}>
                {optionSelectedLength === limit ? (
                    <div className="m-3">You can select only 4 Pokemon</div>
                ) : (
                    props.children
                )}
            </components.Menu>
        );
    };

    return (
        <div className="w-[400px] mt-2">
            <p className="font-semibold">{label}</p>
            <Select
                {...field}
                components={{Menu}}
                getOptionLabel={(option: PokemonI) => option.name}
                getOptionValue={(option: PokemonI) => option.name}
                options={data}
                isMulti
                onKeyDown={e => {
                    if (e.key === "Enter") e.preventDefault();
                }}
            />
            <p className={`${error && pokemonError?'text-red': ''}`}>You must select 4 Pokemons</p>

        </div>
    );
};

export default MultiSelector;


