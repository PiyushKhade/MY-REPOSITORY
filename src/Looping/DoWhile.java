package Looping;
import java.util.*;
public class DoWhile {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        char choice;
        do{
            System.out.println("Enter a number");
            int num=sc.nextInt();
            int i=(int) (Math.random())*100+1;
            System.out.println(i);
            System.out.println("Do yYou want to continue?");
            choice=sc.next().charAt(0);
        }
        while(choice=='Y'||choice=='y');
        {
            System.out.println("Program End");
        }
    }

}
