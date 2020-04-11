package com.cts.junit.app;

public class Calc {

	public static int add (int i, int j)
	{
		return i+j;

	}

	public int difference (int i, int j)
	{
	if(i>j)
	
		return i-j;
	else if(i<j)
		return j-i;
	else if(i==j)
		return 0;
	return 0;
	}

}
