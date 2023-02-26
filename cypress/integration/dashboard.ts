import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"

let loginPage = new LoginPage();
let dashboardPage = new DashboardPage();
const URL = 'https://www.saucedemo.com/';

it('Test add 2 products to cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce');
    loginPage.assertLogin();

    dashboardPage.addProduct();
    dashboardPage.assertProduct();
})

it('Test sort product list by price low to high', () => {
    loginPage.login(URL,'standard_user','secret_sauce');
    loginPage.assertLogin();

    dashboardPage.sortByPrice();
    dashboardPage.assertProductList(); 
})
