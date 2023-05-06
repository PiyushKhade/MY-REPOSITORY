package Scanner;
import java.util.*;
public class ArrayScan {
    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);
        int a[]=new int[5];
        for(int i=1; i<a.length;i++)
        {
            System.out.println("Enter any number");
           int num=sc.nextInt();
           a[i]=num;
        }
        for(int i=1;i<a.length;i++)
        {
            System.out.println(a[i]);
        }
    }
}
