package ExceptionHandeling;

public class ThrowThrowsDemo  {
    public static void main(String[] args)
            throws Exception
    {
        int i=17;
        if(i>=18)
        {
            System.out.println("You can vote");
        }
        else {
            throw new Exception("You Cannot vote");
        }
        System.out.println("Exit");
    }
}


class MyException extends Exception{

    MyException(String str){
        super(str);
    }
}