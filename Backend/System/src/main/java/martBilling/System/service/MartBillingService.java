package martBilling.System.service;

import martBilling.System.model.Bill;
import martBilling.System.model.BillProducts;
import martBilling.System.model.Product;
import org.springframework.stereotype.Service;

import java.util.*;

@Service

public class MartBillingService {
    private Map<String , Product> inventory;
    private List<Bill> billingHistory;
    MartBillingService(){
        this.inventory= new HashMap<String,Product>();
        this.billingHistory=new ArrayList<>();
    }

    public void addProduct(Product product){
        inventory.put(product.getId(), product);
    }
    public void addProductList(List<Product> products){
        for(Product product : products){
            inventory.put(product.getId(), product);
        }
    }
    public void addTwoListByCompare(List<Product> products,List<BillProducts> billProducts){
        List<Product> products2 = new ArrayList<Product>(); 
        for(BillProducts billProduct : billProducts){
            for(Product product :products){
                if(product.getId().equals(billProduct.getId())){
                    Product product2 = new Product(product.getId(), product.getName(), product.getDescription(), product.getPrice(), product.getQuantity()-billProduct.getQuantity());
                    inventory.put(product.getId(), product2);
                }
            }
        }
    }
    public Product getProductById(String id){
        return  inventory.get(id);
    }
    public Product getProductByName(String name){
     for (Product product :inventory.values()){
         if (product.getName().equals(name)){
             return product;
         }
     }
     return  null;

    }
    public  void updateProduct(Product product){
        Product containProduct= inventory.get(product.getId());
        if (containProduct!=null){
            inventory.put(product.getId(),product);
        }
    }
    public void removeProduct(String id){
        inventory.remove(id);
    }
    public Collection<Product> getAllProduct(){
        return inventory.values();
    }
    public void CreateBill(Bill bills){
        


      
        Bill bill = new Bill(UUID.randomUUID().toString(),bills.getProductList(),bills.getTotalamount());
        billingHistory.add(bill);
    }
    public List<Bill> getAllBillingHstory(){
        return  billingHistory;
    }
    public void deleteBill(String id){
        for(Bill bill: billingHistory){
            if(bill.getId().equals(id)){
                billingHistory.remove(bill);
                break;
            }
        }
    }


}

