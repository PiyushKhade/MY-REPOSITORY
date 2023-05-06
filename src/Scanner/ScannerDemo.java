package Scanner;
import java.util.*;
public class ScannerDemo {
    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);
        System.out.println("Details:");

        System.out.print("Enter Name: ");
        String name=sc.next();

        System.out.print("Enter Age: ");
        int age=sc.nextInt();

        System.out.print("Enter gender: ");
        char gender=sc.next().charAt(0);

        System.out.print("Enter Ph no: ");
        long phno=sc.nextLong();

        System.out.println("________________________________________________________________________________");

        System.out.println("Name: "+name);

        System.out.println("Age: "+age);

        System.out.println("Gender: "+gender);

        System.out.println("Phone: "+phno);

    }
}
