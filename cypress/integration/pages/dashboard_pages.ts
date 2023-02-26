export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack';
    product1 = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]';
    product2 = '[data-test="add-to-cart-sauce-labs-bike-light"]';
    filterButton = '[data-test="product_sort_container"]';
    filterLoHi = '[value="lohi"]';
    productCart = '.cart_list';
    productLowestPrice = ':nth-child(1) > .inventory_item_description';

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    addProduct(){
        cy.get(this.product1).click();
        cy.get(this.product2).click();
        cy.get('.shopping_cart_link').click();
    }

    sortByPrice(){
        cy.get(this.filterButton).select('Price (low to high)');
        //cy.get(this.filterLoHi).click();
    }

    assertProduct(){
        cy.get(this.productCart).should('contain' , 'Sauce Labs Bike Light');
        cy.get(this.productCart).should('contain' , 'Sauce Labs Fleece Jacket');
    }

    assertProductList(){
        cy.get(this.productLowestPrice).should('contain' , 'Sauce Labs Onesie')
    }
}