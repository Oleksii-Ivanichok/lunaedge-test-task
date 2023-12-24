import {Controller, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import CustomInput from "./UI/CustomInput";
import {IPokemonForm, PokemonI} from "../types";
import MultiSelector from "./MultiSelector";
import {useEffect, useState} from "react";
import axios from "axios";

const PokemonForm = () => {
    const {
        register,
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<IPokemonForm>();

    const [pokemonsList, setPokemonsList] = useState()
    const [selectedPokemons, setSelectedPokemons] = useState<PokemonI[]>([]);
    const [pokemonError, setPokemonError] = useState(false);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20").then((response) => {
            setPokemonsList(response.data.results);
        });
    }, [])

    const onSubmit: SubmitHandler<IPokemonForm> = (data) => {
        console.log(data);
        if (data.pokemons.length < 4) {
            setPokemonError(true);
        }
    };

    const error: SubmitErrorHandler<IPokemonForm> = (data) => {
        setPokemonError(true);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit, error)}>
            <CustomInput
                label="First name"
                name="firstName"
                register={register}
                required
                pattern={/^[a-zA-Z]{2,12}$/}
                error={errors.firstName}
            />
            <CustomInput
                label="Last name"
                name="lastName"
                register={register}
                required
                pattern={/^[a-zA-Z]{2,12}$/}
                error={errors.lastName}
            />
            {
                pokemonsList
                    ?
                    <Controller
                        name="pokemons"
                        rules={{required: true}}
                        render={({field}) =>
                            <MultiSelector
                                field={field}
                                label="Select your team"
                                data={pokemonsList}
                                error={pokemonError}
                                limit={4}
                            />
                        }
                        control={control}

                    />

                    : ''
            }
            <button type="submit">Submit</button>
        </form>
    );
};

export default PokemonForm;