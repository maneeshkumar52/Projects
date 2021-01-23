package StepDefinition;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.cucumber.listener.Reporter;
import com.google.common.io.Files;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class Steps {
public static String directoryName;
	
	public WebDriver driver;

@Before(order=0)
public void beforeScenario(Scenario scenario) {
    Reporter.assignAuthor("Automated by - Maneesh");
}

@Before(order=1)
public void checkDirectory() {
	 directoryName= System.getProperty("user.dir") + "/target/cucumber-reports/screenshots/";

File directory = new File(directoryName);
if(! directory.exists())
{
	directory.mkdir();
	
}
}
/*@After(order=1)
public void afterScenario(Scenario scenario) {
if (scenario.isFailed()) {
String screenshotName = scenario.getName().replaceAll(" ", "_");
try {
File sourcePath = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);

File destinationPath = new File(directoryName + screenshotName + ".png");

Files.copy(sourcePath, destinationPath);   

Reporter.addScreenCaptureFromPath(destinationPath.toString());

} catch (IOException e) {
} 
}

if (!scenario.isFailed()) {
String screenshotName = scenario.getName().replaceAll(" ", "_");
try {
File sourcePath = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);



File destinationPath = new File(directoryName + screenshotName + ".png");

Files.copy(sourcePath, destinationPath);   

Reporter.addScreenCaptureFromPath(destinationPath.toString());

} catch (IOException e) {
	e.printStackTrace();
} 
}

}
*/

@After(order=0)
public void closebrowser()
{
	driver.close();
}


	
@Given("^Open the Browser$")
public void open_the_Browser()  {
    // Write code here that turns the phrase above into concrete actions
	WebDriverManager.chromedriver().setup();
	driver = new ChromeDriver();
	driver.manage().window().maximize();
}

@Given("^Enter the URL$")
public void enter_the_URL()  {
    // Write code here that turns the phrase above into concrete actions
 driver.get("https://www.saucedemo.com/index.html");
 takeScreenshotafterEveryMethod();
}

//Reg Exp:
////1. \"([^\"]*)\"
////2. \"(.*)\"

@When("^Enter the username \"([^\"]*)\" and password \"([^\"]*)\"$")
public void enter_the_username_and_password(String username, String password) throws InterruptedException  {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys(username);
	driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);
	 takeScreenshotafterEveryMethod();
	/*List<List<String>> data = credentials.raw();
	int val=data.size();
	System.out.println("The length of val is"+val);
	 for(int i=0;i<val;i++)
	 {
		 driver.findElement(By.xpath("//input[@id='user-name']")).clear();
		 
    driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys(data.get(i).get(0));
    driver.findElement(By.xpath("//input[@id='password']")).clear();
    driver.findElement(By.xpath("//input[@id='password']")).sendKeys(data.get(i).get(1));
    Thread.sleep(3000);
	 }
	*/
	
	
	/*for (Map<String, String> data : credentials.asMaps(String.class, String.class)) {
		 
		 String username=data.get("username");
		 String password=data.get("password");
		 driver.findElement(By.xpath("//input[@id='user-name']")).clear();
		 driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys(username);
		 driver.findElement(By.xpath("//input[@id='password']")).clear();
		    driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);
		    Thread.sleep(5000);
		  }
		  
	*/
	
}

@When("^Click on Login Button$")
public void click_on_Login_Button() throws InterruptedException  {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//input[@id='login-button']")).click();
	Thread.sleep(3000);
	 takeScreenshotafterEveryMethod();
}

@When("^Click on Add to Cart Button$")
public void click_on_Add_to_Cart_Button() throws InterruptedException {
    // Write code here that turns the phrase above into concrete actions
	Assert.assertEquals("Products", driver.findElement(By.xpath("//div[@class='product_label']")).getText());
	driver.findElement(By.xpath("//div[text()='Sauce Labs Backpack']//ancestor::div[@class='inventory_item_label']//following-sibling::div[@class='pricebar']//descendant::button")).click();
	Thread.sleep(2000);
	 takeScreenshotafterEveryMethod();
}

@When("^Click on AddtoCart Icon$")
public void click_on_AddtoCart_Icon() throws InterruptedException {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//a[contains(@class,'shopping_cart')]")).click();

		Thread.sleep(2000);
		 takeScreenshotafterEveryMethod();
}

@When("^Click on Checkout$")
public void click_on_Checkout() throws InterruptedException {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//a[text()='CHECKOUT']")).click();
	Thread.sleep(2000);
	 takeScreenshotafterEveryMethod();
}

@Then("^Enter the FirstName \"([^\"]*)\" , LastName \"([^\"]*)\" and ZipCode \"([^\"]*)\"$")
public void enter_the_FirstName_LastName_and_ZipCode(String Fname, String Lname, String zip) throws InterruptedException {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//input[starts-with(@id,'first')]")).sendKeys(Fname);
	driver.findElement(By.xpath("//input[starts-with(@id,'last')]")).sendKeys(Lname);
	driver.findElement(By.xpath("//input[starts-with(@id,'postal')]")).sendKeys(zip);
	Thread.sleep(2000);
	 takeScreenshotafterEveryMethod();
}

@Then("^Click Continue button$")
public void click_Continue_button() throws InterruptedException {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//input[@class='btn_primary cart_button']")).click();
	Thread.sleep(2000);
	 takeScreenshotafterEveryMethod();
}

@Then("^Click on Finish Button$")
public void click_on_Finish_Button() throws InterruptedException {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//a[text()='FINISH']")).click();
	Thread.sleep(2000);
	 takeScreenshotafterEveryMethod();
}

@Then("^Click on Menu$")
public void click_on_Menu() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//button[text()='Open Menu']")).click();
	Thread.sleep(2000);
	 takeScreenshotafterEveryMethod();
}

@Then("^Click on Logout Button$")
public void click_on_Logout_Button() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.id("logout_sidebar_link")).click();
	Thread.sleep(2000);
	 takeScreenshotafterEveryMethod();
}

	public void takeScreenshotafterEveryMethod()
	{
		
		try {
		File sourcePath = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	
		
		File destinationPath = new File(directoryName + getcurrentdateandtime() + ".png");

		Files.copy(sourcePath, destinationPath);   

		Reporter.addScreenCaptureFromPath(destinationPath.toString());

		} catch (IOException e) {
		} 
	}
	
	
	public static String getcurrentdateandtime(){
		String str = null;
		try{
			DateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss:SSS");
			Date date = new Date(); //current system date time
			str= dateFormat.format(date);
			str = str.replace(" ", "").replaceAll("/", "").replaceAll(":", "");
		}
		catch(Exception E)
		{
			E.printStackTrace();
		}
		return str;
	}
	
}
