package martBilling.System.model;


import java.util.List;


public class Bill{
    private  String id;
    private List<BillProducts> productList;
    private double totalamount;

    public Bill() {
    }

    public Bill(String id, List<BillProducts> productList, double totalamount) {
        this.id = id;
        this.productList = productList;
        this.totalamount = totalamount;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<BillProducts> getProductList() {
        return productList;
    }

    public void setProductList(List<BillProducts> productList) {
        this.productList = productList;
    }

    public double getTotalamount() {
        return totalamount;
    }

    public void setTotalamount(double totalamount) {
        this.totalamount = totalamount;
    }
}