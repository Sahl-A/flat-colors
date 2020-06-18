import chroma from 'chroma-js';
const levels = [50,100,200,300,400,500,600,700,800,900];
/* 
    {
    paletteName: "Material UI Colors",
    id: "material-ui-colors",
    emoji: "🎨",
    colors: [
      { name: "red", color: "#F44336" },
      { name: "pink", color: "#E91E63" },
      { name: "purple", color: "#9C27B0" },
      { name: "deeppurple", color: "#673AB7" },
      { name: "indigo", color: "#3F51B5" },
      { name: "blue", color: "#2196F3" },
      { name: "lightblue", color: "#03A9F4" },
      { name: "cyan", color: "#00BCD4" },
      { name: "teal", color: "#009688" },
      { name: "green", color: "#4CAF50" },
      { name: "lightgreen", color: "#8BC34A" },
      { name: "lime", color: "#CDDC39" },
      { name: "yellow", color: "#FFEB3B" },
      { name: "amber", color: "#FFC107" },
      { name: "orange", color: "#FF9800" },
      { name: "deeporange", color: "#FF5722" },
      { name: "brown", color: "#795548" },
      { name: "grey", color: "#9E9E9E" },
      { name: "bluegrey", color: "#607D8B" }
    ]
  }
 */

//  Convert the above dataStructure to the below one
/* 
    {
    paletteName: "Material UI Colors",
    id: "material-ui-colors",
    emoji: "🎨",
    colors: {
      50:  [],
      100: [],
      200: [],
      300: [
          {name: red 300, id: red, hex: #FF0000, rgb: rgb(255,0,0), rgba(255,0,0,1)},
          {name: yellow 300, id: yellow, hex: #FFFF00, rgb: rgb(255,2gg,0), rgba(255,255,0,1)},
          {name: red, id: red, hex: #FF0000, rgb: rgb(255,0,0), rgba(255,0,0,1)},
      ]
    }
  }
 */


const generatePalette = (oldPalette) => {
    const newPalette = {
        ...oldPalette,
        colors: {}
    }

    // convert colors inside newPalette to object of arrays
    for (const level of levels) {
        newPalette.colors[level] = [];
    }

    for(const color of oldPalette.colors) {
        const scale = setScale(color.color, 10);
        for(const i in scale) {
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)')
            })
        }
    }

    return newPalette;
}

// Get range of the colors to pass it to chroma.scale() below 
const getRange = (hexColor) => {
    return [
        '#fff',
        hexColor,
        chroma(hexColor).darken(1.4).hex(),
    ]
}

// Generate 10 shades of the passed color
const setScale = (hexColor, numberOfColors) => {
   return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors)
}

export { generatePalette };