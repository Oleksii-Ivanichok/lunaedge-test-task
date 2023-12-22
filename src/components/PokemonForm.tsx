import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import CustomInput from "./UI/CustomInput";
import {IPokemonForm} from "../types";

const PokemonForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IPokemonForm>();

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
                label="lastName"
                name="lastName"
                register={register}
                required
                pattern={/^[a-zA-Z]{2,12}$/}
                error={errors.lastName}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default PokemonForm;