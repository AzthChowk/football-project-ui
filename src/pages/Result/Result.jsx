import { Box } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getResults } from "../../../lib/apis/results-apis";

//mui
import { Typography } from "@mui/material";

//uuid
import { v4 as uuidv4 } from "uuid";
import ResultList from "../../components/Result/ResultList";
import PageHeader from "../../components/PageHeader";

const Result = () => {
  const [result, setResult] = useState([]);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["result-list"],
    queryFn: () => getResults(),
  });

  const id = uuidv4();

  return (
    <Box className="container" sx={{ padding: 1 }}>
      <PageHeader title="Match Results" />

      <ResultList />
    </Box>
  );
};

export default Result;
