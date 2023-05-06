package FileHandeling;

import java.io.*;


public class BufferDemo {

    public static void main(String[] args) {

        try {
            FileOutputStream fileOutputStream=new FileOutputStream("New Sample.txt");
            BufferedOutputStream bufferedOutputStream=new BufferedOutputStream(fileOutputStream);
            bufferedOutputStream.write("PUNE".getBytes());

            System.out.println("File Writing Successful");
            bufferedOutputStream.close();
            fileOutputStream.close();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        try {
            FileInputStream fileInputStream=new FileInputStream("New Sample.txt");
            BufferedInputStream bufferedInputStream=new BufferedInputStream(fileInputStream);
            int i=bufferedInputStream.read();
            while (i!=-1)
            {
                System.out.print((char)i);
            }
            bufferedInputStream.close();
            fileInputStream.close();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }
}
