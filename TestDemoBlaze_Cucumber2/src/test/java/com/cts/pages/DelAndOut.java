package com.cts.pages;

import java.io.File;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class DelAndOut {
	WebDriver driver;

	By login = By.id("login2");
	By Username = By.id("loginusername");
	By Password = By.id("loginpassword");
	By Submit = By.xpath("//button[contains(text(),'Log in')]");
	By Product = By.xpath("//a[contains(text(),'Nokia lumia 1520')]");
	By addcart = By.xpath("//a[@class='btn btn-success btn-lg']");
	By cart = By.xpath("//a[contains(text(),'Cart')]");
	By delcart = By.xpath("S");
	By logout = By.xpath("//a[@id='logout2']");

	public void launch(String browser, String url) // lauching the application
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
}
		catch(WebDriverException e){
		System.out.println("browser could not be launched");
}
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\admin\\Desktop\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.get("http://demoblaze.com");
	}

	public void login() throws InterruptedException // searching the product
	{
		driver.findElement(login).click();
		driver.findElement(Username).sendKeys("jyothi");
		driver.findElement(Password).sendKeys("raj");
		driver.findElement(Submit).click();
		Thread.sleep(5000);
		driver.findElement(Product).click();
		driver.findElement(addcart).click();
	
		
		

	}
	

	public void delete() throws InterruptedException {
		driver.findElement(cart).click();
		Thread.sleep(5000);
		Alert alert = driver.switchTo().alert();
		alert.accept();
		
		
		driver.findElements(delcart).get(0).click();
	}

	public void logout() {
		driver.findElement(logout).click();
	}
	public void Screenshot() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		TakesScreenshot ts=((TakesScreenshot)driver);
		File Source=ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(Source,new File("src/main/resources/screenshot/DelAndOut.png"));
		driver.quit();
	
}
}
