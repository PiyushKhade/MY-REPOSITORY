package Java8;

public class MethodRefToInstance {
    public static void main(String[] args) {

        MethodRefToInstance obj=new MethodRefToInstance();

        MyInterface4 myInterface4=obj::display;

    }
    public void display(){
        System.out.println("In show Method");
    }
}

interface MyInterface4{
    void show();
}
