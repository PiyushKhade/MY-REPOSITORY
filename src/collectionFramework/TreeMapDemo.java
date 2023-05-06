package collectionFramework;

import java.util.TreeMap;

public class TreeMapDemo {
    public static void main(String[] args) {
        TreeMap<Integer,String>treeMap=new TreeMap<>();
        treeMap.put(1,"Nagpur");
        treeMap.put(2,"Pune");
        treeMap.put(3,"Hyedrabad");
        treeMap.put(4,"Banglore");
        treeMap.put(5, "Kolkata");

        System.out.println(treeMap);
        System.out.println(treeMap.subMap(1,5));
        System.out.println(treeMap.descendingMap());
        System.out.println(treeMap.descendingKeySet());
        System.out.println(treeMap.floorEntry(4));
        System.out.println(treeMap.floorKey(4));
        System.out.println(treeMap.ceilingKey(3));
        System.out.println(treeMap.ceilingEntry(1));
        System.out.println(treeMap.higherKey(2));
        System.out.println(treeMap.higherEntry(5));
        System.out.println(treeMap.firstKey());
        System.out.println(treeMap.firstEntry());


    }
}
