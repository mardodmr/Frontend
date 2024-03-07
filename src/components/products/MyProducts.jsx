import { AddIcon, EditIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import ReusableModal from "../reusable-components/ReusableModal";
import DefaultLayout from "../layouts/DefaultLayout";
import UpdateProduct from "../product-forms/UpdateProduct";
import TableSkeleton from "../skeletons/TableSkeleton";
import AddProduct from "../product-forms/AddProduct";
import title from "constants/productElement";
import css from "style-sheets/table.module.css";
import useData from "api/hooks/useData";

function MyProducts() {
  const { data, error, loading } = useData("/products/myproducts");

  return (
    <DefaultLayout>
      {loading ? (
        <TableSkeleton />
      ) : (
        <div className={css.table}>
          <table>
            <thead>
              <tr>
                <th id={css.date}>DATE</th>
                <th id={css.icon}>ICON</th>
                <th id={css.item}>ITEM</th>
                <th id={css.desc}>DESCRIPTION</th>
                <th id={css.price}>PRICE</th>
                <th id={css.size}>SIZE</th>
                <th id={css.color}>COLOR</th>
                <th>
                  <ReusableModal
                    title={title}
                    children={<AddProduct />}
                    trigger={
                      <IconButton
                        variant={"gohst"}
                        aria-label="Add Product"
                        size="lg"
                        icon={<AddIcon />}
                      />
                    }
                  />
                </th>
              </tr>
            </thead>
            {!error && (
              <tbody>
                {data?.map((product) => {
                  const date = new Date(product.date);
                  const price = product.price;
                  return (
                    <tr key={product._id}>
                      <td>{date.toLocaleDateString()}</td>
                      <td>
                        <img
                          style={{ width: "40px", height: "40px" }}
                          src={product.productImg}
                        />
                      </td>
                      <td id={css.item}>
                        <div>{product.name}</div>
                      </td>
                      <td id={css.description}>
                        <div>{product.description}</div>
                      </td>
                      <td>{price.toLocaleString()} SYP</td>
                      <td>{product.size ? product.size : "-"}</td>
                      <td>{product.color ? product.color : "-"}</td>
                      <td>
                        <ReusableModal
                          title={title}
                          trigger={
                            <IconButton
                              variant={"gohst"}
                              aria-label="Add Product"
                              size="lg"
                              icon={<EditIcon />}
                            />
                          }
                          children={<UpdateProduct id={product._id} />}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      )}
    </DefaultLayout>
  );
}

export default MyProducts;
