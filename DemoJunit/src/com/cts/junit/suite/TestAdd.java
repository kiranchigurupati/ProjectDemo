package com.cts.junit.suite;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.cts.junit.app.Calc;

public class TestAdd {

	int iVar,jVar;
	Calc calcObj;
	@Before
	public void setUp() throws Exception {
		iVar= jVar = 0;
		calcObj = new Calc();
	}

	@After
	public void tearDown() throws Exception {
		iVar= jVar = 0;
		calcObj = null;
	}

	@Test
	public void testAdd() {
		int sum = calcObj.add(10,22);
		assertEquals(32,sum);

		
		
	}

}
