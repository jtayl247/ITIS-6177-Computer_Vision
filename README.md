# ITIS-6177-Computer_Vision
ITIS-6177 Final Project: Microsoft Azure Computer Vision API

By: John Taylor  
Last Updated: 12/01/2022 9:30AM

Description: For the final project for ITIS-6177, Professor Nolasco asked students to create APIs to interface with several differnt services. I was given Microsoft's Computer Vision service to create an API to interface with. Microsoft's documentation can be pretty messy, especially when they have several versions of the same service running at the same time. 

Purpose: Microsoft's Computer Vision service allows a user to select a type of feature to analyze for an image URL. It then returns relevant information for the image.

Usage: There are six main type of features that can be analyzed using this API.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•Description: Returns an automatically generated description of the image.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•Tags: Returns a list of relevant tags that may be contained in the image.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•Objects: Similar to tags, except objects also return a bounding box for the given object within the image.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•Read: If the image contains text, this will return the text found in the image.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•SmartCrop: This returns a bounding box corresponding to a cropped image that the computer vision service denotes as important to the image.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•People: If the image contains people, this will return bounding boxes around each person in the image.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***The API returns both the result of the anaylsis as well as a confidence rating.

For API usage, please refer to this link in order to view and test API endpoints: [Documentation](http://159.89.232.54:3000/docs/) 

  
   
Example: Show the return data for the image of a gas station below. There will be another example for the "read" and "people" feature below using the movie poster. The raw data returned is in JSON format, so this example will just show the important information that the features return.


![App Screenshot](https://pbs.twimg.com/media/FbKznovUYAMsXhO?format=jpg&name=large). 
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description: "A Car Parked at a Gas Station" - Confidence: 0.578  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tags: "Vehicle" - Confidence: 0.966 | "Wheel" - Confidence: 0.957 | "Night" - Confidence: .794 | Etc...   

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Objects: "Car" - Confidence: 0.744 - Bounding Box: "x=332 y=682 w=222 h=101"  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SmartCrop: Aspect Ratio: 0.62 - Bounding Box: "x=31 y=54 w=674 h=1090"  




![App Screenshot](https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/baby-driver-rory-hi-res.jpg)   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Read: "Baby" - Confidence: 0.957 | "Driver" - Confidence: 0.636 | *Also includes Bounding Boxes   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;People: Bounding Box: "x=30 y=48 w=437 h=921" (Kevin Spacey's character)  - Confidence: 0.895
