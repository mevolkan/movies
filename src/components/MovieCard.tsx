import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card"
import { Movie } from "../types"
import { useState } from "react"
import { MovieModal } from "./MovieModal"

interface MovieCardProps {
  movie: Movie
}


export default function MovieCard({ movie }: { movie: Movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
    <Card className="p-0 border rounded shadow hover:shadow-lg transition"  onClick={() => setIsModalOpen(true)}>
      <img
        className="w-full h-auto"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
      <h3 className="mt-2 text-lg font-semibold">{movie.title}</h3>
      <p className="text-sm text-gray-600">{movie.overview?.slice(0, 100)}...</p>
      </CardContent>
    </Card>
    <MovieModal
        movie={movie}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
    
  );
}
