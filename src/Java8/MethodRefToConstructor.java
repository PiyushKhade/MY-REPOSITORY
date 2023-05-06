package Java8;

public class MethodRefToConstructor {
    MethodRefToConstructor(){
        System.out.println("in construstor");
    }

    public static void main(String[] args) {
        MethodRefToConstructor obj=new MethodRefToConstructor();

    }
}
