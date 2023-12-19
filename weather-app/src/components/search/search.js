import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

export default function Search({onSearchChange}){

    const[search, setSearch] = useState(null);

    function handleOnChange(searchData){
        setSearch(searchData);
        onSearchChange(searchData);
    }

    async function loadOptions(inputValues) {
        try {
            const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValues}`, geoApiOptions);
            const jsonData = await response.json();
            const options = jsonData.data.map(city => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name} ${city.countryCode}`,
                };
            });
    
            return { options }; // Wrap the options array in an object with the 'options' property
        } catch (error) {
            console.error(error);
            return { options: [] }; // Return an empty array in case of an error
        }
    }

    return(
        
        <AsyncPaginate 
            placeholder="Search for City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}