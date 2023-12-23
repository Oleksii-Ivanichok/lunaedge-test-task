import Select from "react-select";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const MultiSelector = ({data}) => {
    return (
        <div>
            <Select
                getOptionLabel={option => option.name}
                getOptionValue={option => option.name}
                options={data}
                isMulti/>
        </div>
    )
}

export default MultiSelector