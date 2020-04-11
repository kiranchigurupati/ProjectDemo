package com.cts.runner;

import org.junit.runner.RunWith;

import org.junit.runners.Suite.SuiteClasses;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features ="src/main/resources/feature/Test.feature", 
		tags = {"@TestCase5_Demoblaze"},
	    glue = {"com.cts.stepstoexe"},
		plugin = {"html:myWebReport.html","json:JsonReport","junit:target/myReport.xml","com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},
		monochrome = true)

@SuiteClasses({})
public class Testdelandout {

}
