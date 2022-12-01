const express = require('express');
const app = express();
const request = require('request');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
var bodyParser = require('body-parser');
const { json } = require('express');
require('dotenv').config();


'use strict';

let subscriptionKey = process.env.API_KEY;
var searchFeature = ''

const swagOptions = {
    swaggerDefinition: {
         info: {
             title: 'ITIS-6177 Final Project - MS Azure Computer Vision',
             version: '1.0.0',
             description: 'Swagger endpoints for API calls to Microsoft Azure Computer Vision API',
         },
         host: '159.89.232.54:3000',
         basePath: '/',
     },
     apis: ['./server.js'],
};
const specs = swaggerJsdoc(swagOptions);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

// Request parameters.
const params = {
    'visualFeatures': 'Categories,Description,Color',
    'details': '',
    'language': 'en'
};

const options = {
    uri: '',
    qs: params,
    body: "",
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};




// // // default route
app.get('/', (req, res)=>{
    res.send("ITIS-6177 Final Project by John Taylor");
});
// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
 


//Description
/**
 * @swagger
 * /description/{imageURL}:
 *  get:
 *      summary: Get Description of an Image
 *      description: Returns a description based on the image given
 *      parameters:
 *        - in: path
 *          name: imageURL
 *          required: true
 *          description: URL destination of image to describe
 *          schema:
 *              type: string
 *      responses:
 *          200:
 *              description: Image description
 */
app.get('/description/*', (req, res)=>{
    searchFeature = "description";
    var image = req.params[0];
    console.log(image)
    options.uri = 'https://itis6177finalproject.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2022-10-12-preview&features=' + searchFeature + '&model-version=latest&language=en;'
    options.body = "{'url': " + "'" + image + "'}"
    
    
    request.post(options, (error, response, body) => {
      if (error) {
        console.log('Error: ', error);
        return;
      }
      let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
      console.log(jsonResponse)
      res.send(jsonResponse)
    });
});

//Tags
/**
 * @swagger
 * /tags/{imageURL}:
 *  get:
 *      summary: Get Tags for an Image
 *      description: Returns a tag or list of tags that denotes certain features for an image
 *      parameters:
 *        - in: path
 *          name: imageURL
 *          required: true
 *          description: URL destination of image to get tags
 *          schema:
 *              type: string
 *      responses:
 *          200:
 *              description: Image tag(s) of an image
 */
app.get('/tags/*', (req, res)=>{
    searchFeature = "tags";
    var image = req.params[0];
    console.log(image)
    options.uri = 'https://itis6177finalproject.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2022-10-12-preview&features=' + searchFeature + '&model-version=latest&language=en;'
    options.body = "{'url': " + "'" + image + "'}"
    
    
    request.post(options, (error, response, body) => {
        console.log(options.endpoint)
      if (error) {
        console.log('Error: ', error);
        return;
      }
      let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
      console.log('JSON Response\n');
      console.log(jsonResponse);
      res.send(jsonResponse)
    });
});

//Description
/**
 * @swagger
 * /objects/{imageURL}:
 *  get:
 *      summary: Get Objects within an Image
 *      description: Returns an object or list of objects within an image. This is similar to tags, but objects also return a bounding box around the object found.
 *      parameters:
 *        - in: path
 *          name: imageURL
 *          required: true
 *          description: URL destination of image to get objects from
 *          schema:
 *              type: string
 *      responses:
 *          200:
 *              description: Object(s) within image
 */
app.get('/objects/*', (req, res)=>{
    searchFeature = "objects";
    var image = req.params[0];
    console.log(image)
    options.uri = 'https://itis6177finalproject.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2022-10-12-preview&features=' + searchFeature + '&model-version=latest&language=en;'
    options.body = "{'url': " + "'" + image + "'}"
    
    
    request.post(options, (error, response, body) => {
        console.log(options.endpoint)
      if (error) {
        console.log('Error: ', error);
        return;
      }
      let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
      console.log('JSON Response\n');
      console.log(jsonResponse);
      res.send(jsonResponse)
    });
});

//Read
/**
 * @swagger
 * /read/{imageURL}:
 *  get:
 *      summary: Get Text from an Image
 *      description: Returns text within a given image using OCR alogrithms assuming there is text within the image
 *      parameters:
 *        - in: path
 *          name: imageURL
 *          required: true
 *          description: URL destination of image to find text within
 *          schema:
 *              type: string
 *      responses:
 *          200:
 *              description: Text found within image
 */
app.get('/read/*', (req, res)=>{
    searchFeature = "read";
    var image = req.params[0];
    console.log(image)
    options.uri = 'https://itis6177finalproject.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2022-10-12-preview&features=' + searchFeature + '&model-version=latest&language=en;'
    options.body = "{'url': " + "'" + image + "'}"
    
    
    request.post(options, (error, response, body) => {
        console.log(options.endpoint)
      if (error) {
        console.log('Error: ', error);
        return;
      }
      let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
      console.log('JSON Response\n');
      console.log(jsonResponse);
      res.send(jsonResponse)
    });
});

//SmartCrops
/**
 * @swagger
 * /smartCrops/{imageURL}:
 *  get:
 *      summary: Automatically Crops an Image Based on Key Features within the Image.
 *      description: Returns a bounding box denoting the automatically created dimensions for the image to be cropped.
 *      parameters:
 *        - in: path
 *          name: imageURL
 *          required: true
 *          description: URL destination of image to crop
 *          schema:
 *              type: string
 *      responses:
 *          200:
 *              description: Dimensions of the automatically cropped image. Includes aspect ratio and pixel dimensions.
 */
app.get('/smartCrops/*', (req, res)=>{
    searchFeature = "smartCrops";
    var image = req.params[0];
    console.log(image)
    options.uri = 'https://itis6177finalproject.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2022-10-12-preview&features=' + searchFeature + '&model-version=latest&language=en;'
    options.body = "{'url': " + "'" + image + "'}"
    
    
    request.post(options, (error, response, body) => {
        console.log(options.endpoint)
      if (error) {
        console.log('Error: ', error);
        return;
      }
      let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
      console.log('JSON Response\n');
      console.log(jsonResponse);
      res.send(jsonResponse)
    });
});

//People
/**
 * @swagger
 * /description/{imageURL}:
 *  get:
 *      summary: Locate People within an Image
 *      description: Returns a list of identified people within a given image
 *      parameters:
 *        - in: path
 *          name: imageURL
 *          required: true
 *          description: URL destination of image to find people within
 *          schema:
 *              type: string
 *      responses:
 *          200:
 *              description: Person or list of people found within an image.
 */
app.get('/people/*', (req, res)=>{
    searchFeature = "people";
    var image = req.params[0];
    console.log(image)
    options.uri = 'https://itis6177finalproject.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2022-10-12-preview&features=' + searchFeature + '&model-version=latest&language=en;'
    options.body = "{'url': " + "'" + image + "'}"
    
    
    request.post(options, (error, response, body) => {
        console.log(options.endpoint)
      if (error) {
        console.log('Error: ', error);
        return;
      }
      let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
      console.log('JSON Response\n');
      console.log(jsonResponse);
      res.send(jsonResponse)
    });
});
