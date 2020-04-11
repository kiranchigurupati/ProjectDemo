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



public class SignUp {
	WebDriver driver;
	By profile=By.xpath("//*[@id=\"narvbarx\"]");
	By signup=By.xpath("//*[@id=\"signin2\"]");
	By username=By.id("sign-username");
	By password=By.id("sign-password");
	By signupsubmit=By.xpath("//*[@id=\"signInModal\"]/div/div/div[3]/button[2]");
	
	public void url(String browser,String url) { // url for launch the chrome
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
		
	public void signuppage() //using webdriver get visting the testing website
	{
		driver.get("http://Demoblaze.com");
		
		System.out.println(driver.getTitle());
	}
	
	public void SignupDeatils(String Username, String Password) throws IOException, InterruptedException 
	{
	
		WebElement link =driver.findElement(profile); // move to to element achiving by creating object
		WebElement link2=driver.findElement(signup);
		Actions action = new Actions(driver);
		action.moveToElement(link);
		action.moveToElement(link2).click().perform();
		driver.findElement(username).sendKeys(Username); 
		driver.findElement(password).sendKeys(Password);
		driver.findElement(signupsubmit).click();
		
		
	}
		public void submit() throws InterruptedException
	{
		driver.findElement(signupsubmit).click(); 
		Thread.sleep(3000);
		//driver.close(); // close the current tab
	}
	public void screenshot() throws IOException
	{
		TakesScreenshot ts=((TakesScreenshot)driver);
		File Source=ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(Source,new File("src/main/resources/screenshot/SignUp.png"));
		driver.quit();
	}




}


