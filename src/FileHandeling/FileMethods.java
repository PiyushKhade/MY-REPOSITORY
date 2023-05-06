package FileHandeling;

import java.io.File;

public class FileMethods {
    public static void main(String[] args) {
        try {
            File file = new File("Sample.txt");
            if (file.createNewFile()) {
                System.out.println("File Created");
            } else {
                System.out.println("File already exists");
            }
            System.out.println(file.length());
            System.out.println(file.canWrite());
            System.out.println(file.canRead());
            System.out.println(file.getName());
            System.out.println(file.getAbsolutePath());
            System.out.println(file.exists());
            System.out.println(file.getTotalSpace());
            System.out.println(file.getFreeSpace());
            System.out.println(file.isFile());

            File dr=new File("New Dir/subD");
            dr.mkdirs();
            System.out.println(dr.isFile());


        }catch (Exception e)
        {
            throw new RuntimeException();
        }

    }
}



//Multitherading
//Itext Library