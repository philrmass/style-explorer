## Style Explorer Tasks

### To Do
* Add source form as a controlled component
* Load a local image
* Add click/drag events to color picker
* Set HSV values from click and drag
* Update data reference

#### Components
* Read pixel values from source
* Display image in source component
* Load a url image
* Create magnifier, display pixels at specific size
* Add click/drag events to move magnifier
* Add click/drag events to select color in magnifier
* Connect magnifier events to current color reducer
* Show full source item text on hover
#### Data
* Define ui state slice
* Define currentSource state slice
* Define sources state slice
* Define actions
* Define action creators
* Add color conversion file
* Add current color selection reducer and actions
* Add test suite per reducer
* Process source pixels and set source data
* Add hsv to rgb conversion function
* Add rgb to hsv conversion function
* Add source color reduce function for grouping
* Save sources to indexdb
* Update docs with actions, reducers, data
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
* Add color conversions hex to rgb & hsv
* Add color tests
* Add currentColor reducer tests
* Dispatch color from color picker
* Set color in color bar and picker from store/props
