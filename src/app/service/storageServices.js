export const saveLastInterestProduct = (productName) => {
    // API LocalStorage / SessionStorage
    sessionStorage.setItem("lastProduct", productName)
}