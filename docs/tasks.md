## Style Explorer Features
### Necessary
* MAGNIFIER, SET COLOR ON CLICK
* DOM COLOR PICKER, SET COLOR, HSL DISPLAY
* SOURCE FROM PIXELS
* COLLAPSIBLES, RESPONSIVE LAYOUT, SOURCE GROW
* COPY ICON
* 2D HSL GRAPH
### Optional
* 3D HSL GRAPH
* COLOR PICKER BACKGROUND PIXELS
* SAVED COLORS
* SAVE & DELETE SOURCES

## Style Explorer Tasks
### To Do
* Create magnifier, display pixels at specific size
* Add click/drag events to move magnifier
* Add click/drag events to set color from magnifier
* Add click/drag events to color picker
* Set HSL values from click and drag
* Add HSL to RGB conversion function
* Update data reference
* Parse source image data, add colors key to sources
* Add source color reduce function for grouping
* Add test for soure image data processing

#### Components
* Show full source name on hover
#### Data
* Define ui state slice
* Sort sources by timeAdded
* Save sources to indexdb
* Add message for bad url/file fetch or load
* Update docs with actions, reducers, data
* Add a default source or sources
#### Graphics
* Create basic color picker from dom elements
* Add rotating circle to color picker
* Add color elements for color picker directions
* Add custom image background to color picker
* Create a webgl transparent-background cube
* Add mouse movements to rotate cube
#### Style/Layout
* Create copy icons from dom elements
* Resize source to take available space
* Resize picker to be full width on mobile
* Create icon and android/ios icon set
* Add pwa files (sw, manifest, icons)

### Completed
* Choose body and headline fonts
* Clean up font link tag
* Fix margins for nav and content
* Update component list in readme, change app to a bullet
* Create new components for updated tree
* Remove components (SearchPane, SourceContainer, SourceDisplay, ToolBar, ToolDisplay)
* Add redux store, provider, and subscibe to monitor
* Dispatch color from color picker
* Add color conversions hex to RGB & HSL
* Add color tests
* Add currentColor reducer tests
* Dispatch color from color picker
* Set color in color bar and picker from store/props
* Add source form as a controlled component
* Load a local image
* Load a url image
* Read image pixels, print info, hide canvas
* Add action for adding source
* Test undefined, bad action, add source, in sources reducer
* Add action for setting color
* Define actions
* Define action creators
* Add color conversion file
* Add current color selection reducer and actions
* Add test suite per reducer
* Add RGB to HSL conversion function
* Add action to set the current source by url
* Test undefined, bad action, set source, in currentSource reducer
* Display image in source component by current source url
* Set current source when clicking on recent source
