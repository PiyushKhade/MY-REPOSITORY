package collectionFramework;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MapDemo {
    public static void main(String[] args) {
         Map<Integer,String> map=new HashMap<>();

         map.put(1, "Nagpur");
         map.put(2,"Pune");
         map.put(3,"Mumbai");
       // System.out.println(map);
        Map<Integer,String> map1=new HashMap<>();
        map.put(4, "Nagpur");
        map.put(5,"Pune");
        map.put(6,"Mumbai");

        Map<Integer,String> map2=new HashMap<>();
        map.put(7, "Nagpur");
        map.put(8,"Pune");
        map.put(9,"Mumbai");

        List<Map<Integer,String>> list= Arrays.asList(map,map1,map2);
        list.forEach(s->{});


        map.forEach((k,v)->{
            System.out.println("Key->"+k+" Value->"+v);
        });

        for(Map.Entry<Integer,String> m:map.entrySet()){
            System.out.println(m.getKey()+" "+m.getValue());
        }
    }
}
