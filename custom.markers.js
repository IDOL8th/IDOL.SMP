/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

            // France
        {
            x: 1994,
            z: 4192,
            image: "images/france.jpg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "French Republic",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 17px Calibri,sans serif",
        },

// Dutch Republic
        {
            x: 2231,
            z: 3638,
            image: "images/dutch.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Dutch Republic",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        },
// Spain
        {
            x: 1080,
            z: 5295,
            image: "images/spain.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Spain",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 17px Calibri,sans serif",
        },
// Portugal
        {
            x: 476,
            z: 5313,
            image: "images/portugal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Portugal",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        }, 
// Britain
        {
            x: 1730,
            z: 3665,
            image: "images/britain.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Great Britain",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 17px Calibri,sans serif",
        }, 

// Prussia
        {
            x: 3009,
            z: 3590,
            image: "images/prussia.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Prussia",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 17px Calibri,sans serif",
        },

// Russia
        {
            x: 4826,
            z: 2741,
            image: "images/russia.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Russian Empire",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 17px Calibri,sans serif",
        },
 
// Sweden
        {
            x: 3281,
            z: 2615,
            image: "images/sweden.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Sweden",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        },

        // Ottoman Empire
        {
            x: 4834,
            z: 5028,
            image: "images/ottoman.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Ottoman Empire",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 17px Calibri,sans serif",
        },
 
// Naples
        {
            x: 3210,
            z: 5338,
            image: "images/naples.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Naples",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        },
 
// Saxony
        {
            x: 2884,
            z: 3843,
            image: "images/saxony.jpg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Saxony",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        },
 
// Venetian Republic
        {
            x: 2946,
            z: 4631,
            image: "images/venice.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Venetian Republic",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        },
 
// Denmark
        {
            x: 2852,
            z: 3164,
            image: "images/denmark.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Denmark",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        },
        
// Bavaria
        {
            x: 2882,
            z: 4141,
            image: "images/bavaria.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "bavaria",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        },
 
// Austrian Empire
        {
            x: 3347,
            z: 4259,
            image: "images/austria.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Austrian Empire",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 17px Calibri,sans serif",
        },
 
// Savoy
        {
            x: 2445,
            z: 4764,
            image: "images/savoy.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Savoy",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        },
 
// Cologne
        {
            x: 2567,
            z: 3851,
            image: "images/cologne.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Cologne",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        },
 
// Baden-Wurttemberg
        {
            x: 2629,
            z: 4184,
            image: "images/baden.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Baden-Wurttemberg",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        },

// Milan
        {
            x: 2660,
            z: 4725,
            image: "images/milan.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Milan",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        },
 
// Nassau
        {
            x: 2379,
            z: 3984,
            image: "images/nassau.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Nassau",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        },
// Poland
        {
            x: 3700,
            z: 3569,
            image: "images/Poland.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Poland",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 17px Calibri,sans serif",
        },
 
// Papal States
        {
            x: 2988,
            z: 5181,
            image: "images/papal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Papal States",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        },
 
// Hanover
        {
            x: 2618,
            z: 3582,
            image: "images/hanover.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Hanover",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        },
 
// Morocco
        {
            x: 609,
            z: 6197,
            image: "images/morocco.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Morocco",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        },
 
// Tuscany
        {
            x: 2799,
            z: 4989,
            image: "images/tuscany.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Tuscany",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "17px Calibri,sans serif",
        },
        
// Switzerland
        {
            x: 2466,
            z: 4477,
            image: "images/switzerland.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Switzerland",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 17px Calibri,sans serif",
        },

        // do not delete the following two closing brackets
    ]
}
