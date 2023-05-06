package Multithreading;

class Hi extends Thread{
    public void run(){
        for (int i=1; i<=5;i++)
            System.out.println("Hi");
    }

}
class Hello implements Runnable{
    public void run(){
        for (int i=1; i<=5;i++)
            System.out.println("Hello");
    }
}


public class MultithreadingDemo {
    public static void main(String[] args) throws InterruptedException {

//        Hi hi=new Hi();
//        hi.run();
//
//        Hello hello=new Hello();
//        hello.run();


    Thread t1=new Thread(new Runnable() {
        @Override
        public void run() {
            for (int i = 1; i <= 5; i++)
                System.out.println("HIii");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    });

    Thread t2=new Thread(new Runnable() {
        @Override
        public void run() {
            for (int i=1; i<=5; i++)
                System.out.println("Hello");
            try{
                Thread.sleep(1000);
            }
            catch(InterruptedException e){
                throw new RuntimeException(e);
            }
        }
    });
    t1.start();
    t2.start();

    t1.join();
    t2.join();

        System.out.println("Exit");

    }
}
