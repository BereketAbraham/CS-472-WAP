package mum.cs472;

import java.util.ArrayList;
import java.util.List;

public class BeerExpert {
    public List getBrands(String color) {
        List brands = new ArrayList();
        if (color.equals("abmebr"))
        {
            brands.add("Jack Amber");
            brands.add("Red Moose");
        }
        else {
            brands.add("Jail Pale Ale");
            brands.add("Gout Stout");
        }
        return(brands);

    }
}