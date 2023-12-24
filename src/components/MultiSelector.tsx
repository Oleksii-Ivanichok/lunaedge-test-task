import Select from "react-select";
import {MultiSelectorProps, PokemonI} from "../types";
import {components} from "react-select";


const MultiSelector = ({field, label, data, limit}: MultiSelectorProps) => {


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
        <div>
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
            <p className="">You must select 4 Pokemons</p>

        </div>
    );
};

export default MultiSelector;


