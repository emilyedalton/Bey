import React from 'react'
import { Segment } from 'semantic-ui-react'

const Font= {

fontfamily: "nunito,sans-serif",
fontweight: "400",
fontstyle: "normal"
}

const Heading  = () => <Segment style = {Font} padded='very' content ="Mapping Southern Exposure " as= "h1"textAlign='left'/>

export default Heading