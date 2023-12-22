import {CustomInputProps} from "../../types";

const CustomInput = ({ label, name, register, required, pattern, error }: CustomInputProps) => {

    return (
        <div>
            <label className="block font-bold">{label}</label>
            <input
                className={`border-2 rounded-lg hover:border-violet focus:border-violet outline-none
                ${error ? 'border-red' : ''} ?`}
                {...register(name, { required, pattern: pattern})} placeholder={label}
            />
            <p className={`${error ? 'text-red' : ''}`}>
                {error?.type === 'pattern' ? 'Only a-z and A-Z, 2-12 characters' :
                    'This field is required'}
            </p>
        </div>
    );
}
export default CustomInput