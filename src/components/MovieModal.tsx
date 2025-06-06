import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Movie } from "../types"
import { getFirebaseAuth } from "@/lib/firebase"
import { Button } from "./ui/button"
import Link from "next/link"
import { TbRating18Plus } from "react-icons/tb"
import { getGenreName } from "@/lib/genres"

interface MovieModalProps {
  movie: Movie | null
  isOpen: boolean
  onClose: () => void
}

export function MovieModal({ movie, isOpen, onClose }: MovieModalProps) {
const user = getFirebaseAuth().currentUser;

  if (!movie) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent >
        {user ? (
          <>
            <DialogHeader>
              <DialogTitle>{movie.title}</DialogTitle>
              <DialogDescription>
                <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                className="rounded-lg"
              />
              
              </DialogDescription>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                 {movie.genre_ids?.map((genreId) => (
                    <Badge key={genreId} variant="secondary">
                      {getGenreName(genreId)}
                    </Badge>
                  ))}
                </div>
                <p>{movie.overview}</p>
                <div className="flex flex-col gap-2">
                  <p>Rating: {movie.vote_average}/10</p>
                  <p>Votes: {movie.vote_count}</p>
                  <p>Released: {movie.release_date ? new Date(movie.release_date).toLocaleDateString() : 'Unknown'}</p>
                  {movie.adult && (
                    <p className="flex items-center text-red-600">
                      <TbRating18Plus className="mr-2" />
                      18+ Content
                    </p>
                  )}
                  
                </div>
              </div>
            </DialogHeader>
          </>
        ) : (
          <div className="text-center py-8">
            <h3 className="text-lg font-semibold mb-4">
              Please login to view movie details
            </h3>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}