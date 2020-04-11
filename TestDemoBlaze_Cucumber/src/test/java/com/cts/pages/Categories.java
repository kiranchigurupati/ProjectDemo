package com.cts.pages;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

public class Categories {
	WebDriver driver;
	By categories=By.xpath("//a[@id='cat']");
	By mobile=By.xpath("//a[contains(text(),'Phones')]");
	By product=By.xpath("//a[contains(text(),'Nokia lumia 1520')]");
	By cart=By.xpath("//a[@class='btn btn-success btn-lg']");

	public void launch(String browser,String url) // lauching the application
	{
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
	
	public void search_page()// visiting searching product page
	{
		driver.get("http://demoblaze.com");
	}
	
	public void search_product() // searching the product
	{
		WebElement link =driver.findElement(categories); // move to to element achiving by creating object
		WebElement link2=driver.findElement(mobile);
		Actions action = new Actions(driver);
		action.moveToElement(link);
		action.moveToElement(link2).click().perform();
		driver.findElement(product).click();
		driver.findElement(cart).click();
	
		}
		public void Screenshot() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		TakesScreenshot ts=((TakesScreenshot)driver);
		File Source=ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(Source,new File("src/main/resources/screenshot/Categories.png"));
		driver.quit();
	}
	
	}



