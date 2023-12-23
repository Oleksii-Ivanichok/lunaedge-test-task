import React, { useState } from "react";
import Select from "react-select";
import {MultiSelectorProps, PokemonI} from "../types";
import { components } from "react-select";


const MultiSelector = ({label, data }: MultiSelectorProps) => {
    const [selectedOptions, setSelectedOptions] = useState<PokemonI[]>([]);

    const handleChange = (selected:any) => {
        if(selected.length <= 4) setSelectedOptions(selected);
    };

    return (
        <div>
            <p>{label}</p>
            <Select
                components={{ Menu }}
                getOptionLabel={(option: PokemonI) => option.name}
                getOptionValue={(option: PokemonI) => option.name}
                options={data}
                isMulti
                value={selectedOptions}
                onChange={handleChange}
            />
        </div>
    );
};

export default MultiSelector;

const Menu = (props:any) => {
    const optionSelectedLength = props.getValue().length || 0;
    return (
        <components.Menu {...props}>
            {optionSelectedLength === 4 ? (
                <div className="m-3">You can select only 4 Pokemon</div>
            ) : (
                props.children
            )}
        </components.Menu>
    );
};
