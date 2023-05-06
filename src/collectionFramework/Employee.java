package collectionFramework;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Employee implements Comparable<Employee>{
    int id;
    String name;
    String address;

    public Employee(int id, String name, String address){
        this.id=id;
        this.name=name;
        this.address=address;

    }

    public static void main(String[] args) {
        Employee obj1=new Employee(156,"Piyush","Pune");
        Employee obj2=new Employee(157,"Ayush","Pune");
        Employee obj3=new Employee(158,"Pratyush","Pune");

        List<Employee> list=new ArrayList<>();
        list.add(obj1);
        list.add(obj2);
        list.add(obj3);

        Collections.sort(list);

        list.forEach(s->{
            System.out.println(s.id+""+s.name+""+s.address);
        });
    }

    public int compareTo(Employee o){
        if(this.id==0)
        {
            return 0;
        } else if (this.id>o.id) {
            return 1;
        }else{
            return -1;
        }
    }
}
