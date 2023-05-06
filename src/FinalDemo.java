public class FinalDemo {
   final int i=10;
    public void display(){
        int i=35;
        System.out.println(i);
    }

    public static void main(String[] args) {
        FinalDemo obj=new FinalDemo();
        obj.display();
        System.out.println(obj.i);
    }

}

