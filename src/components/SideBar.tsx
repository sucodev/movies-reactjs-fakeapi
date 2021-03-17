import { Button } from '../components/Button';
interface GenresPropsSidebar {
  allGenres: Array<{
    id: number;
    title: string;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  }>;
  selectedGenreId: any;
  handleClickButton: (id: number) => void;
}


export function SideBar({ allGenres, selectedGenreId, handleClickButton }: GenresPropsSidebar) {



  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {allGenres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}