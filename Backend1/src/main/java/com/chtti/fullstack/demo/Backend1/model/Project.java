package com.chtti.fullstack.demo.Backend1.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data //會自動生成Getter, Setter, toString()....
@NoArgsConstructor
public class Project {
    private Long id;
    private String projectName;
    private String projectIdentifier;
    private String description;
    private Date startDate;
    private Date endDate;

    public Project(String projectName, String projectIdentifier) {
        this.projectName = projectName;
        this.projectIdentifier = projectIdentifier;
    }


}
