package com.example.demo.Controller;

import java.util.Date;
import java.util.Map;
import java.util.stream.Collectors;

import com.example.demo.Entity.ProductStock;
import com.example.demo.Repository.ProductStockRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")

public class ProductStockController {

    @Autowired private ProductStockRepository productStockRepository;

    @GetMapping(path = "/ShowProductStock")
    public Iterable<ProductStock> ShowProductStock() {
        return productStockRepository.findAll().stream().collect(Collectors.toList());
    }

    @GetMapping(path = "/getProductStockById/{productId}")
    public ProductStock getProductStockById(@PathVariable long productId) {
        return productStockRepository.findById(productId).get();        
    }

    @PostMapping(path = "/insertProductStock")
    public ProductStock insertProductStock(@RequestBody Map<String,String> body){

        String productName = body.get("productName").toString();
        String imgURL = body.get("imgURL").toString();
        String price = body.get("price").toString();
        double priceToDouble = Double.valueOf(price);
        Date newdate = new Date();

        ProductStock productStock = new ProductStock();
        productStock.setProductName(productName);
        productStock.setImageURL(imgURL);
        productStock.setPrice(priceToDouble);
        productStock.setCreateDate(newdate);
        productStockRepository.save(productStock);
        return productStock;
    }

    @PutMapping(path = "/updateProductStock")
    public ProductStock updateProductStock(@RequestBody Map<String,String> body){
        
        String id = body.get("id").toString();
        Long idToLong = Long.valueOf(id);
        String productName = body.get("productName").toString();
        String imgURL = body.get("imgURL").toString();
        String price = body.get("price").toString();
        double priceToDouble = Double.valueOf(price);
        Date newdate = new Date();

        ProductStock productStock = productStockRepository.findById(idToLong).get();
        productStock.setProductName(productName);
        productStock.setImageURL(imgURL);
        productStock.setPrice(priceToDouble);
        productStock.setUpdateDate(newdate);
        productStockRepository.save(productStock);
        return productStock;
    }
    
    @DeleteMapping("/deleteProductStock/{ProductID}")
    public ProductStock deleteProductStock(@PathVariable long ProductID) {
        ProductStock productStock = productStockRepository.findById(ProductID).get();
        productStockRepository.delete(productStock);
        return null;
    }


   



}
