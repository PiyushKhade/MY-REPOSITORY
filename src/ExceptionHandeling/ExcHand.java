package ExceptionHandeling;

public class ExcHand {
    public static void main(String[] args) {
        try{
            String str =null;
            str="Pune";
            System.out.println(str.toUpperCase());

            Integer i=Integer.parseInt("1dfr");
            System.out.println(i);
            try{
                int i1=10;
                int j=i/0;
                System.out.println(j);
            }
            catch (Exception e)
            {
                System.out.println(e);
            }
            
        }
        catch (Exception e)
        {

        }
    }
}
