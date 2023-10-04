import { Box } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getResults } from "../../../lib/apis/results-apis";

//mui
import { Typography } from "@mui/material";

//uuid
import { v4 as uuidv4 } from "uuid";
import ResultListTable from "../../components/Result/ResultListTable";

const Result = () => {
  const [result, setResult] = useState([]);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["result-list"],
    queryFn: () => getResults(),
  });

  const id = uuidv4();

  return (
    <Box className="container" sx={{ padding: 1 }}>
      <Typography variant="h4" sx={{ fontWeight: 900, padding: "20px 0" }}>
        Results
      </Typography>
      <ResultListTable />

      {/* {data?.data?.map((item, index) => {
        return (
          <Box key={index}>
            <ResultCard {...item} />
          </Box>
        );
      })} */}
    </Box>
  );
};

export default Result;
