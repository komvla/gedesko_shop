import React, { useState, useEffect } from "react";
import { getAllProducts, getProductsByCategory } from "../../api";
import { ProductInfo } from "../../models/product.models";
import {
  Container,
  Row,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
} from "reactstrap";
import LoaderBox from "../LoaderBox/LoaderBox";
import ErrorBox from "../ErrorBox/ErrorBox";
import { useSelector } from "react-redux";
import styles from './ProductsTable.module.scss'

const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  // table data
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState("");
  const [filterDirection, setFilterDirection] = useState<"asc" | "desc">("asc");

  const PAGE_SIZE = 5;
  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const selectedCategory = useSelector(
    (state: { selectedCategory: string }) => state.selectedCategory
  );

  useEffect(() => {
    fetchProducts(selectedCategory ? selectedCategory : "all");
  }, []);

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  const fetchProducts = async (category: String) => {
    setIsLoading(true);
    try {
      await fetch(
        category === "all"
          ? getAllProducts()
          : getProductsByCategory(selectedCategory)
      )
        .then((res) => res.json())
        .then((json) => setProducts(json));
    } catch (error) {
      setError("Error fetching products");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSort = (type: string) => {
    if (type === filterType) {
      setFilterDirection(filterDirection === "asc" ? "desc" : "asc");
    } else {
      setFilterType(type);
      setFilterDirection("asc");
    }
  };

  const sortProducts = () => [...products].sort((a, b) => {
    if (filterType === "title") {
      if (a.title < b.title) return filterDirection === "asc" ? -1 : 1;
      if (a.title > b.title) return filterDirection === "asc" ? 1 : -1;
    } else if (filterType === "price") {
      if (a.price < b.price) return filterDirection === "asc" ? -1 : 1;
      if (a.price > b.price) return filterDirection === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <Container className={styles.wrapper}>
      {isLoading ? (
        <LoaderBox
          text={
            selectedCategory !== "all"
              ? `Loading ${selectedCategory}`
              : "Loading products..."
          }
        />
      ) : error ? (
        <ErrorBox text={error} />
      ) : (
        <>
          <Row>
            {products && (
              <>
                <Table className={styles.table}>
                  <thead  className={styles.thead}>
                    <tr>
                      <th  className={styles.thTitle} onClick={() => handleSort("title")}>
                        Title
                          <span>
                            {filterDirection === "desc" ? "↓" : "↑" }
                          </span>
                      </th>
                      <th  className={styles.thCategory}>Category</th>
                      <th  className={styles.thPrice} onClick={() => handleSort("price")}>
                        Price
                          <span>
                            {filterDirection === "desc" ? "↓" : "↑"}
                          </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody  className={styles.tbody}>
                    {sortProducts()
                      .slice(startIndex, endIndex)
                      .map((product, index) => (
                        <tr key={startIndex + index}>
                          <td  className={styles.tdTitle}>{product.title}</td>
                          <td  className={styles.tdCategory}>{product.category}</td>
                          <td  className={styles.tdPrice}>{product.price.toFixed(2)}</td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem disabled={currentPage === 1}>
                    <PaginationLink
                      previous
                      onClick={() => handlePageChange(currentPage - 1)}
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem
                      active={index + 1 === currentPage}
                      key={index}
                    >
                      <PaginationLink
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem disabled={currentPage === totalPages}>
                    <PaginationLink
                      next
                      onClick={() => handlePageChange(currentPage + 1)}
                    />
                  </PaginationItem>
                </Pagination>
              </>
            )}
          </Row>
        </>
      )}
    </Container>
  );
};

export default ProductTable;
