import { useState, FormEvent, Dispatch } from "react"
import { isQueryValid } from "./validationsRules";
import { searchPexelsApi } from "../../services/pexels.service";
import { Image } from "../../types/image";


interface SearchBarProps {
  setImages: Dispatch<Image[]>
}


export default function SearchBar({ setImages }: SearchBarProps) {

  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isQueryValid(query)) {
      const data = await searchPexelsApi(query)
      setImages(data.photos)
    } else {
      setError('La query no es valida')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Buscar imagenes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button type="submit">Buscar</button>
    </form>
  )
}
