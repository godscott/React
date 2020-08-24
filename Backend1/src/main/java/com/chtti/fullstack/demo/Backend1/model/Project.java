package com.chtti.fullstack.demo.Backend1.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data //會自動生成Getter, Setter, toString()....
@NoArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String projectName;
    private String projectIdentifier;
    private String description;
    private Date startDate;
    private Date endDate;
    private Date createAt;
    private Date updateAt;

    @PrePersist
    protected void onCreate() {
        this.createAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updateAt = new Date();
    }

    public Project(String projectName, String projectIdentifier) {
        this.projectName = projectName;
        this.projectIdentifier = projectIdentifier;
    }


}