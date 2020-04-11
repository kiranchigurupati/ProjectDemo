package com.cts.stepstoexe;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.core.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.cts.pages.Categories;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestCategories {
	WebDriver driver;
	Categories democat = new Categories();
	private static Logger logger = (Logger) LogManager.getLogger(TestCategories.class);

	
	@Given("^the user launch the demoblaze application$")
	public void the_user_launch_the_demoblaze_application() throws Throwable {
		democat.launch("chrome","http://Demoblaze.com");
		democat.launch("firefox","http://Demoblaze.com");
		logger.debug("launches the application");
	}@When("^the user clicks on mobiles under categories$")
	public void the_user_clicks_on_mobiles_under_categories() throws Throwable {
		democat.search_page();	
		logger.info("entered into the required page");
	}

	@When("^the user click on the required mobiles and added to cart$")
	public void the_user_click_on_the_required_mobiles_and_added_to_cart() throws Throwable {
		
		democat.search_product();
        logger.info("sucessfully selected the product");
	
	}
	@Then("^user take screenshot$")
	public void user_take_screenshot() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		democat.Screenshot();
		logger.info("screenshot takes place");
	}
	}



