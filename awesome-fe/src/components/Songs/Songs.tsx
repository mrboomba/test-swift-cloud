import * as React from 'react';
import { GetSongsQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: GetSongsQuery;
}

const className = 'Songs';

const Songs: React.FC<Props> = ({ data }) => (
  <div className={className}>
    <h3>All Songs</h3>
    <ol className={`${className}__list`}>
      {!!data.getsongs &&
        data.getsongs.map(
          (song, i) =>
            !!song && (
              <li key={i} className={`${className}__item`}>
                {song.Song} ({song.Year})
              </li>
            ),
        )}
    </ol>
  </div>
);

export default Songs;