
public class SuperDemo{
    int i=10;
    public void show()
    {
        System.out.println("in show");
    }
    public SuperDemo(){
        System.out.println("this is default constructor");
    }

}

class A extends SuperDemo{
    int i=20;
    public void display(){
        System.out.println(super.i);
        System.out.println(i);
        super.show();
    }
    public A(){
        System.out.println("in A Constructor");
    }
}

