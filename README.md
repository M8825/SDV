# State Data Visualization
&emsp;

State Data Visualization is a data visualization of the United States. For each state, it shows GDP, Population, Area in sq mi, Unemployment rate, etc. SDV presents the user with a map of the United States. After clicking on a specific state, it fetches the state's unique data from various sources. After fetching data, it dynamically renders data, highlights, and zooms into the state on the map. SDV will follow the Bauhaus style in graphic design, featuring sharp corners, edges, and strong lines.


&emsp;
## Main Wireframe

!["Wireframe"](./src/imgs/Wireframe.png)


&emsp;
## Functionality and MVPs
In **SDV**, users will be able to:
1. Click on the map to select the state.
2. Zoom in/out a map.
3. Detailed view of statistics for the selected state.
4. Historical bar chart for specific statistics (For example: GDP per capita historical data).

&emsp;
## Technologies & Libraries
* HTML, CSS, JavaScript, D3, Webpack


&emsp;
## Modal/Info window
The Modal is a customizable and accessible overlay component designed to display concise instructions and highlight the core functionalities of your website. It serves as an immediate point of reference for users to understand and navigate your site with ease.
!["Modal"](./src/imgs/modal_anim.gif)

&emsp;
## Map
Users can click on any state on the map, and relevant economic/demographic data will be displayed for the selected US state. **Stately** fetches publicly available data from the following sources:

- [U.S. Bureau of Economic Analysis (BEA)](https://www.bea.gov/)
- [United States Census Bureau](https://www.census.gov/data/developers/data-sets.html)

!["Map"](./src/imgs/click_on_map.gif)
&emsp;


## Implementation Timeline:
* **Friday Afternoon & Weekend:**
 Setup project, including getting webpack up and running. Create map, state, classes and ensure that my data is being fetched properly. Get zoom in and zoom out functionality.


* **Monday:** Build UI skeleton and create theme based on bauhaus principles.

* **Tuesday:** Implement index chart with historical index chart for each category (unemployment, GDP per capita etc.)

* **Wednesday:** TBD...

* **Thursday:** Deploy to GitHub pages.
