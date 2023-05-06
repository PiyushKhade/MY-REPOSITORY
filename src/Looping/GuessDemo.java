package Looping;
import java.util.*;
public class GuessDemo {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int num, guess, attempt=0;
        num=(int)(Math.random()*100)+1;
        do{
            System.out.println("Enter number");
            guess=sc.nextInt();
            attempt++;
            if(num>guess)
            {
                System.out.println("Number is greater");
            } else if (num<guess) {
                System.out.println("Number is smaller");
            }else {
                System.out.println("You guessed correct at "+attempt+" attempts");
            }
        }while(num!=guess);
    }
}
