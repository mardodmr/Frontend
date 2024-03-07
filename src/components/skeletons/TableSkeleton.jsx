import { AddIcon } from "@chakra-ui/icons";
import { IconButton, SkeletonText } from "@chakra-ui/react";
import css from "style-sheets/table.module.css";

function TableSkeleton() {
  return (
    <>
      <div className={css.table}>
        <table style={{ width: "1100px" }}>
          <thead>
            <tr>
              <th>DATE</th>
              <th>ICON</th>
              <th>ITEM</th>
              <th>DESCRIPTION</th>
              <th>PRICE</th>
              <th>SIZE</th>
              <th>COLOR</th>
              <th>
                <IconButton
                  variant={"gohst"}
                  aria-label="Add Product"
                  size="lg"
                  icon={<AddIcon />}
                />
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div style={{ margin: "auto", width: "1100px" }}>
        <SkeletonText mt={4} noOfLines={10} spacing={6} />
      </div>
    </>
  );
}

export default TableSkeleton;
