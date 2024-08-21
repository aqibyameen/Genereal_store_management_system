package martBilling.System.controller;

import martBilling.System.model.Bill;
import martBilling.System.model.Product;
import martBilling.System.model.ProductRequest;
import martBilling.System.service.MartBillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")

@RequestMapping()

public class MartBillingController {
    @Autowired
    private MartBillingService martBillingService;
    @PostMapping("/add-products")
    public  void addProduct(@RequestBody Product product){
        martBillingService.addProduct(product);
    }
    @PostMapping("/add-products-list")
    public  void addProductList(@RequestBody List<Product> product){
        martBillingService.addProductList(product);
    }
    @PostMapping("/add-two-list-by-compare")
    public  void addTwoListByCompare(@RequestBody ProductRequest productRequest){
       martBillingService.addTwoListByCompare(productRequest.getProducts(), productRequest.getBillProducts());
    }
    @GetMapping("/products")
    public Collection<Product> getAllProduct(){
        return martBillingService.getAllProduct();
    }

    @GetMapping("/product/{id}")
    public Product getProductById(@PathVariable String id){
        return martBillingService.getProductById(id);
    }
    @DeleteMapping("/delete/{id}")
    public void  deleteProductById(@PathVariable String id){
        martBillingService.removeProduct(id);
    }
    @PutMapping("/update")
    public void updateProduct(@RequestBody Product product){
        martBillingService.updateProduct( product);
    }
    @PostMapping("/create-bill")
    public  void createBill(@RequestBody Bill bill ){
        martBillingService.CreateBill(bill);
    }
    @GetMapping("/search-by-name/{name}")
    public Product SearchByName(@PathVariable String name  ){
    return martBillingService.getProductByName(name);

    }
    @GetMapping("/get-bills")
    public List <Bill> getAllBill(){
        return martBillingService.getAllBillingHstory();
    }
    @DeleteMapping("/delete-bill/{id}")
    public void deleteBill(@PathVariable String id){
        martBillingService.deleteBill(id);
    }
}
