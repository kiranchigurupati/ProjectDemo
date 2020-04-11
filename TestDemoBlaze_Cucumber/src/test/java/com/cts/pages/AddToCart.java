package com.cts.pages;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class AddToCart {
		WebDriver driver;
		By product=By.xpath("//a[contains(text(),'Nokia lumia 1520')]");
		By cart=By.xpath("//a[@class='btn btn-success btn-lg']");
		By cart1=By.xpath("//a[contains(text(),'Cart')]");
		By placeorder=By.xpath("//button[@class='btn btn-success']");
		By name =By.id("name");
		By country =By.id("country");
		By city =By.id("city");
		By creditcard =By.id("card");
		By month =By.id("month");
		By year =By.id("year");
		By purchase=By.xpath("//button[contains(text(),'Purchase')]");
		
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
		
		public void placeorder() throws InterruptedException // searching the product
		{
			driver.findElement(product).click();
			driver.findElement(cart).click();
			driver.findElement(cart1).click();
			Alert alert = driver.switchTo().alert();
			alert.accept();
			driver.findElement(placeorder).click();
			driver.findElement(name).sendKeys("jyothi");
			driver.findElement(country).sendKeys("india");
			driver.findElement(city).sendKeys("bhimavaram");
			driver.findElement(creditcard).sendKeys("564544545112");
			driver.findElement(month).sendKeys("april");
			driver.findElement(year).sendKeys("25");
			driver.findElement(purchase).click();



			}
		public void Screenshot() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			TakesScreenshot ts=((TakesScreenshot)driver);
			File Source=ts.getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(Source,new File("src/main/resources/screenshot/AddToCart.png"));
			driver.quit();
		
		}
}

	


