import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card"

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Card className="p-0 border rounded shadow hover:shadow-lg transition">
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
  );
}
