# Image Editor

This application allows users to upload an image, apply various filters to it, and download the modified image. The filters include saturation, contrast, brightness, sepia, grayscale, blur, and hue rotation.

## Features

- Upload an image and display it on a canvas.
- Apply multiple filters to the image.
- Reset filters to default values.
- Download the modified image.

## Getting Started

### Prerequisites

You will need a modern web browser to run this application.

### Usage

1. **Upload an Image**
   - Click on the "Upload" button to select an image from your computer.
   
2. **Apply Filters**
   - Adjust the filter values using the sliders provided. The available filters are:
     - Saturation
     - Contrast
     - Brightness
     - Sepia
     - Grayscale
     - Blur
     - Hue Rotate

3. **Reset Filters**
   - Click the "Reset" button to reset all filter values to their default settings.

4. **Download Image**
   - Click the "Download" button to download the modified image.

## Code Overview

### Global Variables

- `saturateInput`, `contrastInput`, `brightnessInput`, `sepiaInput`, `grayScaleInput`, `blurInput`, `hueRotateInput`: Input elements for the filters.
- `uploadBtn`, `downloadBtn`, `resetBtn`: Buttons for uploading, downloading, and resetting.
- `img`: Image element where the uploaded image is initially displayed.
- `imgBox`: Container for the image element.
- `filters`: Collection of all filter input elements.
- `canvas`, `ctx`: Canvas element and its context used for drawing the image.

### Events

- **`window.onload`**
  - Hides the download and reset buttons, and the image container on page load.
  
- **`uploadBtn.onchange`**
  - Reads and displays the uploaded image.
  - Draws the image onto the canvas.

- **`resetBtn.onclick`**
  - Resets the filter values to default and redraws the image on the canvas.

- **`downloadBtn.onclick`**
  - Creates a downloadable link for the modified image from the canvas.

- **Filter Input Events**
  - Listens for input changes on the filter sliders and applies the corresponding filters to the canvas.

### Functions

- **`resetValue`**
  - Resets all filter values to their default settings.
## Live Demo

Experience the Tabs Project in action! Click the link below to access the live demo:

### [Live Demo](https://a-hemeda.github.io/Image-Editor/)

Feel free to interact with the project, browse through different jobs, and explore the user-friendly interface. The live demo provides a hands-on experience to see the Tabs Project in action.
