import { Box } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getResults } from "../../../lib/apis/results-apis";

//mui
import { Typography } from "@mui/material";

//uuid
import { v4 as uuidv4 } from "uuid";
import ResultCard from "../../components/Result/ResultCard";

const Result = () => {
  const [result, setResult] = useState([]);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["result-list"],
    queryFn: () => getResults(),
  });

  const id = uuidv4();

  return (
    <Box className="container">
      <Typography variant="h2" sx={{ margin: 2 }}>
        Results
      </Typography>

      {data?.data?.map((item, index) => {
        return (
          <Box key={index}>
            <ResultCard {...item} />
          </Box>
        );
      })}
    </Box>
  );
};

export default Result;
