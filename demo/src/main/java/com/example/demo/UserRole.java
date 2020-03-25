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
    
    


}