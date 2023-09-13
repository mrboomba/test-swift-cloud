import * as React from "react";
import { useGetSongsWithFilterLazyQuery } from "../../generated/graphql";
import Songs from "../Songs/Songs";
import { Button, MenuItem, Select, TextField } from "@mui/material";

const FilterSongsContainer = () => {
  const [songName, setSongName] = React.useState("");
  const [album, setAlbum] = React.useState("");
  const [year, setYear] = React.useState("all");
  const [search, { data, error, loading }] = useGetSongsWithFilterLazyQuery();
  React.useEffect(() => {
    search({ variables: { where: {} } });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Can't find matched song</div>;
  }

  return (
    <div style={{ padding: "5px" }}>
      <div>
        <TextField
          id="outlined-search"
          label="Song Name"
          type="search"
          onChange={(e) => setSongName(e.target.value)}
        />
        <TextField
          id="outlined-search2"
          label="Album"
          type="search"
          onChange={(e) => {
            setAlbum(e.target.value);
          }}
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Age"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={2007}>2007</MenuItem>
          <MenuItem value={2008}>2008</MenuItem>
          <MenuItem value={2012}>2012</MenuItem>
          <MenuItem value={2013}>2013</MenuItem>
          <MenuItem value={2014}>2014</MenuItem>
          <MenuItem value={2015}>2015</MenuItem>
          <MenuItem value={2016}>2016</MenuItem>
          <MenuItem value={2015}>2017</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
        </Select>
      </div>
      <Button
        onClick={() =>
          search({
            variables: {
              where: {
                Album: album,
                Song: songName,
                Year: Number.parseInt(year) ? Number.parseInt(year) : undefined,
              },
            },
          })
        }
      >
        {" "}
        Search{" "}
      </Button>
      <Songs data={data} />
    </div>
  );
};

export default FilterSongsContainer;
