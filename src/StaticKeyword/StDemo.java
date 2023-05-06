package StaticKeyword;

public class StDemo {
    int empId;
    String EmpName;
    static String company="CPG";

    public static void show(){
        System.out.println("In show method");
    }
    public static void main(String[] args)
    {
        System.out.println("Main Function");
        show();

        StDemo ob=new StDemo();
        ob.empId=1;
        ob.EmpName="AAA";

        StDemo ob1=new StDemo();
        ob1.empId=2;
        ob1.EmpName="BBB";

        System.out.println(ob.empId+" "+ob.EmpName+" "+ company);
        System.out.println(ob1.empId+" "+ob1.EmpName+" "+ company);
        


    }
}
