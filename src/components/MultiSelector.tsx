import Select from "react-select";
import {MultiSelectorProps, PokemonI} from "../types";
import { components } from "react-select";


const MultiSelector = ({label, data, selectedOptions, onChange }: MultiSelectorProps) => {



    return (
        <div>
            <p className="font-semibold">{label}</p>
            <Select
                components={{ Menu }}
                getOptionLabel={(option: PokemonI) => option.name}
                getOptionValue={(option: PokemonI) => option.name}
                options={data}
                isMulti
                value={selectedOptions}
                onChange={onChange}
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
