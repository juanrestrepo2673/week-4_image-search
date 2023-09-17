import { Image } from "../../types/image"


interface ImagesGridProps {
  images: Image[] | null;
}

export default function ImagesGrid({ images }: ImagesGridProps) {
  console.count('images grid')


  if (images?.length) {
    return (
      <>
        {images.map(({ id, alt }) => <p key={id}>{alt}</p>)}
      </>
    )
  }

  return (
    <p> No hay imagenes que mostrar</p>
  )
}
