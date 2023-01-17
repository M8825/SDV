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

- [ ] Bureau of Labor Statistics - Per Capita Personal Income - Alabama link - Last 5 years
    - https://apps.bea.gov/api/data?&UserID=63D07D0B-8744-419D-821C-656CB11239D2&method=getdata&datasetname=Regional&GeoFips=01000&LineCode=30&TableName=SAINC50&ResultFormat=JSON



## State passed object

{
    "name": "Alabama",
    "population": [4903185, 1],
    "gdp": 222,
    "gdpPerCapita": 45,
    "employment": 2.5,
    "personalIncome": 45
}


# TODOs
## State object
    [x] - 1 or 0 indicating if the state pop increased or decreased compared to last year.
    [ ] - 1 or 0 indicating if the state gdp increased or decreased compared to last year.
    [ ] - 1 or 0 indicating if the state gdpPerCapita increased or decreased compared to last year.
    [ ] - 1 or 0 indicating if the state employment increased or decreased compared to last year.
    [ ] - 1 or 0 indicating if the state personalIncome increased or decreased compared to last year.

## Stats
- [ ] Initialize with USA stats
    * I don't have a stats for USA and I'm considering to hard code it.

## Performance
- [ ] Instead of fetching map, load it from a local file


  [{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2000-01-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2000-02-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2000-03-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2000-04-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2000-05-01, unemployment: 2.7},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2000-06-01, unemployment: 2.7},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2000-07-01, unemployment: 2.7},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2000-08-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2000-09-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2000-10-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2000-11-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2000-12-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2001-01-01, unemployment: 2.7},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2001-02-01, unemployment: 2.7},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2001-03-01, unemployment: 2.8},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2001-04-01, unemployment: 2.8},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2001-05-01, unemployment: 2.9},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2001-06-01, unemployment: 3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2001-07-01, unemployment: 3.1},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2001-08-01, unemployment: 3.3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2001-09-01, unemployment: 3.4}
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2001-10-01, unemployment: 3.5},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2001-11-01, unemployment: 3.5},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2001-12-01, unemployment: 3.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2002-01-01, unemployment: 3.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2002-02-01, unemployment: 3.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2002-03-01, unemployment: 3.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2002-04-01, unemployment: 3.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2002-05-01, unemployment: 3.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2002-06-01, unemployment: 3.5},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2002-07-01, unemployment: 3.5},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2002-08-01, unemployment: 3.4},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2002-09-01, unemployment: 3.4},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2002-10-01, unemployment: 3.4},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2002-11-01, unemployment: 3.4},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2002-12-01, unemployment: 3.4},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2003-01-01, unemployment: 3.4},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2003-02-01, unemployment: 3.4},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2003-03-01, unemployment: 3.4},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2003-04-01, unemployment: 3.4},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2003-05-01, unemployment: 3.4},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2003-06-01, unemployment: 3.4},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2003-07-01, unemployment: 3.4},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2003-08-01, unemployment: 3.3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2003-09-01, unemployment: 3.3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2003-10-01, unemployment: 3.3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2003-11-01, unemployment: 3.3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2003-12-01, unemployment: 3.3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2004-01-01, unemployment: 3.2},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2004-02-01, unemployment: 3.2},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2004-03-01, unemployment: 3.2},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2004-04-01, unemployment: 3.2},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2004-05-01, unemployment: 3.2},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2004-06-01, unemployment: 3.2},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2004-07-01, unemployment: 3.2},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2004-08-01, unemployment: 3.2},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2004-09-01, unemployment: 3.2},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2004-10-01, unemployment: 3.2},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2004-11-01, unemployment: 3.2},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2004-12-01, unemployment: 3.3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2005-01-01, unemployment: 3.3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2005-02-01, unemployment: 3.3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2005-03-01, unemployment: 3.3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2005-04-01, unemployment: 3.2},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2005-05-01, unemployment: 3.2},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2005-06-01, unemployment: 3.1},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2005-07-01, unemployment: 3.1},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2005-08-01, unemployment: 3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2005-09-01, unemployment: 3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2005-10-01, unemployment: 3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2005-11-01, unemployment: 2.9},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2005-12-01, unemployment: 2.9},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2006-01-01, unemployment: 2.8},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2006-02-01, unemployment: 2.8},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2006-03-01, unemployment: 2.8},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2006-04-01, unemployment: 2.8},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2006-05-01, unemployment: 2.9},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2006-06-01, unemployment: 3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2006-07-01, unemployment: 3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2006-08-01, unemployment: 3},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2006-09-01, unemployment: 2.9},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2006-10-01, unemployment: 2.9},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2006-11-01, unemployment: 2.9},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2006-12-01, unemployment: 2.9},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2007-01-01, unemployment: 2.8},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2007-02-01, unemployment: 2.8},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2007-03-01, unemployment: 2.7},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2007-04-01, unemployment: 2.7},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2007-05-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2007-06-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2007-07-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2007-08-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2007-09-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2007-10-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2007-11-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2007-12-01, unemployment: 2.5},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2008-01-01, unemployment: 2.5},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2008-02-01, unemployment: 2.6},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2008-03-01, unemployment: 2.7},
  {division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2008-04-01, unemployment: 2.8},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2008-05-01, unemployment: 2.9},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2008-06-01, unemployment: 3.1},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2008-07-01, unemployment: 3.2},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2008-08-01, unemployment: 3.4},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2008-09-01, unemployment: 3.6},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2008-10-01, unemployment: 3.9},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2008-11-01, unemployment: 4.2},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2008-12-01, unemployment: 4.5},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2009-01-01, unemployment: 4.9},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2009-02-01, unemployment: 5.2},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2009-03-01, unemployment: 5.5},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2009-04-01, unemployment: 5.7},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2009-05-01, unemployment: 5.8},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2009-06-01, unemployment: 5.9},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2009-07-01, unemployment: 6},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2009-08-01, unemployment: 6},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2009-09-01, unemployment: 6.1},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2009-10-01, unemployment: 6.2},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2009-11-01, unemployment: 6.2},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2009-12-01, unemployment: 6.3},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2010-01-01, unemployment: 6.3},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2010-02-01, unemployment: 6.3},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2010-03-01, unemployment: 6.2},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2010-04-01, unemployment: 6.1},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2010-05-01, unemployment: 6},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2010-06-01, unemployment: 5.9},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2010-07-01, unemployment: 5.9},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2010-08-01, unemployment: 5.9},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2010-09-01, unemployment: 5.9},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2010-10-01, unemployment: 5.9},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2010-11-01, unemployment: 5.8},
{division: "Bethesda-Rockville-Frederick, MD Met Div", date: 2010-12-01, unemployment: 5.8}]
