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
  console.log(data);
  const id = uuidv4();
  console.log(id);

  //   ==== using useEffect method ======
  //   const fetchResult = async () => {
  //     const resultList = await $axios.get("/results");
  //     setResult(resultList);
  //     console.log(result);
  //   };
  //   useEffect(() => {
  //     fetchResult();
  //   }, []);

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
