import { Box } from "@mui/material";
import React, { FC } from "react";
import DataRibbon from "../../components/Dashboard/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay";

const Dashboard: FC = () => {
  return (
    <Box>
      {/*Data - Ribbon*/}
      <DataRibbon />
      {/*TransactionsPerDay*/}
      <TransactionsPerDay />
    </Box>
  );
};

export default Dashboard;
