import { Box, Button, Skeleton, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterAction } from "../redux/actions/filters";

const FilterSection = () => {
  const { filters } = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchAllCategories = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products/categories");
      let constructedData = res.data.map((cat) => ({
        name: cat,
        id: cat,
        active: false,
      }));
      dispatch(setFilterAction([...constructedData]));
    } catch (err) {
      dispatch(setFilterAction([]));
    }
  };
  useEffect(() => {
    if (!filters) {
      fetchAllCategories();
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
          {filters ? (
            <>
              {filters.map((cat, index) => (
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
                  All
                </Button>
              </Box>
            </>
          ) : (
            <Skeleton variant="rectangular" height={35} width={500} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FilterSection;
