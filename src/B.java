class Aa
{

    Aa()
    {
        System.out.println("Aa Class Constructor");
    }
}
public class B extends Aa
{
    B(){
        super();
        System.out.println("Class B Constructor");
    }
    public static void main(String[] args) {
        B ob=new B();
    }
}