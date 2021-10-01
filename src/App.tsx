import { useState } from 'react';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import './styles/content.scss';
import './styles/global.scss';
import './styles/sidebar.scss';


export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


export function App() {

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar changeGenreId={setSelectedGenreId} selectedGenreId={selectedGenreId} />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}