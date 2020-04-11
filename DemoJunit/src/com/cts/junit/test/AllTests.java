package com.cts.junit.test;


import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import com.cts.junit.suite.TestAdd;
import com.cts.junit.suite.TestDifference;


@RunWith(Suite.class)
@SuiteClasses({TestAdd.class,TestDifference.class})
public class AllTests {

}