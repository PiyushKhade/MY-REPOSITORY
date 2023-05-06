package Java8;

import java.util.Arrays;
import java.util.List;

public class MethodReference {
    //Method reference to arbitrary type of particular object
    public static void main(String[] args) {
        List<Student>list= Arrays.asList(new Student(1,"Ramesh", "Pune"), new Student(2,"Suresh", "Pune"));
        list.forEach(System.out::println);
    }
    static class Student{
        private  int id;
        private String name;
        private String address;




         public Student(int id, String name, String address){
            this.id=id;
            this.name=name;
            this.address=address;
        }
    }
}
