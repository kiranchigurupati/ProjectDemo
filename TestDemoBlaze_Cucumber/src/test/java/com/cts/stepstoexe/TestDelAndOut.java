package com.cts.stepstoexe;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.core.Logger;
import org.openqa.selenium.WebDriver;

import com.cts.pages.DelAndOut;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestDelAndOut {
	private static Logger logger = (Logger) LogManager.getLogger(TestDelAndOut.class);
	WebDriver driver;
	
	DelAndOut dao= new DelAndOut();
	
	
	@Given("^user launches Chromebrowser$")
	public void user_launches_Chromebrowser() throws Throwable {
		////dao.launch();
		logger.debug("launches the browser");
	  
	}

	@When("^user login to the page and select the product$")
	public void user_login_to_the_page_and_select_the_product() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		dao.login();
		logger.info("selected the product sucessfully");
	}

	@When("^the user delete the product from the cart$")
	public void the_user_delete_the_product_from_the_cart() throws Throwable {
	
	dao.delete();
	logger.info("deleting the product from cart is succesful");
	}

	@Then("^user will logout from site$")
	public void user_will_logout_from_site() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		dao.logout();
		logger.info("logouts succesfully");
	}
	@Then("^captures screenshot$")
	public void captures_screenshot() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		dao.Screenshot();
		logger.info("screenshot takes place");



	}
}
