import Select from "react-select";
import {MultiSelectorProps, PokemonI} from "../types";
import { components } from "react-select";


const MultiSelector = ({label, data, selectedOptions, setSelectedOption, limit }: MultiSelectorProps) => {

    const addOption = (selected:any):void => {
        if(selected.length <= limit) setSelectedOption(selected);
    };

    const Menu = (props:any) => {
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
                components={{ Menu }}
                getOptionLabel={(option: PokemonI) => option.name}
                getOptionValue={(option: PokemonI) => option.name}
                options={data}
                isMulti
                value={selectedOptions}
                onChange={addOption}
            />

        </div>
    );
};

export default MultiSelector;


