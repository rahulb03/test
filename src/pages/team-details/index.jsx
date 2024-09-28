import React from "react";
import Wrapper from "@/src/layout/wrapper";
import TeamDetails from "@/src/components/team-details";
import SEO from "@/src/common/seo";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Team Details"} />
      <TeamDetails />
    </Wrapper>
  );
};

export default index;
