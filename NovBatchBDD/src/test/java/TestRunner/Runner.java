package TestRunner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import datatest.ConfigFileReader;


@RunWith(Cucumber.class)				
@CucumberOptions(features="C:\\Users\\manee\\git\\TestNov\\NovBatchBDD\\src\\test\\java\\Features",//feature file package Path
glue={"StepDefinition"}, //the path of the step definition files
plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
format= {"pretty","html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
monochrome = true, //display the console output in a proper readable format
strict = true, //it will check if any step is not defined in step definition file
dryRun = false //to check the mapping is proper between feature file and step def file
//tags={"~@SmokeTest"}
		)						
public class Runner {
	
	// public static void writeExtentReport() {
	 //Reporter.loadXMLConfig(new File(ConfigFileReader.getReportConfigPath()));
	// }
	@AfterClass
	 public static void writeExtentReport() {
	 Reporter.loadXMLConfig(new File(ConfigFileReader.getReportConfigPath()));
	 } 
	
}


//ORed : tags = {"@SmokeTest , @RegressionTest"} -- execute all tests tagged as @SmokeTest OR @RegressionTest
//ANDed :  = tags = {"@SmokeTest" , "@RegressionTest"} -- execute all tests tagged as @SmokeTest AND @RegressionTest
//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"} -- except Smoke Test and Except...
