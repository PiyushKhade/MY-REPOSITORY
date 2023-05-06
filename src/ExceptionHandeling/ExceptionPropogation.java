package ExceptionHandeling;

public class ExceptionPropogation {
    public void a(){
        int i=10/0;
    }
    public void b(){
        a();
    }
    public void c(){
        try {
            b();
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }

    }

    public static void main(String[] args) {
        ExceptionPropogation obj=new ExceptionPropogation();
        obj.c();
        System.out.println("Hii");

    }
}
