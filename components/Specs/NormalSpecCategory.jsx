import categories from "../../constant/categories";
import { SpecCategoryBox, SpecGroup } from "./";

const NormalSpecCategory = ({ heading, groups, icon }) => {
  // console.log(category);
  // const props=categories
  return (
    <SpecCategoryBox icon={icon} heading={heading}>
      {Object.entries(groups).map(([group, specs]) => (
        <SpecGroup key={group} group={group} specs={specs} />
      ))}
    </SpecCategoryBox>
  );
};

export default NormalSpecCategory;
