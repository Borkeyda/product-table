import productList from "../ProductsAPI";
//import productList from "../ProductsAPI";
const sportsList = []
const electronicsList = []
console.log("product list:",productList)
//function filteredByCategories() {
    let product
    for(let index=0;index<productList.length;index++)
    {
        product=productList[index]
        if (product.category === 'sports') {
            sportsList.push(product)
        }
        else {
            electronicsList.push(product)
        }
    }

    // productList.map((product) => {
    //     console.log("producto:", product)
    //     if (product.category === 'sports') {
    //         sportsList.push(product)
    //     }
    //     else {
    //         electronicsList.push(product)
    //     }
    // })
//}

export {
    sportsList,
    electronicsList
}