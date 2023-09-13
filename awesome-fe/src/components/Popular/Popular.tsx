import * as React from "react";
import { GetPopularSongsQuery } from "../../generated/graphql";
import "./styles.css";

interface Props {
  data: GetPopularSongsQuery;
  month: string;
}

const className = "Songs";

const Popular: React.FC<Props> = ({ data, month }) => (
  <div className={className}>
    <h3>{month}</h3>
    <ol className={`${className}__list`}>
      {!!data.getSongs &&
        data.getSongs.map(
          (song, i) =>
            !!song && (
              <li key={i} className={`${className}__item`}>
                {song.Song} ({song.Year})
                {month === "June"
                  ? song.PlaysJune
                  : month === "July"
                  ? song.PlaysJuly
                  : song.PlaysAugust}
              </li>
            ),
        )}
    </ol>
  </div>
);

export default Popular;
