import React from "react";
import ContentBlock from "../../components/InfoBlock";
import NavBar from "../../components/NavBar";
import SortForm from "../../components/SortForm";

function NewsPage() {
  return <>
   <NavBar/>
   <SortForm/>
  <ContentBlock />
  </>
}

export default NewsPage;
