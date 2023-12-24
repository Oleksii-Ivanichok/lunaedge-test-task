import { useEffect, useState } from "react";
import axios from "axios";
import {PokemonSpriteProps} from "../types";

const PokemonSprite = ({ name, url }:PokemonSpriteProps) => {
    const [fetchedSprite, setFetchedSprite] = useState();
    useEffect(() => {
        axios.get(url).then((response) => {
            setFetchedSprite(response.data.sprites.front_default);
        });
    }, []);

    return (
        <div className="text-center">
            {name}
            {fetchedSprite ? (
                <img src={fetchedSprite} alt="sprite" />
            ) : (
                ''
            )}
        </div>
    );
};

export default PokemonSprite;
