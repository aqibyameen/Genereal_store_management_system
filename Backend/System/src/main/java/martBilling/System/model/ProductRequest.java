package martBilling.System.model;

import java.util.List;

 public class ProductRequest {
    private List<Product> products;
    private List<BillProducts> billProducts;

     public List<Product> getProducts() {
         return products;
     }

     public void setProducts(List<Product> products) {
         this.products = products;
     }

     public List<BillProducts> getBillProducts() {
         return billProducts;
     }

     public void setBillProducts(List<BillProducts> billProducts) {
         this.billProducts = billProducts;
     }

     public ProductRequest(List<Product> products, List<BillProducts> billProducts) {
         this.products = products;
         this.billProducts = billProducts;
     }

     public ProductRequest() {
     }
 }
