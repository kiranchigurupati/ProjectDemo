package com.cts.stepstoexe;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.core.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.cts.pages.Login;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestLogin {
	private static Logger logger = (Logger) LogManager.getLogger(TestLogin.class);

	WebDriver driver; 
	Login logdemo = new Login();
	@Given("the user launch the application")
	 

	@When("the user clicks on login link")
	public void the_user_clicks_on_login_link() throws Throwable {
		logdemo.url ("chrome","http://Demoblaze.com");
		logdemo.url("firefox","http://demoblaze.com");
		logger.debug("navigate to the specified url");
	   
	}
	@When("^the user enter username as \"([^\"]*)\" & password as \"([^\"]*)\"$")
	public void the_user_enter_username_as_password_as(String username, String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 logdemo.LoginDeatils(username, password);
	 logger.debug("login takesplace");
	}

	
		 
	
	@Then("^user takes screenshot$")
	public void user_takes_screenshot() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		logdemo.Screenshot();
		logger.info("screenshot takes place");
	}

	

}