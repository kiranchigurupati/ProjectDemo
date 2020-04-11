package com.cts.stepstoexe;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.core.Logger;
import org.openqa.selenium.WebDriver;
import com.cts.pages.AddToCart;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestAddCart {
	private static Logger logger = (Logger) LogManager.getLogger(TestAddCart.class);
	WebDriver driver;
	AddToCart gocart = new AddToCart();
	
	@Given("^user launches ChromeBrowser$")
	public void user_launches_ChromeBrowser() throws Throwable {
		
		gocart.launch("chrome","http://Democart.com");
		gocart.launch("chrome","http://Democart.com");

        logger.debug("launches the browser");
	}

	@When("^the user open demoBlaze$")
	public void the_user_open_demoBlaze() throws Throwable {
		gocart.search_page();
		logger.info("specified page is opened");
	}


@Then("^user will place the order$")
public void user_will_place_the_order() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	gocart.placeorder();
	logger.info("placing the order successfully");
}

@Then("^user captures screenshot$")
public void user_captures_screenshot() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	gocart.Screenshot();
	logger.info("screenshot takes place");
}

}




