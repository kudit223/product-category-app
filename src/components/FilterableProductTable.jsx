import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"
export default function FilterableProductTable({products}){
    return (
        <div style={{backgroundColor:"white",width:'30%',padding:'20px'}}>
            <SearchBar/>
            <ProductTable products={products}/>
        </div>
    )
}