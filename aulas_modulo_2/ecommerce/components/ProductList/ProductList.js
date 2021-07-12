import { useQuery } from "react-query"
import styled from "styled-components"
import { fetchData } from "../../Api"
import ProductItem from "../ProductItem/ProductItem"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 300px;
`

const Item = styled.span`
  background-color: blanchedalmond;
  align-items: center;
  display: flex;
  flex-direction: column;
`

export default function ProductList() {
  const { isLoading, data } = useQuery("productList", () => fetchData())
  if (isLoading | !data) return <div>Carregando</div>
  return (
    <Container>
      <>
        {data.map((item) => (
          <Item>
            <ProductItem
              id={item.ProductId}
              name={item.Name}
              price={item.Price}
              thumbnail={item.ThumbnailURL}
              lastPrice={item["Retail Price"]}
            />
          </Item>
        ))}
      </>
    </Container>
  )
}
