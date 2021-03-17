import { MovieCard } from '../components/MovieCard';

interface genreProps {
  genreTitle: string;
  genreMovies: Array<{
    Title: string;
    Poster: string;
    Runtime: string;
    Ratings: Array<{
      Source?: string;
      Value: string;
    }>;
  }>;


}

export function Content({ genreTitle, genreMovies }: genreProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {genreTitle}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {genreMovies.map(movie => (
            <MovieCard key={movie.Title} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}