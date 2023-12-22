import { Box, Button, Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterAction } from "../redux/actions/filters";
import useFetchApi from "../hooks/useFetchApi";

const FilterSection = () => {
  const { filters } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { execute, response, status } = useFetchApi(
    "https://fakestoreapi.com/products/categories"
  );
  useEffect(() => {
    if (response) {
      let constructedData = response.map((cat) => ({
        name: cat,
        id: cat,
        active: false,
      }));
      dispatch(setFilterAction([...constructedData]));
    }
  }, [response]);

  useEffect(() => {
    if (!filters.length) {
      execute();
    }
  }, []);

  const toggleFilter = (cat) => {
    let index = filters.map((i) => i.id).indexOf(cat.id);
    let tempArr = [
      ...filters.map((f, i) => {
        if (i === index) {
          return {
            ...f,
            active: !f.active,
          };
        } else {
          return f;
        }
      }),
    ];
    dispatch(setFilterAction(tempArr));
  };

  const removeFilter = () => {
    const tempArr = [
      ...filters.map((f) => ({
        ...f,
        active: false,
      })),
    ];
    dispatch(setFilterAction(tempArr));
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box flexGrow={1}>
        <Box display={"flex"} justifyContent={"end"}>
          {status === "loading" ? (
            <Skeleton variant="rectangular" height={35} width={500} />
          ) : (
            <>
              {filters.map((cat) => (
                <Box key={cat.id} marginRight={2}>
                  <Button
                    variant={cat.active ? "contained" : "outlined"}
                    onClick={() => toggleFilter(cat)}
                  >
                    {cat.name}
                  </Button>
                </Box>
              ))}
              <Box>
                <Button variant={"outlined"} onClick={removeFilter}>
                  Clear all
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FilterSection;
