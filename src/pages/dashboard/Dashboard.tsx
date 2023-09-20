"use client";
import { Box, Grid } from "@mui/material";
import React, { FC } from "react";
import DataRibbon from "../../components/Dashboard/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow";

const Dashboard: FC = () => {
  return (
    <Box>
      <Grid container gap={4} marginTop={2}>
        <DataRibbon />
        <TransactionsPerDay />
      </Grid>
      <TransactionBottomRow />
    </Box>
  );
};

export default Dashboard;
