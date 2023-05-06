package FileHandeling;
import java.io.*;

public class FileHandelingDemo {
    public static void main(String[] args)  {
        try {
            FileOutputStream fileOutputStream = new   FileOutputStream ("Sample.txt");
            String str = "Welcome";
            byte b[] = str.getBytes();
            fileOutputStream.write(b);

            fileOutputStream.close();
        }
        catch (IOException io){
            throw new RuntimeException(io);
        }
        try{
            FileInputStream fileInputStream=new FileInputStream("Sample.txt");
            int i=fileInputStream.read();
            while(i!=-1)
            {
                System.out.print((char)i);
                i=fileInputStream.read();
            }
            fileInputStream.close();
        }catch (IOException ee)
        {
            throw new RuntimeException(ee);
        }
    }
}


// Learn File reader & File Writer
// Go through How to close file using finally