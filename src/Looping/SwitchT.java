package Looping;
import java.util.*;
public class SwitchT {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        System.out.println("Enter a number: ");
        int num1=sc.nextInt();
        System.out.println("Enter a number: ");
        int num2=sc.nextInt();
        System.out.println("which operation dou you want to perform:");
        char op=sc.next().charAt(0);
        switch (op) {
            case '+' -> System.out.println(num1 + num2);
            case '-' -> System.out.println(num1 - num2);
            case '*' -> System.out.println(num1 * num2);
            case '/' -> System.out.println(num1 / num2);
            default -> System.out.println("No Matches");
        }

    }
}
