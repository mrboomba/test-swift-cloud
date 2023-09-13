import * as React from "react";
import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import SongsContainer from "../Songs";
import FilterSongsContainer from "../Filter";
import PopularContainer from "../Popular";
import ExampleContainer from "../Example";

const Menus = () => {
  const [menu, setMenu] = React.useState("all");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newMenu: string,
  ) => {
    setMenu(newMenu);
  };

  const children = [
    <ToggleButton value="all" key="all">
      All Songs
    </ToggleButton>,
    <ToggleButton value="filter" key="filter">
      Filter Song
    </ToggleButton>,
    <ToggleButton value="popular" key="popular">
      Most Popular Song
    </ToggleButton>,
    <ToggleButton value="example" key="example">
      Example Query
    </ToggleButton>,
  ];

  const control = {
    value: menu,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <>
      <Stack spacing={2} alignItems="center">
        <ToggleButtonGroup size="large" {...control} aria-label="Large sizes">
          {children}
        </ToggleButtonGroup>
      </Stack>
      <center>
        {menu === "all" ? <SongsContainer /> : <></>}
        {menu === "filter" ? <FilterSongsContainer /> : <></>}
        {menu === "popular" ? <PopularContainer /> : <></>}
        {menu === "example" ? <ExampleContainer /> : <></>}
      </center>
    </>
  );
};

export default Menus;
