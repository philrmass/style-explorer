# Style Explorer Components

## Component Tree

App
- SourceContainer [Main application state]
  - MainPane
    - NavBar
    - ColorBar
      - Button (x2)
        - Icon
    - ToolBar
      - Button (xN)
        - Icon
    - SourceList
      - SourceItem
    - ToolDisplay
      - ColorPicker
      - BoxGraph
    - SourceDisplay
      - Magnifier
  - StartupPane
    - SourceLoadForm

## Application Sketches

I created these sketches of the various dynamic states of the app in order to sort out the component hierarchy

### Startup Mode

<img src="startup.png" width="400px"/>

### Graph Mode

<img src="graph.png" width="400px"/>

### Picker Mode

<img src="picker.png" width="400px"/>
