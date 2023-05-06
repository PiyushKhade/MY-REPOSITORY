package Multithreading;

public class SynchronizedDemo {
    int num;
    public synchronized void increment(){
        num++;
    }

    public static void main(String[] args) throws InterruptedException {
        SynchronizedDemo synchronizedDemo=new SynchronizedDemo();
        Thread t1=new Thread(new Runnable() {
            @Override
            public void run() {
                for (int i = 1; i <= 1000; i++) {
                    synchronizedDemo.increment();
                }
            }
        });

        Thread t2=new Thread(new Runnable() {
            @Override
            public void run() {
                for (int i = 1; i <= 1000; i++) {
                    synchronizedDemo.increment();
                }
            }
        });

        t1.start();
        t2.start();

        t1.join();
        t2.join();

        System.out.println("num=>"+synchronizedDemo.num);
    }

}


