import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import CustomInput from "./UI/CustomInput";
import {IPokemonForm} from "../types";
import MultiSelector from "./MultiSelector";
import {useEffect, useState} from "react";
import axios from "axios";

const PokemonForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IPokemonForm>();

    const [pokemonsList, setPokemonsList] = useState()

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20").then((response) => {
            setPokemonsList(response.data.results);
        });
    }, [])

    const onSubmit: SubmitHandler<IPokemonForm> = (data) => {
        console.log(data);
    };

    const error: SubmitErrorHandler<IPokemonForm> = (data) => {
        console.log(data);
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
                    <MultiSelector
                        label="Select 4 Pokemons"
                        data={pokemonsList}
                    />
                    : ''
            }
            <button type="submit">Submit</button>
        </form>
    );
};

export default PokemonForm;