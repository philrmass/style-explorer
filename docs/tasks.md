## Style Explorer Features
### Current
* Hex, RGBA, and HSL copyable references
* Color picker

### Future
* Improved Color picker
* Saved sources (w/ delete)
* Saved colors (w/ delete)
* 3D HSL graph

## Style Explorer Tasks
### To Do
* Add thunk middleware to clean up fetch and color processing calls
* Add rotating circle to color picker
* Add sat and light sliders to color picker
* Add background pixels to color picker
* Touch events in color picker
* Change text color to contrast with current color
* Add test for soure image data processing
* Add tests for all color conversion
* Optimize source color processing
* Process source colors in web workers, split up
* Restore test for source add
* Add test for set source colors
* Add tests for pixel processing
* Add thunk for async actions (image loading, pixel processing)
* Add image.js to process images
* Add custom image background to color picker
* Add arrow keys to move magnifier
* Add pwa files (sw, manifest, icons)
* Add default sources
* Add message for bad url/file fetch or load
* Show full source name on hover
* Sort sources by timeAdded
* Save sources to indexdb
* Create a webgl transparent-background cube
* Add mouse movements to rotate cube
* Create 3d hsl graph

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
* Create magnifier, display pixels at specific size
* Add click/drag events to move magnifier
* Yellow border on magnifier
* Write x,y info by magifier, css
* Set display size on resize events
* Set cursor pos on image load
* Set cursor in display size action
* Set cursor in full size action
* Fix magnifier tests
* Change color set back to hex
* Pick color in magnifier
* Create copy icon from dom
* Add hsl display at top of picker
* Create copy icons from dom elements
* Magnifier, set color on click
* Copy icon
* Add hsl to rgb conversion function and test
* Add hsl color reducer and action
* Add mouse move events to color picker divs
* Update hsl values from mouse movements
* Set source component to grow
* Fix margin and padding on collapsibles
* Fix layout of collapsibles
* Resize picker to be full width on mobile
* Remove padding and margin on mobile
* Make line white on color picker
* Update docs with actions, reducers, data
* Add source color reduce function for grouping
* Parse source image data, add colors key to sources
* Add 2D hsl graph
