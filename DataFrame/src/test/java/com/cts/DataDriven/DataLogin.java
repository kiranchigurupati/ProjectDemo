package com.cts.DataDriven;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.session.ChromeFilter;

public class DataLogin {
	WebDriver driver;
	
	public void startEngine() 
	{
		FileInputStream fin;
		try {
			fin = new FileInputStream("C:\\Users\\admin\\Documents\\DataFra.xlsx");
			XSSFWorkbook wb = new XSSFWorkbook(fin);
			XSSFSheet sh = wb.getSheet("Sheet1");
			
			int rows = sh.getLastRowNum();
		for(int i=0;i<rows;i++)
		{
			
			System.setProperty("webdriver.chrome.driver","C:\\Users\\admin\\Desktop\\chromedriver.exe");
			driver = new ChromeDriver();
			String username =sh.getRow(i+1).getCell(0).toString();
			String password =sh.getRow(i+1).getCell(1).toString();
		driver.manage().window().maximize();
		driver.get("http://newtours.demoaut.com");
		driver.findElement(By.name("userName")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
		driver.findElement(By.name("login")).click();
		driver.quit();

		
		}
		
	}
		catch(FileNotFoundException e1)
		{
		 e1.printStackTrace();	
		}
		 catch(IOException e)
		{
		e.printStackTrace();	
		}
		
		
		}

		
	}



