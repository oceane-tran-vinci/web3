import { Context as OpinionContext } from "../../contexts/opinionContext";
import { useContext } from "react";
import Opinion from "./Opinion";

const ListOpinions = () => {
  const { sortedOpinions } = useContext(OpinionContext);

  return sortedOpinions.map((opinion) => (
    <Opinion key={opinion.id} {...{ opinion }} />
  ));
};

export default ListOpinions;