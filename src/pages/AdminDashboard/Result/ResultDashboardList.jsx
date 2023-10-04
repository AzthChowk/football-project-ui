import { Box } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";

//mui
import { Typography } from "@mui/material";

//uuid
import { v4 as uuidv4 } from "uuid";
import ResultListTable from "../../../components/Result/ResultListTable";
import { getResults } from "../../../../lib/apis/results-apis";

const ResultDashboardList = () => {
  const [result, setResult] = useState([]);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["result-list"],
    queryFn: () => getResults(),
  });

  const id = uuidv4();

  return (
    <Box sx={{ paddingRight: 2 }}>
      <Typography variant="h6" sx={{ padding: "10px", fontWeight: 700 }}>
        Match Results
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

export default ResultDashboardList;
