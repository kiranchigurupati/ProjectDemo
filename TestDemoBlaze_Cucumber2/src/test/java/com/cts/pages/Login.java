package com.cts.pages;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;


public class Login {
	
	WebDriver driver;
	By profile=By.xpath("//*[@id=\"narvbarx\"]");
	By login=By.xpath("//*[@id=\"login2\"]");
	By username1=By.id("loginusername");
	By password1=By.id("loginpassword");
	By loginsubmit=By.xpath("//*[@id=\"logInModal\"]/div/div/div[3]/button[2]");
	public void url(String browser, String url) {
		try{
			if(browser.equalsIgnoreCase("chrome"))
					{
						System.setProperty("webdriver.chrome.driver","C://Users//admin//Desktop//chromedriver.exe");
						driver = new ChromeDriver();
					}
					else if(browser.equalsIgnoreCase("firefox"))
					{
					
					System.setProperty("webdriver.gecko.driver","C://Users//admin//Downloads//geckodriver.exe");
					 driver=new FirefoxDriver();
					 
					}
					
					driver.manage().window().maximize();
					driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
			}catch(WebDriverException e){
			System.out.println("browser could not be launched");
			}



		
		
	}

	
	
	public void LoginDeatils(String username,String password )throws IOException, InterruptedException 
	{
		driver.get("http://Demoblaze.com");
		System.out.println(driver.getTitle());	
		WebElement link =driver.findElement(profile); // move to to element achiving by creating object
		WebElement link2=driver.findElement(login);
		Actions action = new Actions(driver);
		action.moveToElement(link);
		action.moveToElement(link2).click().perform();
		driver.findElement(username1).sendKeys(username); 
		driver.findElement(password1).sendKeys(password); 
		driver.findElement(loginsubmit).click();
		
	}
	public void Screenshot() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		TakesScreenshot ts=((TakesScreenshot)driver);
		File Source=ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(Source,new File("src/main/resources/screenshot/Login.png"));
		driver.quit();
	}



	}

	
	





