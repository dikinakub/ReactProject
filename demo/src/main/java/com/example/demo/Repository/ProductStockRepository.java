package com.example.demo.Repository;

import java.util.Collection;

import com.example.demo.Entity.ProductStock;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductStockRepository extends JpaRepository<ProductStock,Long>{

    @Query(value = "select * from product_stock \n"+
    "where product_name like %:dataSearch%  or price like %:dataSearch% ",nativeQuery = true)
    Collection<ProductStock> searchProduct(@Param("dataSearch") String dataSearch );

}
