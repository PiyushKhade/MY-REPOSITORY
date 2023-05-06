package Java8;

public class DefaultandStatic {
    public static void main(String[] args) {

        DefaultandStatic obj=new DefaultandStatic();
        MyInterface2.show();


    }

}

interface MyInterface2{
    void msg();

    static void show(){
        System.out.println("in show");
    }
}
