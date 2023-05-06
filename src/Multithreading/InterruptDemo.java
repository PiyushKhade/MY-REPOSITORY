package Multithreading;

public class InterruptDemo {
    public static void main(String[] args) {
        Thread t1=new Thread(new Runnable() {
            @Override
            public void run() {
                Thread.yield();
                for(int i=1; i<=50; i++)
                {
                    System.out.println("In thread t1");
                }
            }
        });

        t1.start();
        t1.interrupt();

        System.out.println("Main Thread");
    }
}
