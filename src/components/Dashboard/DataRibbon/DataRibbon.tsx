"use client";
import React from "react";
import { Grid } from "@mui/material";
import DataCard from "@/components/Dashboard/DataCard";
import scss from "./DataRibbon.module.scss";

const DataRibbon = () => {
  return (
    <Grid container gap={2} className={scss.dataRibbon}>
      <Grid>
        <DataCard
          title={"Total Sales"}
          value={"462"}
          description={
            "The totlals of all Datasoft products in the current financial year"
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Total Sales"}
          value={"$25,787,44"}
          description={
            "The totlals of all Datasoft products in the current financial year"
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Avg. Order Value"}
          value={"$58,345"}
          description={
            "The average order value for all sales this current financial year"
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Total Sales"}
          value={"0.61%"}
          description={"How many pitches become sales"}
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;
