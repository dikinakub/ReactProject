package com.example.demo;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Setter
@Getter
@NoArgsConstructor
@EqualsAndHashCode
public class UserRole {
    @Id
    @SequenceGenerator(name = "UserRole_seq", sequenceName = "UserRole_seq",initialValue = 1, allocationSize = 1)
    @GeneratedValue(generator ="UserRole_seq")
    private long id;

    private String name;
    private String imgURL;

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImgURL() {
        return this.imgURL;
    }

    public void setImgURL(String imgURL) {
        this.imgURL = imgURL;
    }
    
    


}