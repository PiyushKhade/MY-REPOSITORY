package Multithreading;

public class Banking {
    int balance=1000;

    private int withdraw(){
        if(balance>550){
            balance=balance-550;
        }
        else {
            System.out.println("Your Balance is nit sufficient");
        }
        return balance;
    }

    public static void main(String[] args) {
        Banking banking=new Banking();
        Thread t1=new Thread(new Runnable() {
            @Override
            public void run() {

            }
        });
    }
}
