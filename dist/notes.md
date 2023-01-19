# Index chart
* Line chart will be for last 5 years ideally


## DATA API
- [X] Census - Population by state:
    - https://api.census.gov/data/2021/pep/population?get=POP_2021,NAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d

- [X] Census - Full Employment by State:
    - https://api.census.gov/data/timeseries/govs?get=NAME,TOT_EMP,TOT_EMP_CV&for=state:*&time=2020&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d
    * State and Local Government Employment and Payroll Data:
        * US and States: 2017 - 2021;
        * State Government Employment and Payroll Data: US and States: 2017 - 2021;

- [X] Bureau of Labor Statistics - "Gross Domestic Product (GDP): All industry total" - last five years
    - https://apps.bea.gov/api/data?&UserID=63D07D0B-8744-419D-821C-656CB11239D2&method=getdata&datasetname=Regional&GeoFips=STATE&LineCode=1&TableName=CAGDP2&ResultFormat=XML

    * WHAT I NEED:
        * GeoName - State name
        * DataValue - GDP


- [ ] GDP Per Capita - I'll take population and divide it by GDP

- [X] Bureau of Economic Analysis - Per Capita Personal Income - Alabama link - Last 5 years
    - https://apps.bea.gov/api/data?&UserID=63D07D0B-8744-419D-821C-656CB11239D2&method=getdata&datasetname=Regional&GeoFips=01000&LineCode=30&TableName=SAINC50&ResultFormat=JSON



## State passed object

{
}



# TODOs
- [X] make update function abstract
- CHART:
    - BY YEAR - 5 years
        * Total Population in state
        * Total Employment in US
        * Total GDP in US
        * Total Personal Income in US



#map {
    height: 100vh;
    width: 30%;
}


* Chart
    - [ ] window['chartCategory'] should be set by even listener when you click <li> on stats table
        - or it will be set automatically to population in stats.setCategory()
