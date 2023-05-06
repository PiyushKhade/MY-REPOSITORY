package Looping;
import java.util.*;
public class SwitchCase {
    public static void main(String[] args) {
        int i=1;
        switch(i){
            case 1:
                System.out.println("One");
                switch(1){
                    case 1:
                        System.out.println("In inner loop");
                        break;
                    case 2:
                        System.out.println("In Inner Loop 2");
                }
                break;
            case 2:
                System.out.println("Two");
                break;
            case 3:
                System.out.println("Three");
                break;
            case 4:
                System.out.println("Four");
                break;
            default:
                System.out.println("End");
        }
    }

}
