package FileHandeling;

import java.io.*;

public class ByteArrayOutputStreamDemo {
    public static void main(String[] args) {
        try {
            FileOutputStream fileOutputStream = new FileOutputStream("New Sample.txt");
            FileOutputStream fileOutputStream1 = new FileOutputStream("Sample.txt");

            ByteArrayOutputStream obj=new ByteArrayOutputStream();
            byte[] str="Pune".getBytes();

            obj.write(str);

            obj.writeTo(fileOutputStream);
            obj.writeTo(fileOutputStream1);

            System.out.println("File Writing Successful");


        }
        catch(IOException e){
            throw new RuntimeException(e);
        }
        try {
            FileInputStream fileInputStream = new FileInputStream("New Sample.txt");
            FileInputStream fileInputStream1=new FileInputStream("Sample.txt");

            SequenceInputStream sequenceInputStream=new SequenceInputStream(fileInputStream1,fileInputStream);
            for(int i= sequenceInputStream.read();i!=-1;){
                System.out.println((char)i);
            }
        }
        catch (IOException e){
            throw new RuntimeException();
        }
    }
}
