export default function () {
  return [
    {
      title: 'Bar chart',
      content: 'This chart shows a histogram of a Bates distribution. The data is randomly generated. The values are then binned at regular intervals using D3’s histogram layout. The x-axis uses a linear scale, such that the tick values appear between bars; this provides better indication that each bar represents the count of values between its surrounding tick values, it is inspired by http://bl.ocks.org/mbostock/3048450/',
      thumbnailUrl: '/assets/img/thumbnail/barchart.png'
    },
    {
      title: 'Force layout',
      content: 'This example demonstrates applying d3.drag for dragging circles in SVG. Each circle’s datum is an object with x and y properties. The data and the circle element’s position are updated during the drag event. The circle is raised to the foreground at the start of a drag, and a temporary stroke is applied during drag for visual feedback, it is inspired by http://bl.ocks.org/mbostock/22994cc97fefaeede0d861e6815a847e/',
      thumbnailUrl: '/assets/img/thumbnail/force.png'
    },
    {
      title: 'Line chart',
      content: 'A line chart rendered to Canvas using d3-shape. Rendering the axes is a bit tedious, but that’s we need a d3-axis module, it is inspired by http://bl.ocks.org/mbostock/1550e57e12e73b86ad9e/',
      thumbnailUrl: '/assets/img/thumbnail/linechart.png'
    },
    {
      title: 'Ring Diagram',
      content: "A pie chart (or a circle chart) is a circular statistical graphic, which is divided into slices to illustrate numerical proportion. In a pie chart, the arc length of each slice (and consequently its central angle and area), is proportional to the quantity it represents. While it is named for its resemblance to a pie which has been sliced, there are variations on the way it can be presented. The earliest known pie chart is generally credited to William Playfair's Statistical Breviary of 1801, it is inspired by http://bl.ocks.org/mbostock/1346410/",
      thumbnailUrl: '/assets/img/thumbnail/ring.png'
    }
  ]
}