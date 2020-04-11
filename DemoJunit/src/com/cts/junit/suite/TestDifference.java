package com.cts.junit.suite;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.cts.junit.app.Calc;

public class TestDifference {

		static int iVar;
		static int jVar;
		static Calc calcObj;
	@Before
	public void setUpBeforeClass() throws Exception {
		iVar= jVar = 0;
		calcObj = new Calc();
	}

	@After
	public void tearDownAfterClass() throws Exception {
		iVar= jVar = 0;
		calcObj = null;
	}

	@Test
	public void test() {
		int diff = calcObj.difference(23, 2233);
		assertEquals(2210,diff);
	}

}
