package com.cts.stepstoexe;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.core.Logger;


import com.cts.pages.SignUp;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class TestSignup  {
	private static Logger logger = (Logger) LogManager.getLogger(TestSignup.class);
	SignUp demo  = new SignUp ();
	@Given("^the user launches the browser$")
	
	public void the_user_launches_the_browser() throws Throwable
	{
	demo.url("chrome","http://demoblaze.com");
	demo.url("firefox","http://demoblaze.com");
	logger.debug("launches the browser");
	
	}
	@When("^the user clicks the sign up link$")
	public void the_user_clicks_the_sign_up_link() throws Throwable {
	 demo.signuppage();
	 logger.info("landed on requried page");
	   
	}
	@When("^the user enter the \"([^\"]*)\" and \"([^\"]*)\" and clicks on singup$")
	public void the_user_enter_the_and_and_clicks_on_singup(String username, String password) throws Throwable {
	    demo.SignupDeatils(username,password);
	}

	

	@Then("^user take the screenshots$")
	public void user_take_the_screenshots() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		demo.screenshot();
        logger.info("taken the screenshot");
	    }


	
	   
	

}