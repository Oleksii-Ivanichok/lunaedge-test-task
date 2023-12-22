import { useState } from 'react'
import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {IPokemonForm} from "./types";
import PokemonForm from "./components/PokemonForm";

function App() {

  return (
    <main>
        <PokemonForm/>
    </main>
  )
}

export default App
